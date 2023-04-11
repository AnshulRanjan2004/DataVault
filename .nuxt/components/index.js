export const CloudIcon = () => import('../..\\components\\CloudIcon.vue' /* webpackChunkName: "components/cloud-icon" */).then(c => wrapFunctional(c.default || c))
export const GithubIcon = () => import('../..\\components\\GithubIcon.vue' /* webpackChunkName: "components/github-icon" */).then(c => wrapFunctional(c.default || c))
export const LockIcon = () => import('../..\\components\\LockIcon.vue' /* webpackChunkName: "components/lock-icon" */).then(c => wrapFunctional(c.default || c))
export const Modal = () => import('../..\\components\\Modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const MoneroButton = () => import('../..\\components\\MoneroButton.vue' /* webpackChunkName: "components/monero-button" */).then(c => wrapFunctional(c.default || c))
export const OpenLockIcon = () => import('../..\\components\\OpenLockIcon.vue' /* webpackChunkName: "components/open-lock-icon" */).then(c => wrapFunctional(c.default || c))
export const PasteBox = () => import('../..\\components\\PasteBox.vue' /* webpackChunkName: "components/paste-box" */).then(c => wrapFunctional(c.default || c))
export const Progress = () => import('../..\\components\\Progress.vue' /* webpackChunkName: "components/progress" */).then(c => wrapFunctional(c.default || c))
export const ProgressBar = () => import('../..\\components\\ProgressBar.vue' /* webpackChunkName: "components/progress-bar" */).then(c => wrapFunctional(c.default || c))
export const SolidLockIcon = () => import('../..\\components\\SolidLockIcon.vue' /* webpackChunkName: "components/solid-lock-icon" */).then(c => wrapFunctional(c.default || c))
export const Spinner = () => import('../..\\components\\Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c))
export const UploadBox = () => import('../..\\components\\UploadBox.vue' /* webpackChunkName: "components/upload-box" */).then(c => wrapFunctional(c.default || c))
export const Warning = () => import('../..\\components\\Warning.vue' /* webpackChunkName: "components/warning" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
