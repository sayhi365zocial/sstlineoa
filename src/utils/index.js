export const getCurrentUser = () => {
  let user = null
  try {
    user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null
  } catch (error) {
    console.log('>>>> src/utils/index.js : getCurrentUser -> error', error)
    user = null
  }
  return user
}

export const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.clear()
    }
  } catch (error) {
    console.log('>>>> src/utils/index.js : setCurrentUser -> error', error)
  }
}
