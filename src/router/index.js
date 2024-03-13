import { createRouter, createWebHistory } from 'vue-router'
import PageNotfound from '../views/PageNotfound.vue'
import Login from '../views/auth/Login.vue'
import HomePage from '../views/HomePage.vue'
import FormLicense from '../views/FormLicense.vue'
import RequestForm from '../views/RequestForm.vue'
import Register from '../views/registration/Register.vue'
import OTP from '@/views/registration/OTP.vue'
import Address from '@/views/registration/Address.vue'
import TaxForm from '../views/TaxForm.vue'
import FormNormalRequest from '../views/form/FormNormalRequest.vue'
import FormBuilding from '@/views/form/FormBuilding.vue'
import FormBusinessCollectFood from '@/views/form/FormBusinessCollectFood.vue'
import FormBusinessCollectHazardWaste from '@/views/form/FormBusinessCollectHazardWaste.vue'
import FormBusinessCollectWaste from '@/views/form/FormBusinessCollectWaste.vue'
import FormBusinessHealthHazard from '@/views/form/FormBusinessHealthHazard.vue'
import FormBusinessMarket from '@/views/form/FormBusinessMarket.vue'
import FormBusinessSlaughterHouse from '@/views/form/FormBusinessSlaughterHouse.vue'
import FormClearningGarbage from '@/views/form/FormClearningGarbage.vue'
import FormClearningWaste from '@/views/form/FormClearningWaste.vue'
import FormComplainRequest from '@/views/form/FormComplainRequest.vue'
import FormDurableArticleRequest from '@/views/form/FormDurableArticleRequest.vue'
import FormNoticeCorruption from '@/views/form/FormNoticeCorruption.vue'
import FormObjectionTax from '@/views/form/FormObjectionTax.vue'
import FormPublicBus from '@/views/form/FormPublicBus.vue'
import FormRefundTax from '@/views/form/FormRefundTax.vue'
import FormRequestChangeProperty from '@/views/form/FormRequestChangeProperty.vue'
import FormWaterSupplyRequest from '@/views/form/FormWaterSupplyRequest.vue'
import authGuard from '@/utils/auth.guard'
import liffGuard from '@/utils/liff.guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: `/app` // ใส่ component หน้าแรกสุด ตรงนี้น้า แล้วปุ่มให้ route  ไป   home
    },
    {
      path: `/auth`,
      redirect: `/auth/login`,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: Register
        },
        {
          path: '/address',
          name: 'address',
          component: Address
        },
        {
          path: '/otp',
          name: 'otp',
          component: OTP
        }
      ]
    },
    {
      path: '/app',
      redirect: `/app/home`,
      meta: { loginRequired: true },
      children: [
        {
          path: 'home',
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
          path: '/form-business-collect-food',
          name: 'form-business-collect-food',
          component: FormBusinessCollectFood
        },
        {
          path: '/form-business-collect-waste',
          name: 'form-business-collect-waste',
          component: FormBusinessCollectWaste
        },
        {
          path: '/form-business-health-hazard',
          name: 'form-business-health-hazard',
          component: FormBusinessHealthHazard
        },
        {
          path: '/form-business-market',
          name: 'form-business-market',
          component: FormBusinessMarket
        },
        {
          path: '/form-business-slaughter-house',
          name: 'form-business-slaughter-house',
          component: FormBusinessSlaughterHouse
        },
        {
          path: '/form-clearning-garbage',
          name: 'form-clearning-garbage',
          component: FormClearningGarbage
        },
        {
          path: '/form-clearning-waste',
          name: 'form-clearning-waste',
          component: FormClearningWaste
        },
        {
          path: '/form-complain-request',
          name: 'form-complain-request',
          component: FormComplainRequest
        },
        {
          path: '/form-durable-article-request',
          name: 'form-durable-article-request',
          component: FormDurableArticleRequest
        },
        {
          path: '/form-notice-corruption',
          name: 'form-notice-corruption',
          component: FormNoticeCorruption
        },
        {
          path: '/form-objection-tax',
          name: 'form-objection-tax',
          component: FormObjectionTax
        },
        {
          path: '/form-public-bus',
          name: 'form-public-bus',
          component: FormPublicBus
        },
        {
          path: '/form-refund-tax',
          name: 'form-refund-tax',
          component: FormRefundTax
        },
        {
          path: '/form-request-change-property',
          name: 'form-request-change-property',
          component: FormRequestChangeProperty
        },
        {
          path: '/form-water-supply-request',
          name: 'form-water-supply-request',
          component: FormWaterSupplyRequest
        },
        {
          path: '/form-business-collect-hazard-waste',
          name: 'form-business-collect-hazard-waste',
          component: FormBusinessCollectHazardWaste
        },
        {
          path: '/request',
          name: 'request',
          component: RequestForm
        },
        {
          path: '/tax',
          name: 'tax',
          component: TaxForm
        }
      ]
    },

    {
      path: '/:catchAll(.*)',
      component: PageNotfound,
      name: 'pagenotfound'
    }
  ]
})

router.beforeEach(liffGuard)
router.beforeEach(authGuard)

export default router
