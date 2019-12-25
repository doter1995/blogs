export default {
  namespaced: true,
  state: {
    type: "welcome",
    value: ""
  },
  mutations: {
    changeType(state, type) {
      state.type = type ? type : "welcome";
    },
    changeValue(state, value) {
      state.value = value;
    }
  },
  actions: {
    changeRouter({ commit }, { type, value }) {
      commit("changeType", type);
      commit("changeValue", value);
    }
  },
  getters: {
    type: state => {
      return state.type;
    }
  }
};
