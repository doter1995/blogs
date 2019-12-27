<template>
  <div class="loading">
    <div class="loading-container" />
    <span class="loading-text">加载中{{ dash }}</span>
  </div>
</template>
<script lang="ts">
export default {
  name: "Loading",
  data: () => ({
    dash: ".",
    interval: null
  }),
  mounted() {
    setInterval(() => {
      this.dash = this.dash.length > 3 ? "" : this.dash + ".";
    }, 700);
  }
};
</script>
<style lang="scss">
.loading {
  z-index: 1;
  background-color: #333;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading-container {
    border: 4px #333 solid;
    border-top: 4px #b8f11a solid;
    border-radius: 50%;
    animation: rotate 2s infinite reverse linear;
    width: 200px;
    height: 200px;
  }
  .loading-text {
    position: absolute;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    width: 200px;
    height: 200px;
    background-color: #00bcd4;
    border-radius: 50%;
    animation: myfirst 2s infinite reverse linear;
  }
  @keyframes myfirst {
    0% {
      background-color: rgb(65, 95, 175);
    }
    25% {
      background-color: rgb(180, 75, 190);
    }
    50% {
      background-color: rgb(200, 70, 190);
    }
    75% {
      background-color: rgb(80, 90, 180);
    }
    100% {
      background-color: rgb(65, 95, 175);
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    25% {
      transform: rotate(240deg);
    }
    0% {
      transform: rotate(360deg);
    }
  }
}
</style>
