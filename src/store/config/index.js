import userInfo from "./user.js";

export default {
  namespaced: true,
  state: {
    theme: "default",
    welcome: {
      type: "String",
      message: `我把那条头绳做成了手链,
      戴到了现在,心里也一直没放下。
      在最错的时间遇到了一个差一点就对了的人,
      可能这才是最单纯也最忘不了的爱情吧,
      只是现在,两个人的愿望只能靠我一个人实现了。
      那天我走出医院,也走回了这场生活,
      才发现这个城市里好像从来没有过星星,
      只有闪耀的路灯。
      ————《我在人间凑数的日子》`
    }
  },
  mutations: {},
  actions: {},
  getters: {
    welcome: state => {
      return state.welcome;
    }
  },
  modules: {
    userInfo
  }
};
