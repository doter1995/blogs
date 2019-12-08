<template>
  <div class="well-come">
    <div box="text-box" v-html="message.replace(/\n/g, '<br />')"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    message: "",
    interver: null,
    idx: 0
  }),
  mounted() {
    this.update();
  },
  computed: {
    ...mapGetters("config", ["welcome"])
  },
  methods: {
    update() {
      if (this.idx < this.welcome.message.length) {
        const char = this.welcome.message.charAt(this.idx++);
        this.message += char;
        setTimeout(() => {
          this.update();
        }, 400);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.well-come {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
}
</style>
