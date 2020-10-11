import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'


//vant引入和使用
import { Button,GoodsAction, GoodsActionIcon, GoodsActionButton,Icon, Search,Tab, Tabs ,NavBar,Tabbar, TabbarItem,Toast,Lazyload, List,PullRefresh,Swipe, SwipeItem  } from 'vant';
Vue.use(Button)
Vue.use(Search)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Lazyload);
Vue.use(List);
Vue.use(PullRefresh)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Icon)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)










import './assets/style/reset.less'

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
