import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//移动端适配
import "amfe-flexible";

//vant引入和使用
import {
  Search,
  Icon,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  List,
  PullRefresh,
  Cell,
} from "vant";
Vue.use(Cell);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(List);
Vue.use(PullRefresh);

//fxx轮播图样式
import "./assets/style/travel/banner.css";
//reset重置样式文件
import "./assets/style/reset.less";

import "./assets/style/travel/public.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
