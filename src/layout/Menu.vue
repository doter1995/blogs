<template>
  <div class="menu">
    <div class="user">
      <IconText class="user-icon" title="D" />
      <span class="user-name">wdZhang</span>
      <span class="user-link">
        <i class="iconfont iconusercenter1" />
      </span>
    </div>
  </div>
</template>

<script>
import IconText from "../components/IconText.vue";

export default {
  components: {
    IconText
  }
};
</script>

<style scoped lang="scss">
.menu {
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  height: 100%;
  width: 60px;
  // width: 250px;
  // background-color: #313131;
  background-color: #131313;
  transition-duration: 0.2s;
  transition-property: width;
  &:hover {
    width: 250px;
  }
  .user {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 250px;
    cursor: pointer;
    .user-icon {
      margin: 14px;
    }
    .user-name {
      flex: 1;
    }
    .user-link {
      margin: 14px;
      .iconusercenter1 {
        border-radius: 6px;
        background: #fff3;
        color: #fffa;
        &:hover {
          color: #fff;
          background-color: #fffa;
        }
      }
    }
  }
}
</style>
