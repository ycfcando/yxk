import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import {
  getFlow,
  getIndex,
  getTravelT,
  getTravelG,
  getTravelC,
  getBanner, 
  getDetailInfo
} from "../utils/api";

export default new Vuex.Store({
  state: {
    indexData: {},
    flowData: [],
    tongList: [],
    guoList: [],
    jingList: [],
    travelList: {
      Z:"周边游",
      G:"国内游",
      C:"出境游"
    },
    bannerList: [], //我的页面请求数据
    // page: 1,
    detailInfo: {}
  },
  mutations: {
    //index数据
    getIndex(state, payload) {
      state.indexData = payload;
    },
    //flow数据
    getFlow(state, payload) {
      state.flowData = state.flowData.concat(payload);
    },
    //同城游数据
    getTongList(state, payload) {
      state.tongList = payload.data;
      console.log(state.tongList);
    },
    //国内游
    getGuoList(state, payload) {
      state.guoList = payload.data;
      console.log(state.guoList);
    },
    //出境游
    getJingList(state, payload) {
      state.jingList = payload.data;
      console.log(state.jingList);
    },
    //mine数据1
    getBannerList(state, payload) {
      // console.log(payload);
      // state.bannerList = state.bannerList.concat(payload)
      state.bannerList = payload
          // state.page++
    },
    //detail数据
    getDetailInfo(state, payload) {
        state.detailInfo = payload;
    }
  },
  actions: {
    //index数据
    getIndex({ commit }) {
      getIndex()
        .then((res) => {
          commit("getIndex", res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //flow数据
    getFlow({ commit }, params) {
      getFlow("", params)
        .then((res) => {
          commit("getFlow", res.data.data.list);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //同城游数据
    async getTongList({ commit }) {
      const res = await getTravelT();
      commit("getTongList", res.data);
    },
    //国内游
    async getGuoList({ commit }) {
      const res = await getTravelG();
      commit("getGuoList", res.data);
    },
    //出境游
    async getJingList({ commit }) {
      const res = await getTravelC();
      commit("getJingList", res.data);
    },
    //mine数据1
    async getBannerList({ commit }, payload) {
      // console.log(payload)
      const res = await getBanner(payload)

      commit('getBannerList', res.data.data)
    },
    //detail 数据
    async getDetailInfo({ commit }, payload) {
      // const res = await getDetailInfo(payload)
      const res = await getDetailInfo('', {pid: payload});

      commit('getDetailInfo', res.data);
    }
  },
  modules: {},
});
