import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import {
  getFlow,
  getIndex,
  getTravelT,
  getTravelG,
  getTravelC,
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
  },
  modules: {},
});
