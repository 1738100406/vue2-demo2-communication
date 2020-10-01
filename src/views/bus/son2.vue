<template>
  <div class="bother">
    <p>兄弟2 {{str}}</p>
  </div>
</template>

<script>
import bus from "./bus.js";
export default {
  data() {
    return {
      str: "",
    };
  },
  methods: {},
  mounted() {
    bus.$on("bormsg", (msg) => {
      this.str = msg;
    });
  },
};
</script>

<style scoped>
.bother {
  border: 1px solid pink;
}
</style>