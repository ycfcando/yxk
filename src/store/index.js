import Vue from 'vue'
import Vuex from 'vuex'
import { getBanner } from '../utils/api'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bannerList: [], //我的页面请求数据
    },
    mutations: {
        getBannerList(state, payload) {
            state.bannerList = payload.list
        },
    },
    actions: {
        async getBannerList({ commit }) {
            const res = await getBanner({})

            commit('getBannerList', res.result)
            console.log(res)
        },
    },
    modules: {}
})