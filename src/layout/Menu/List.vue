<template>
  <ul class="list">
    <li v-for="(item, index) in dataSet" :key="index">
      <span
        @click="onSelect(item, index)"
        class="item"
        :class="{ active: index === select }"
        >{{ item.name.replace(".md", "") }}</span
      >
      <List v-if="item.children && index === select" :dataSet="item.children" />
    </li>
  </ul>
</template>
<script>
export default {
  name: "List",
  props: {
    dataSet: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    select: -1
  }),
  methods: {
    onSelect: function(item, index) {
      this.select = index;
      this.$emit("selectItem", item, index);
    }
  }
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  color: #eee;
  .item {
    cursor: pointer;
    margin: 2px 0;
    display: block;
    padding: 4px 8px;
    &:hover {
      background-color: #555;
    }
    &.active {
      background-color: #555;
    }
    & + .list {
      margin-left: 30px;
    }
  }
}
</style>
