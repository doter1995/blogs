<template>
  <div class="layout">
    <Loading v-if="loading" />
    <Menu />
    <Welcome class="wellcome" />
    <UserInfo v-if="isShowUserInfo" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Menu from "./Menu.vue";
import UserInfo from "./UserInfo.vue";
import Welcome from "./index/Welcome.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "App",
  components: {
    Menu,
    Welcome,
    Loading,
    UserInfo
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
    }, 2000);
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
