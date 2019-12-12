import Vue from "vue";
import App from "./layout/App.vue";
import store from "./store";
import * as githubService from "./service/github";
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

githubService.getAllRepositoryByUserName("doter1995").then(reposName => {
  const repositories = reposName.filter(name =>
    name.toLocaleLowerCase().includes("mark-down")
  );
  repositories.forEach(repository => {
    githubService.getRepository("doter1995", repository);
  });
});
