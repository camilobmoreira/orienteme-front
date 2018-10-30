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
      name: 'Home',
      component: loadView('Home')
      //meta: {
      // requiresAuth: true
      //}
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = store.getters.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser.userName) {
    Vue.$toast.open({
      duration: 2000,
      message: 'Efetue login para acessar essa área.',
      position: 'is-top-right',
      type: 'is-warning'
    })
    next('login')
  } else if (to.name === 'Login' && currentUser.userName) {
    Vue.$toast.open({
      duration: 2000,
      message: 'Você já está logado..',
      position: 'is-top-right',
      type: 'is-info'
    })
    next('/')
  } else next()
})

export default router
