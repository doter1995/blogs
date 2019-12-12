import Vue from "vue";
import Vuex from "vuex";
import config from "./config/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {},
  actions: {},
  modules: {
    config
  }
});
