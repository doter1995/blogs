<template>
  <div class="user-info">
    <IconText class="user-icon" title="D" />
    <span @click="showUserInfo(false)">关闭</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import IconText from "../components/IconText.vue";

export default {
  components: {
    IconText
  },
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
}
</style>
