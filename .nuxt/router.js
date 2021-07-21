import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e524b1fe = () => interopDefault(import('../src/pages/biz/index.vue' /* webpackChunkName: "pages/biz/index" */))
const _54ab286b = () => interopDefault(import('../src/pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _0e37bf64 = () => interopDefault(import('../src/pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _33c01961 = () => interopDefault(import('../src/pages/greeting/index.vue' /* webpackChunkName: "pages/greeting/index" */))
const _72d42a0b = () => interopDefault(import('../src/pages/nagoya/index.vue' /* webpackChunkName: "pages/nagoya/index" */))
const _1c864c0a = () => interopDefault(import('../src/pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _5650f68c = () => interopDefault(import('../src/pages/peopledevelopment/index.vue' /* webpackChunkName: "pages/peopledevelopment/index" */))
const _bdb80494 = () => interopDefault(import('../src/pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _1362b5ec = () => interopDefault(import('../src/pages/recruit/index.vue' /* webpackChunkName: "pages/recruit/index" */))
const _31e901d2 = () => interopDefault(import('../src/pages/system/index.vue' /* webpackChunkName: "pages/system/index" */))
const _d2c340de = () => interopDefault(import('../src/pages/biz/choitore/index.vue' /* webpackChunkName: "pages/biz/choitore/index" */))
const _332265b5 = () => interopDefault(import('../src/pages/biz/ginotore/index.vue' /* webpackChunkName: "pages/biz/ginotore/index" */))
const _3bdf7b56 = () => interopDefault(import('../src/pages/biz/rpa/index.vue' /* webpackChunkName: "pages/biz/rpa/index" */))
const _5b78c874 = () => interopDefault(import('../src/pages/biz/torepura/index.vue' /* webpackChunkName: "pages/biz/torepura/index" */))
const _51b8bb06 = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e524b1fe,
    name: "biz"
  }, {
    path: "/company",
    component: _54ab286b,
    name: "company"
  }, {
    path: "/contact",
    component: _0e37bf64,
    name: "contact"
  }, {
    path: "/greeting",
    component: _33c01961,
    name: "greeting"
  }, {
    path: "/nagoya",
    component: _72d42a0b,
    name: "nagoya"
  }, {
    path: "/news",
    component: _1c864c0a,
    name: "news"
  }, {
    path: "/peopledevelopment",
    component: _5650f68c,
    name: "peopledevelopment"
  }, {
    path: "/privacy",
    component: _bdb80494,
    name: "privacy"
  }, {
    path: "/recruit",
    component: _1362b5ec,
    name: "recruit"
  }, {
    path: "/system",
    component: _31e901d2,
    name: "system"
  }, {
    path: "/biz/choitore",
    component: _d2c340de,
    name: "biz-choitore"
  }, {
    path: "/biz/ginotore",
    component: _332265b5,
    name: "biz-ginotore"
  }, {
    path: "/biz/rpa",
    component: _3bdf7b56,
    name: "biz-rpa"
  }, {
    path: "/biz/torepura",
    component: _5b78c874,
    name: "biz-torepura"
  }, {
    path: "/",
    component: _51b8bb06,
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
