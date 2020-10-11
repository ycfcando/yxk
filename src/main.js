import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

//vant引入和使用
import { 
  Search, Icon, Swipe, SwipeItem, Grid, GridItem, Tabbar, TabbarItem, List, PullRefresh
} from 'vant';
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

//reset重置样式文件
import './assets/style/reset.less';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
