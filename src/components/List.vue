<template>
  <ul class="list">
    <li v-for="(item, index) in dataSet" :key="index">
      <span @click="select(item)">{{ item.name }}</span>
      <List
        v-if="item.children"
        :dataSet="item.children"
        :select="select"
      ></List>
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
    select: ""
  })
};
</script>

<style scoped lang="scss">
.list {
  color: #eee;
}
</style>
