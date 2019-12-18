export default {
  namespaced: true,
  state: {
    info: {
      name: "wdZhang",
      email: ["doter1995@qq.com", "doter1995@163.com"],
      wechat: "doter01",
      qq: "1182785541",
      github: "doter1995"
    },
    show: false
  },
  mutations: {
    showInfo(state, isShow) {
      state.show = isShow ? true : false;
    }
  },
  actions: {
    showUserInfo({ commit, state }, isShow) {
      if (typeof isShow === "boolean") {
        commit("showInfo", isShow);
      } else {
        commit("showInfo", !state.show);
      }
    }
  }
};
