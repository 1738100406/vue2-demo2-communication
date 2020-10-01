<template>
  <div>
    <!--父传子
            父组件:Header :msg= ' msg '></Header>

            子组件:props: [' msg ' ]
    props:{msg:数据类型}-->
    <p>父组件{{sonVal}}</p>
    <About @inputvalue="getSonval" :xxxx="msg"></About>
  </div>
</template>

<script>
import About from "./About.vue";
export default {
  data() {
    return {
      msg: "这是父元素的值",
      sonVal: "",
    };
  },
  methods: {
    getSonval(msg) {
      this.sonVal = msg;
    },
  },

  components: {
    About,
  },
};
</script>
