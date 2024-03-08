import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import FormLicense from '../views/FormLicense.vue'
import RequestForm from '../views/RequestForm.vue'
import TaxForm from '../views/TaxForm.vue'
import FormNormalRequest from '../views/form/FormNormalRequest.vue'
import FormBuilding from '@/views/form/FormBuilding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/form',
      name: 'form',
      component: FormLicense
    },
    {
      path: '/form-normal-request',
      name: 'form-normal-request',
      component: FormNormalRequest
    },
    {
      path: '/form-building',
      name: 'form-building',
      component: FormBuilding
    },
    {
      path: '/request',
      name: 'request',
      component: RequestForm,
    },
    {
      path: '/tax',
      name: 'tax',
      component: TaxForm,
    }
  ]
})

export default router
