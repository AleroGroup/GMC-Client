import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dea5d9ba = () => interopDefault(import('../pages/challenges/index.vue' /* webpackChunkName: "pages/challenges/index" */))
const _3cb09dfa = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _11e32808 = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _be54a8e2 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _50af2e9c = () => interopDefault(import('../pages/ourstory/index.vue' /* webpackChunkName: "pages/ourstory/index" */))
const _2ea6d753 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _532d10b5 = () => interopDefault(import('../pages/talktous.vue' /* webpackChunkName: "pages/talktous" */))
const _491f6a84 = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _acad0b3c = () => interopDefault(import('../pages/welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _0eca7f29 = () => interopDefault(import('../pages/challenges/3-Day-Challenge.vue' /* webpackChunkName: "pages/challenges/3-Day-Challenge" */))
const _02c1b8cc = () => interopDefault(import('../pages/challenges/End.vue' /* webpackChunkName: "pages/challenges/End" */))
const _490c7592 = () => interopDefault(import('../pages/challenges/induction.vue' /* webpackChunkName: "pages/challenges/induction" */))
const _35c48852 = () => interopDefault(import('../pages/registration/company.vue' /* webpackChunkName: "pages/registration/company" */))
const _0a978070 = () => interopDefault(import('../pages/registration/wildcard.vue' /* webpackChunkName: "pages/registration/wildcard" */))
const _f0c53696 = () => interopDefault(import('../pages/user/dashhome.vue' /* webpackChunkName: "pages/user/dashhome" */))
const _415d1a11 = () => interopDefault(import('../pages/user/dashboard/contact.vue' /* webpackChunkName: "pages/user/dashboard/contact" */))
const _62cd9984 = () => interopDefault(import('../pages/user/dashboard/home.vue' /* webpackChunkName: "pages/user/dashboard/home" */))
const _22eb2f4e = () => interopDefault(import('../pages/user/dashboard/forms/company.vue' /* webpackChunkName: "pages/user/dashboard/forms/company" */))
const _f30f084e = () => interopDefault(import('../pages/user/dashboard/forms/wildcard.vue' /* webpackChunkName: "pages/user/dashboard/forms/wildcard" */))
const _63c5ec5c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/challenges",
      component: _dea5d9ba,
      name: "challenges"
    }, {
      path: "/contacts",
      component: _3cb09dfa,
      name: "contacts"
    }, {
      path: "/error",
      component: _11e32808,
      name: "error"
    }, {
      path: "/home",
      component: _be54a8e2,
      name: "home"
    }, {
      path: "/ourstory",
      component: _50af2e9c,
      name: "ourstory"
    }, {
      path: "/register",
      component: _2ea6d753,
      name: "register"
    }, {
      path: "/talktous",
      component: _532d10b5,
      name: "talktous"
    }, {
      path: "/user",
      component: _491f6a84,
      name: "user"
    }, {
      path: "/welcome",
      component: _acad0b3c,
      name: "welcome"
    }, {
      path: "/challenges/3-Day-Challenge",
      component: _0eca7f29,
      name: "challenges-3-Day-Challenge"
    }, {
      path: "/challenges/End",
      component: _02c1b8cc,
      name: "challenges-End"
    }, {
      path: "/challenges/induction",
      component: _490c7592,
      name: "challenges-induction"
    }, {
      path: "/registration/company",
      component: _35c48852,
      name: "registration-company"
    }, {
      path: "/registration/wildcard",
      component: _0a978070,
      name: "registration-wildcard"
    }, {
      path: "/user/dashhome",
      component: _f0c53696,
      name: "user-dashhome"
    }, {
      path: "/user/dashboard/contact",
      component: _415d1a11,
      name: "user-dashboard-contact"
    }, {
      path: "/user/dashboard/home",
      component: _62cd9984,
      name: "user-dashboard-home"
    }, {
      path: "/user/dashboard/forms/company",
      component: _22eb2f4e,
      name: "user-dashboard-forms-company"
    }, {
      path: "/user/dashboard/forms/wildcard",
      component: _f30f084e,
      name: "user-dashboard-forms-wildcard"
    }, {
      path: "/",
      component: _63c5ec5c,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
