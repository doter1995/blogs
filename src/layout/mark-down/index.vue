<template>
  <render :data="templateData" :url="url" />
</template>
<script>
import { mapState } from "vuex";
import { getBlob } from "../../service/github.js";
import Render from "./Render.vue";
export default {
  name: "MarkDown",
  components: {
    Render
  },
  computed: {
    ...mapState("router", {
      url: state => state.value
    })
  },
  data: () => ({
    templateData: "# TEST"
  }),
  watch: {
    url() {
      this.getTemplateData();
    }
  },
  methods: {
    getTemplateData() {
      const url = this.url;
      getBlob(url).then(res => {
        this.templateData = decodeURIComponent(
          escape(window.atob(res.content))
        );
      });
    }
  }
};
</script>
