import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) { return originalPush.call(this, location).catch(err => err)}

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../views/index/index.vue'),
    children: [
      {
        path: '/',
        redirect: '/week'
      },
      {
        path: '/week',
        component: () => import('../components/index/week.vue')
      },
      {
        path: '/local',
        component: () => import('../components/index/local.vue')
      }
    ]
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
