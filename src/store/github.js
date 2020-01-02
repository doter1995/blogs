import { getMenuListFromGithubByUser } from "../service/github.js";

export default {
  namespaced: true,
  state: {
    types: ["md", "html"],
    selectedType: "html",
    markDown: [],
    html: []
  },
  mutations: {
    setMarkdowns(state, markDown) {
      state.markDown = markDown;
    },
    setHtml(state, html) {
      state.html = html;
    },
    setType(state, type) {
      state.selectedType = type;
    }
  },
  actions: {
    getMarkdownsFromGithub({ commit }, username) {
      getMenuListFromGithubByUser(username).then(({ markdown, html }) => {
        commit("setMarkdowns", markdown);
        commit("setHtml", html);
        console.log(html);
      });
    },
    setType({ commit }, type) {
      commit("setType", type);
    }
  }
};
