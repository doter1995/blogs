<template>
  <div class="content">
    <Welcome v-if="isShow('welcome')" />
    <MarkDown v-if="isShow('md')" />
    <iframe class="iframe" v-if="isShow('html')" :src="value" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import Welcome from "./index/Welcome.vue";
import MarkDown from "./mark-down/index.vue";

export default {
  name: "Content",
  components: {
    Welcome,
    MarkDown
  },
  computed: {
    ...mapState("router", ["type", "value"])
  },
  methods: {
    isShow: function(type) {
      return type === this.type;
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  .iframe {
    flex: 1;
    border: none;
  }
}
</style>
