export default {
  namespaced: true,
  state: {
    info: {
      name: "wdZhang",
      email: "doter1995@qq.com",
      wechat: "doter01",
      jianshu: "5721922d1d60",
      qq: "1182785541",
      github: "doter1995",
      company: "ThoughtWorks",
      skills: "web前端,JS,TS,React,Vue,D3.js,Three.js,JAVA,Docker,Python",
      city: "西安"
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
