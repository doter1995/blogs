<template>
  <render :data="templateData" />
</template>
<script>
import Render from "./Render.vue";

export default {
  name: "MarkDown",
  components: {
    Render
  },
  data: () => ({
    templateData: "# TEST"
  })
};
</script>
