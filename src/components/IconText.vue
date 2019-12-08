<template>
  <span class="icon-text">{{ title.substring(0, 1) }}</span>
</template>
<script lang="ts">
export default {
  name: "IconText",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
<style>
.icon-text {
  width: 32px;
  height: 32px;
  display: inline-block;
  font-size: 20px;
  text-align: center;
  line-height: 32px;
  background-color: #fff4;
  border-radius: 100%;
}
</style>
