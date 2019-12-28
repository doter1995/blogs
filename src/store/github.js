import { getMarkdownsFromGithubByUser } from "../service/github.js";

export default {
  namespaced: true,
  state: {
    markDown: []
  },
  mutations: {
    setMarkdowns(state, markDown) {
      state.markDown = markDown;
    }
  },
  getters: {
    markdowns: state => {
      return state.markDown;
    }
  },
  actions: {
    getMarkdownsFromGithub({ commit }, username) {
      getMarkdownsFromGithubByUser(username).then(res => {
        commit("setMarkdowns", res);
      });
    }
  }
};
