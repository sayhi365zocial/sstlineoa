import { isAuthGuardActive } from '@/constant/config'
import { setCurrentUser, getCurrentUser } from '.'
export default (to, from, next) => {
  if (to.matched.some((record) => record.meta.loginRequired)) {
    if (!isAuthGuardActive) next()

    const user = getCurrentUser()
    if (user) {
      const roleArrayHierarchic = to.matched.filter((x) => x.meta.roles).map((x) => x.meta.roles)
      if (roleArrayHierarchic.every((x) => x.includes(user.role))) {
        next()
      } else {
        next({ name: 'pagenotfound' })
      }
    } else {
      setCurrentUser(null)
      next('/auth/login')
    }
  } else {
    next()
  }
}
