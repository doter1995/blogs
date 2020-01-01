<template>
  <div class="user-info">
    <div class="top-bar">
      <span class="iconfont iconclose" @click="showUserInfo(false)"></span>
    </div>
    <div class="content">
      <img class="user-icon" src="../assets/headIcon.jpg" alt="icon" />
      <div class="name">{{ info.name }}</div>
      <div class="icons">
        <a class="iconfont iconemail-fill" :href="'mailto:' + info.email" />
        <a
          class="iconfont iconwechat"
          href="weixin://contacts/profile/XK17703404293"
        />
        <i class="iconfont iconjianshu" />
      </div>
      <div class="discription">
        <div class="company">
          <span>公司：</span>
          <span>{{ info.company }}</span>
        </div>
        <div class="company">
          <span>城市：</span>
          <span>{{ info.city }}</span>
        </div>
        <div class="skills">
          <span>技能：</span>
          <div class="skill">
            <span v-for="skill in info.skills.split(',')" :key="skill">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("config/userInfo", ["info"])
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
    display: flex;
    align-items: center;
    flex-direction: column;
    * {
      cursor: pointer;
    }
    .user-icon {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: #fff;
      border: 2px #7aa solid;
    }
    .name {
      margin: 15px 0;
      font-size: 1.2rem;
    }
    .icons {
      display: flex;
      justify-content: center;
      padding-bottom: 10px;
      width: 80%;
      border-bottom: 2px #366 solid;
      .iconfont {
        cursor: pointer;
        font-size: 36px;
        background-color: #fff;
        border-radius: 8px;
        margin: 0 15px;
        &.iconjianshu {
          color: rgb(232, 104, 83);
        }
        &.iconwechat {
          color: rgb(35, 221, 40);
        }
        &.iconemail-fill {
          color: #cdcdcd;
        }
      }
    }
    .discription {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      & > div {
        margin: 5px 0;
      }
      .skills {
        display: flex;

        .skill {
          width: 180px;
          span {
            height: 24px;
            line-height: 20px;
            margin: 0 2px;
            background-color: #336;
          }
        }
      }
    }
  }
}
</style>
