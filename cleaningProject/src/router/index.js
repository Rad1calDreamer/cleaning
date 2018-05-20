import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/Authentication'

// Pages
import Home from '@/components/pages/Home'
import Wipers from '@/components/pages/Wipers/Wipers'
import ManagementCompanyList from '@/components/pages/ManagementCompany/List'
import AddressList from '@/components/pages/Address/List'
import Authentication from '@/components/pages/Authentication/Authentication'

// Global components
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import Menu from '@/components/Menu'
import CleaningList from '@/components/cleaning/cleaningList'


// Register components
Vue.component('app-header', Header)
Vue.component('cleaning-list', CleaningList)
Vue.component('app-menu', Menu)
Vue.component('app-modal', Modal)

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Header,
        cleaningList: CleaningList,
        menu: Menu
      },
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    },
    {
      path: '/wipers',
      name: 'Wipers',
      components: {
        default: Wipers,
        header: Header,
        cleaningList: CleaningList,
        menu: Menu,
        modal: Modal
      },
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/management-company',
      name: 'ManagementCompany',
      components: {
        default: ManagementCompanyList,
        header: Header,
        cleaningList: CleaningList,
        menu: Menu,
        modal: Modal
      },
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/address',
      name: 'Address',
      components: {
        default: AddressList,
        header: Header,
        cleaningList: CleaningList,
        menu: Menu,
        modal: Modal
      },
      meta: {
        requiredAuth: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (Auth.default.user.authenticated) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})
export default router
