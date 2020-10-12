import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/publi.less'
import 'amfe-flexible'

//vant引入和使用
import { Button, Icon, List, Lazyload } from 'vant';

Vue.use(List);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')