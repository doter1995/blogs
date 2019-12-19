<template>
  <div class="menu">
    <div class="user">
      <IconText class="user-icon" title="D" />
      <span class="user-name">wdZhang</span>
      <span class="user-link" @click="showUserInfo">
        <i class="iconfont iconusercenter1" />
      </span>
    </div>
    <ul class="group-list">
      <li
        v-for="(group, group_index) in Object.keys(list)"
        :key="group_index"
        :class="['item', { active: active === group }]"
      >
        <span @click="selectGroup(group)">{{ group }}</span>
      </li>
    </ul>
    <div class="tool-bar">
      <span class="setting">
        <i class="iconfont iconset" />
      </span>
      <span class="user-name">wdZhang</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import IconText from "../components/IconText.vue";

export default {
  components: {
    IconText
  },
  data: () => ({
    active: ""
  }),
  computed: {
    ...mapGetters("github", ["markdowns"]),
    list() {
      // return this.markdowns.length > 0 ? this.markdowns[0] : {};
      return { a: { b: 1 }, b: "2" };
    }
  },
  methods: {
    ...mapActions("config/userInfo", ["showUserInfo"]),
    showMarkdwon(key) {
      return this.active === key && Object.keys(this.list[key]).length > 0;
    },
    selectGroup(key) {
      console.log("selectGroup", key);
      this.active = key;
    }
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  .group-list {
    min-width: 250px;
    flex: 1;
    & > .item {
      line-height: 30px;
      height: 30px;
      padding: 0 10px;
      &:hover {
        background-color: #777;
        cursor: pointer;
      }
      &.active {
        background-color: #666;
      }
    }
  }
  .tool-bar {
    width: 250px;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .setting {
      margin: 14px;
      cursor: pointer;
      i.iconset {
        width: 32px;
        height: 32px;
        font-size: 32px;
      }
    }
    .user-name {
      flex: 1;
      cursor: pointer;
    }
  }
}
</style>
