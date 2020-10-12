import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { getFlow, getIndex, getTravel } from '../utils/api';

export default new Vuex.Store({
  state: {
    indexData: {},
    flowData: [],
    tongList: []
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

    //travel数据
    getTongList(state, payload) {
      state.tongList = payload.data;
      console.log(state.tongList);
    }
  },
  actions: {
    //index数据
    getIndex({ commit }) {
      getIndex()
      .then(res => {
        commit('getIndex',res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
    },

    //flow数据
    getFlow({ commit }, params) {
      getFlow('', params)
      .then(res => {
        commit('getFlow',res.data.data.list);
      })
      .catch(error => {
        console.log(error);
      });
    },

    //travel数据
    async getTongList({ commit }) {
      const res = await getTravel();
      commit("getTongList", res.data);
    }
  },
  modules: {},
});
