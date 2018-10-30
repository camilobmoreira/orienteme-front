import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: loadView('Login')
    },
    {
      path: '/home',
      name: 'Home',
      component: loadView('Home'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.currentUser
  const toast = store._actions.toast[0]
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser.userName) {
    toast({ message: 'Efetue login para acessar essa área.', color: 'error' })
    next('/')
  } else if (to.name === '/' && currentUser.userName) {
    toast({ message: 'Você já está logado.' })
    next('/home')
  } else next()
})

export default router
