import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//移动端适配
import "amfe-flexible";

//vant引入和使用
import { Button, Swipe, SwipeItem } from "vant";

//fxx轮播图样式
import "./assets/style/travel/banner.css";

//fxx全局样式
import "./assets/style/travel/public.css";


Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
