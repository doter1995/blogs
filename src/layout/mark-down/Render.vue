<template>
  <div class="markdown" v-html="text" />
</template>
<script>
import marked from "marked";
export default {
  name: "markeDownRender",
  props: {
    data: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.text = marked(this.data);
  },
  data: () => ({
    text: ""
  }),
  watch: {
    data(value) {
      this.text = marked(value);
    }
  }
};
</script>
