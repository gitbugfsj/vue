import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'
import RootPage from '../components/RootPage'
import WrongPassword from '../components/WrongPassword'
import IPForbidden from '../components/IPForbidden'
import WrongUsername from '../components/WrongUsername'
import ServerError from '../components/ServerError'
import EmailExist from '../components/EmailExist'
import SignUpSuccess from '../components/SignUpSuccess'
import SignUpFail from '../components/SignUpFail'
import RootEmailExist from '../components/RootEmailExist'
import RootSignUpFail from '../components/RootSignUpFail'
import RootSignUpSuccess from '../components/RootSignUpSuccess'
import RootDeleteFail from '../components/RootDeleteFail'
import Index from '../components/Index'

Vue.use(Router)
export default new Router({
  base: '/NetDisk/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login.html',
      name: 'Login',
      component: Login
    },
    {
      path: '/register.html',
      name: 'Register',
      component: Register
    },
    {
      path: '/wrongpassword.html',
      name: 'WrongPassword',
      component: WrongPassword
    },
    {
      path: '/IPForbidden.html',
      name: 'IPForbidden',
      component: IPForbidden
    },
    {
      path: '/wrongusername.html',
      name: 'WrongUsername',
      component: WrongUsername
    },
    {
      path: '/ServerError.html',
      name: 'ServerError',
      component: ServerError
    },
    {
      path: '/EmailExist.html',
      name: 'EmailExist',
      component: EmailExist
    },
    {
      path: '/SignUpSuccess.html',
      name: 'SignUpSuccess',
      component: SignUpSuccess
    },
    {
      path: '/SignUpFail.html',
      name: 'SignUpFail',
      component: SignUpFail
    },
    {
      path: '/RootEmailExist.html',
      name: 'RootEmailExist',
      component: RootEmailExist
    },
    {
      path: '/RootSignUpFail.html',
      name: 'RootSignUpFail',
      component: RootSignUpFail
    },
    {
      path: '/RootSignUpSuccess.html',
      name: 'RootSignUpSuccess',
      component: RootSignUpSuccess
    },
    {
      path: '/RootDeleteFail.html',
      name: 'RootDeleteFail',
      component: RootDeleteFail
    },
    {
      path: '/RootPage.html',
      name: 'RootPage',
      component: RootPage
    }
  ]
})
