import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6e39fd4a = () => interopDefault(import('../src/pages/biz/index.vue' /* webpackChunkName: "pages/biz/index" */))
const _a13d9b98 = () => interopDefault(import('../src/pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _539a2a17 = () => interopDefault(import('../src/pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _2fcb48b8 = () => interopDefault(import('../src/pages/greeting/index.vue' /* webpackChunkName: "pages/greeting/index" */))
const _5e8597db = () => interopDefault(import('../src/pages/media/index.vue' /* webpackChunkName: "pages/media/index" */))
const _75c14322 = () => interopDefault(import('../src/pages/nagoya/index.vue' /* webpackChunkName: "pages/nagoya/index" */))
const _2a7b4cd2 = () => interopDefault(import('../src/pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _9432b17a = () => interopDefault(import('../src/pages/peopledevelopment/index.vue' /* webpackChunkName: "pages/peopledevelopment/index" */))
const _41542371 = () => interopDefault(import('../src/pages/policy/index.vue' /* webpackChunkName: "pages/policy/index" */))
const _084bf102 = () => interopDefault(import('../src/pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _6e18bfb5 = () => interopDefault(import('../src/pages/recruit/index.vue' /* webpackChunkName: "pages/recruit/index" */))
const _2c0ecfa4 = () => interopDefault(import('../src/pages/system/index.vue' /* webpackChunkName: "pages/system/index" */))
const _30440b68 = () => interopDefault(import('../src/pages/biz/choitore/index.vue' /* webpackChunkName: "pages/biz/choitore/index" */))
const _666fdce8 = () => interopDefault(import('../src/pages/biz/ginotore/index.vue' /* webpackChunkName: "pages/biz/ginotore/index" */))
const _3cc64c1e = () => interopDefault(import('../src/pages/biz/rpa/index.vue' /* webpackChunkName: "pages/biz/rpa/index" */))
const _6be9479d = () => interopDefault(import('../src/pages/biz/torepura/index.vue' /* webpackChunkName: "pages/biz/torepura/index" */))
const _1a208546 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/biz",
    component: _6e39fd4a,
    name: "biz"
  }, {
    path: "/company",
    component: _a13d9b98,
    name: "company"
  }, {
    path: "/contact",
    component: _539a2a17,
    name: "contact"
  }, {
    path: "/greeting",
    component: _2fcb48b8,
    name: "greeting"
  }, {
    path: "/media",
    component: _5e8597db,
    name: "media"
  }, {
    path: "/nagoya",
    component: _75c14322,
    name: "nagoya"
  }, {
    path: "/news",
    component: _2a7b4cd2,
    name: "news"
  }, {
    path: "/peopledevelopment",
    component: _9432b17a,
    name: "peopledevelopment"
  }, {
    path: "/policy",
    component: _41542371,
    name: "policy"
  }, {
    path: "/privacy",
    component: _084bf102,
    name: "privacy"
  }, {
    path: "/recruit",
    component: _6e18bfb5,
    name: "recruit"
  }, {
    path: "/system",
    component: _2c0ecfa4,
    name: "system"
  }, {
    path: "/biz/choitore",
    component: _30440b68,
    name: "biz-choitore"
  }, {
    path: "/biz/ginotore",
    component: _666fdce8,
    name: "biz-ginotore"
  }, {
    path: "/biz/rpa",
    component: _3cc64c1e,
    name: "biz-rpa"
  }, {
    path: "/biz/torepura",
    component: _6be9479d,
    name: "biz-torepura"
  }, {
    path: "/",
    component: _1a208546,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
