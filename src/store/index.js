import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { getTravel } from "../utils/api";
export default new Vuex.Store({
  state: {
    tongList: [],
  },
  mutations: {
    getTongList(state, payload) {
      state.tongList = payload.data;
      console.log(state.tongList);
    },
  },
  actions: {
    async getTongList({ commit }) {
      const res = await getTravel();
      commit("getTongList", res.data);
    },
  },
  modules: {},
});
