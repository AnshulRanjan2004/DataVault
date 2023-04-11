import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19bac869 = () => interopDefault(import('..\\pages\\d.vue' /* webpackChunkName: "pages/d" */))
const _2ed08ba8 = () => interopDefault(import('..\\pages\\d\\_cid.vue' /* webpackChunkName: "pages/d/_cid" */))
const _728661e0 = () => interopDefault(import('..\\pages\\myfiles.vue' /* webpackChunkName: "pages/myfiles" */))
const _8cc28ed0 = () => interopDefault(import('..\\pages\\paste.vue' /* webpackChunkName: "pages/paste" */))
const _7fb6e952 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/d",
    component: _19bac869,
    name: "d",
    children: [{
      path: ":cid?",
      component: _2ed08ba8,
      name: "d-cid"
    }]
  }, {
    path: "/myfiles",
    component: _728661e0,
    name: "myfiles"
  }, {
    path: "/paste",
    component: _8cc28ed0,
    name: "paste"
  }, {
    path: "/",
    component: _7fb6e952,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
