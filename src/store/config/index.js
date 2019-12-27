import userInfo from "./user.js";

export default {
  namespaced: true,
  state: {
    theme: "default",
    welcome: {
      type: "String",
      message: `后来我发现这世界真的很大,\n没有刻意的见面这辈子可能就再也不见了\n\n———我在人间凑数的日子`
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
