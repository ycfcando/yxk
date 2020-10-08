import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index'
  },
  {
    path: '/hangzhou'
  },
  {
    path: '/meet'
  },
  {
    path: '/community'
  },
  {
    path: '/mine'
  }
]

const router = new VueRouter({
  routes
})

export default router
