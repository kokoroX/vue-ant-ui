export default function (router) {
  router
  .map({
    '/doc': {
      name: 'doc',
      component: require('./pages/Doc'),
      subRoutes: {
        '/button': {
          name: 'button',
          component: require('./pages/button')
        },
        '/icon': {
          name: 'icon',
          component: require('./pages/icon')
        },
        '/layout': {
          name: 'layout',
          component: require('./pages/layout')
        },
        '/checkbox': {
          name: 'checkbox',
          component: require('./pages/checkbox')
        },
        '/input': {
          name: 'input',
          component: require('./pages/input')
        },
        '/input-number': {
          name: 'input-number',
          component: require('./pages/input-number')
        },
        '/radio': {
          name: 'radio',
          component: require('./pages/radio')
        },
        '/rate': {
          name: 'rate',
          component: require('./pages/rate')
        },
        '/switch': {
          name: 'switch',
          component: require('./pages/switch')
        },
        '/alert': {
          name: 'alert',
          component: require('./pages/alert')
        },
        '/badge': {
          name: 'badge',
          component: require('./pages/badge')
        },
        '/card': {
          name: 'card',
          component: require('./pages/card')
        },
        '/collapse': {
          name: 'collapse',
          component: require('./pages/collapse')
        },
        '/message': {
          name: 'message',
          component: require('./pages/message')
        },
        '/modal': {
          name: 'modal',
          component: require('./pages/modal')
        },
        '/notification': {
          name: 'notification',
          component: require('./pages/notification')
        },
        '/tag': {
          name: 'tag',
          component: require('./pages/tag')
        },
        '/timeline': {
          name: 'timeline',
          component: require('./pages/timeline')
        },
        '/tooltip': {
          name: 'tooltip',
          component: require('./pages/tooltip')
        },
        '/breadcrumb': {
          name: 'breadcrumb',
          component: require('./pages/breadcrumb')
        },
        '/spin': {
          name: 'spin',
          component: require('./pages/spin')
        },
        '/affix': {
          name: 'affix',
          component: require('./pages/affix')
        },
        '/back-top': {
          name: 'back-top',
          component: require('./pages/back-top')
        },
        '/steps': {
          name: 'steps',
          component: require('./pages/steps')
        },
        '/pagination': {
          name: 'pagination',
          component: require('./pages/pagination')
        },
        '/progress': {
          name: 'progress',
          component: require('./pages/progress')
        },
        '/form': {
          name: 'form',
          component: require('./pages/form')
        },
        '/table': {
          name: 'table',
          component: require('./pages/table')
        }
      }
    }
  })
  .redirect({
    '*': '/doc/button'
  })
}
