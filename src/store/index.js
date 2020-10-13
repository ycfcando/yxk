import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import {
  getFlow,
  getIndex,
  getTravelT,
  getTravelG,
  getTravelC,
  getTravelCc,
  getTravelTt,
  getTravelGg,
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
      Z: "周边游",
      G: "国内游",
      C: "出境游",
    },
    ccList: [],
    ttList: [],
    ggList: [],
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
    //同城游列表
    getTravelTt(state, payload) {
      state.ttList = state.ttList.concat(payload);
    },

    //国内游数据
    getGuoList(state, payload) {
      state.guoList = payload.data;
      console.log(state.guoList);
    },
    //列表
    getTravelGg(state, payload) {
      state.ggList = state.ggList.concat(payload);
    },

    //出境游数据
    getJingList(state, payload) {
      state.jingList = payload.data;
      console.log(state.jingList);
    },
    //出境游列表
    getTravelCc(state, payload) {
      state.ccList = state.ccList.concat(payload);
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
    /* --------------------------------------------- */
    //同城游数据
    async getTongList({ commit }) {
      const res = await getTravelT();
      commit("getTongList", res.data);
    },
    //同城游列表
    getTravelTt({ commit }, params) {
      getTravelTt("", params)
        .then((res) => {
          commit("getTravelTt", res.data.data.data.list);
          console.log(res.data.data.data.list);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /* --------------------------------------------- */
    //国内游
    async getGuoList({ commit }) {
      const res = await getTravelG();
      commit("getGuoList", res.data);
    },

    //国内游列表
    getTravelGg({ commit }, params) {
      getTravelGg("", params)
        .then((res) => {
          commit("getTravelGg", res.data.data.data.list);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    /* --------------------------------------------- */
    //出境游
    async getJingList({ commit }) {
      const res = await getTravelC();
      commit("getJingList", res.data);
    },
    //出境游列表
    getTravelCc({ commit }, params) {
      getTravelCc("", params)
        .then((res) => {
          commit("getTravelCc", res.data.data.data.list);
        })
        .catch((error) => {
          console.log(error);
        });
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
    /* --------------------------------------------- */
  },
  modules: {},
});
