<template>
  <div class="layout">
    <Loading v-if="loading" />
    <Menu />
    <Content class="content" />
    <UserInfo v-if="isShowUserInfo" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Menu from "./Menu/index.vue";
import UserInfo from "./UserInfo.vue";
import Content from "./Content.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "App",
  components: {
    Menu,
    Loading,
    UserInfo,
    Content
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState("config/userInfo", {
      isShowUserInfo: state => state.show
    })
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 10);
  }
};
</script>

<style lang="scss" scoped>
@import "../components/style/variable.scss";

@import url("../assets/clearStyle.css");
@import url("../assets/iconfont/index.css");

.layout {
  height: 100vh;
  height: vh(100);
  width: 100vw;
  font-size: 14px;
  color: #fff;
  background-color: #313131;
  .content {
    padding-left: 60px;
    overflow-y: auto;
    height: 100vh;
    height: vh(100);
    background-color: initial;
    display: flex;
  }
}
</style>
