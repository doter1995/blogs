<template>
  <render :data="templateData" />
</template>
<script>
import { mapState } from "vuex";

import Render from "./Render.vue";
export default {
  name: "MarkDown",
  components: {
    Render
  },
  computed: {
    ...mapState("router", {
      url: state => decodeURIComponent(escape(window.atob(state.value)))
    })
  },
  data: () => ({
    templateData: "# TEST"
  })
};
</script>
