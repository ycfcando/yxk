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
  Cell,
  Button,
  GoodsAction, 
  GoodsActionIcon, 
  GoodsActionButton,
  Tab, 
  Tabs,
  NavBar,
  Toast,
  Lazyload,
  PullRefresh,
  Image as VanImage
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
Vue.use(Cell);
Vue.use(Button);
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Lazyload);
Vue.use(PullRefresh);
Vue.use(VanImage);

//reset重置样式文件
import './assets/style/reset.less';
//fxx轮播图样式
import "./assets/style/travel/banner.css";

import "./assets/style/travel/public.css";

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
