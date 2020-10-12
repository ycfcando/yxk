import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) { return originalPush.call(this, location).catch(err => err)}

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: '/index',
    component: () => import('../views/index/index.vue'),
    children: [
      {
        path: "/",
        redirect: "/week",
      },
      {
        path: "/week",
        component: () => import("../components/index/week.vue"),
      },
      {
        path: "/local",
        component: () => import("../components/index/local.vue"),
      },
    ],
  },
  {
    path: "/hangzhou",
  },
  {
    path:'/meet',
    component:()=>import('../views/meet.jx/Meetjx.vue'),
  },
  {
    path:'/meet/meetjx',
    name:'meetjx',
    component:()=>import('../views/meet.jx/Meetjxs.vue')
  },
  {
    path: '/detail',
    name:'detail',
    component:()=>import('../views/detail/Detail.vue')
  },
  {
    path: "/community",
  },
  {
    path: "/mine",
  },
  {
    path: "/Zindex",
    component: () => import("../views/travel/Zindex.vue"),
  },
  {
    path: "/Cindex",
    component: () => import("../views/travel/Cindex.vue"),
  },
  {
    path: "/Gindex",
    component: () => import("../views/travel/Gindex.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
