import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/hangzhou",
  },
  {
    path: "/meet",
  },
  {
    path: "/community",
  },
  {
    path: "/mine",
  },
  {
    path: "/travel",
    component: () => import("../views/travel/Index.vue"),


  },
];

const router = new VueRouter({
  routes,
});

export default router;
