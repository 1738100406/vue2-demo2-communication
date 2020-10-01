
<template>
  <div class="about">
    <p>
      子组件
      <input type="text" v-model="aaa" />
      {{aaa}}
    </p>
    {{xxxx}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: "",
    };
  },
  watch: {
    aaa() {
      this.$emit("inputvalue", this.aaa);
    },
  },
  props: ["xxxx"],
};
</script>

<style  scoped>
.about {
  border: 1px solid pink;
}
</style>
