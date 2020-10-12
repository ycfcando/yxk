import Vue from 'vue'
import Vuex from 'vuex'
import { getBanner, getDetailInfo } from '../utils/api'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bannerList: [], //我的页面请求数据
        // page: 1,
        detailInfo: {}
    },
    mutations: {
        getBannerList(state, payload) {
            // console.log(payload);
            // state.bannerList = state.bannerList.concat(payload)
            state.bannerList = payload
                // state.page++
        },
        getDetail(state, payload) {
            console.log(payload)
            state.detailInfo = payload
        }
    },
    actions: {
        async getBannerList({ commit }, payload) {
            // console.log(payload)
            const res = await getBanner(payload)

            commit('getBannerList', res.data.data)
        },
        // 详情页数据
        async getDetail({ commit }, payload) {
            // const res = await getDetailInfo(payload)
            console.log(payload)
            const res = await getDetailInfo({
                productId: payload.productId
            })

            commit('getDetail', res)
            console.log(res)
        },
    },
    modules: {}
})