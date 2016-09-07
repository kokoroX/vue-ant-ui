import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './routes'
import VueAntUI from 'vue-ant-ui'
import './sass/site/style'
import './sass/highlight.scss'

// install router
Vue.use(VueRouter)
Vue.use(VueAntUI)

Vue.component('code-box', require('components/CodeBox'))

const router = new VueRouter()

// configure router
configRouter(router)

const App = Vue.extend(require('./App'))
router.start(App, '#app')

// just for debugging
window.router = router
