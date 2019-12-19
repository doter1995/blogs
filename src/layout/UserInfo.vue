<template>
  <div class="user-info">
    <div class="top-bar">
      <span class="iconfont iconclose" @click="showUserInfo(false)"></span>
    </div>
    <div class="content">test</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("config/userInfo", ["showUserInfo"])
  }
};
</script>

<style scoped lang="scss">
.user-info {
  position: absolute;
  overflow: hidden;
  right: 0;
  top: 0;
  height: 100%;
  width: 60px;
  width: 300px;
  background-color: #000000f9;
  transition-duration: 0.2s;
  transition-property: width;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .top-bar {
    margin: 8px;
    display: flex;
    justify-content: flex-end;
    .iconclose {
      cursor: pointer;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
