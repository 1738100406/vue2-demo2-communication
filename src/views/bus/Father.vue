<template>
  <div>
    <p>父亲</p>
    <son1></son1>
    <son2></son2>
  </div>
</template>

<script>
import son1 from "./son1.vue";
import son2 from "./son2.vue";
export default {
  components: {
    son1,
    son2,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>