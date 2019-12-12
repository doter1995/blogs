<template>
  <div class="loading">
    <span class="text">加载中{{ dash }}</span>
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
    this.interval = setInterval(() => {
      if (this.dash.length > 3) {
        this.dash = "";
      } else {
        this.dash += ".";
      }
    }, 400);
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
  .text {
    font-size: 1.3rem;
  }
}
</style>
