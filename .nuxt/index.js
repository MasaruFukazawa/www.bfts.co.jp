import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../src/layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_googleanalytics_10e358f9 from 'nuxt_plugin_googleanalytics_10e358f9' // Source: ./google-analytics.js (mode: 'client')
import nuxt_plugin_nuxtuseragent_72c28396 from 'nuxt_plugin_nuxtuseragent_72c28396' // Source: ./nuxt-user-agent.js (mode: 'all')
import nuxt_plugin_axios_12fc450d from 'nuxt_plugin_axios_12fc450d' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_polyfills_7dce8c4e from 'nuxt_plugin_polyfills_7dce8c4e' // Source: ../src/plugins/polyfills (mode: 'client')
import nuxt_plugin_veevalidate_1a0c1998 from 'nuxt_plugin_veevalidate_1a0c1998' // Source: ../src/plugins/vee-validate.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"ja","prefix":"og: http:\u002F\u002Fogp.me\u002Fns#"},"title":"人とシステムをつくる会社｜株式会社BFT","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"株式会社BFTは、社会インフラといわれるような大規模な情報システム基盤環境を構築するプロジェクトに参画し、IT基盤技術を蓄積してまいりました。情報システム基盤の構築は、BFTがご支援します。"},{"hid":"X-UA-Compatible","http-equiv":"X-UA-Compatible","content":"ie=edge"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:locale","property":"og:locale","content":"ja_JP"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fwww.bfts.co.jp"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fwww.bfts.co.jp\u002Fimg\u002Fogp.png"},{"hid":"og:site_name","property":"og:site_name","content":"人とシステムをつくる会社｜株式会社BFT"},{"hid":"og:title","property":"og:title","content":"人とシステムをつくる会社｜株式会社BFT"},{"hid":"og:description","property":"og:description","content":"株式会社BFTは、社会インフラといわれるような大規模な情報システム基盤環境を構築するプロジェクトに参画し、IT基盤技術を蓄積してまいりました。情報システム基盤の構築は、BFTがご支援します。"},{"hid":"twitter:card","property":"twitter:card","content":"summary_large_image"},{"hid":"google-site-verification","name":"google-site-verification","content":"YZ-Dh_aT63Y6BxKfD5oa1j6eVNaPe0qF_mij38VM-cE"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"hid":"canonical","rel":"canonical","href":"https:\u002F\u002Fwww.bfts.co.jp"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Noto+Sans+JP:500,900&subset=japanese&display=swap"}],"script":[{"rel":"preload","src":"\u002F\u002Fcode.createjs.com\u002F1.0.0\u002Fcreatejs.min.js"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_googleanalytics_10e358f9 === 'function') {
    await nuxt_plugin_googleanalytics_10e358f9(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtuseragent_72c28396 === 'function') {
    await nuxt_plugin_nuxtuseragent_72c28396(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_12fc450d === 'function') {
    await nuxt_plugin_axios_12fc450d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_polyfills_7dce8c4e === 'function') {
    await nuxt_plugin_polyfills_7dce8c4e(app.context, inject)
  }

  if (typeof nuxt_plugin_veevalidate_1a0c1998 === 'function') {
    await nuxt_plugin_veevalidate_1a0c1998(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
