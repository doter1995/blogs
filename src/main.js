import Vue from "vue";
import App from "./layout/App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

store.dispatch("github/getMarkdownsFromGithub", "doter1995");
window.addEventListener("resize", () => {
  setDocHeight();
});
window.addEventListener("orientationchange", function() {
  setDocHeight();
});
function setDocHeight() {
  const innerHeight = window.innerHeight;
  document.documentElement.style.setProperty("--vh", `${innerHeight / 100}px`);
}

setDocHeight();
