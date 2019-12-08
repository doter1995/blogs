<template>
  <div class="layout">
    <Menu />
    <Welcome class="wellcome" />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Welcome from "./index/Welcome.vue";

export default {
  name: "App",
  components: {
    Menu,
    Welcome
  }
};
</script>

<style lang="scss">
@import url("../assets/clearStyle.css");
@import url("../assets/iconfont/index.css");
.layout {
  height: 100vh;
  width: 100vw;
  font-size: 14px;
  color: #fff;
  background-color: #313131;
  .wellcome {
    padding: 0 60px;
  }
}
</style>
