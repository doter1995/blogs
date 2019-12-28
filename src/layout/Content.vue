<template>
  <div>
    <Welcome v-if="isShow('welcome')" />
    <MarkDown v-if="isShow('markdown')" />
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
    ...mapState("router", {
      type: state => state.type
    })
  },
  methods: {
    isShow: function(type) {
      return type === this.type;
    }
  }
};
</script>
<style lang="scss" scoped></style>
