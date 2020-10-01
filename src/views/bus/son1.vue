<template>
  <div class="bother">
    兄弟1 {{msg}}
    <button @click="sendmsg">点击传值</button>
  </div>
</template>

<script>
import bus from "./bus.js";
export default {
  data() {
    return {
      msg: "1212",
    };
  },
  methods: {
    sendmsg() {
      bus.$emit("bormsg", this.msg);
    },
  },
};
</script>

<style scoped>
.bother {
  border: 1px solid pink;
}
</style>