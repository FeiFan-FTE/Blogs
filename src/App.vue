<!--
 * @Author: feifan
 * @Date: 2020-11-24 13:54:41
 * @LastEditors: feifan
 * @LastEditTime: 2020-12-03 16:12:33
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { debounce } from "@/libs/util";
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    window.addEventListener("resize", debounce(this.getSize, 1000));
  },
  methods: {
    getSize() {
      console.log("size" + window.innerHeight);
    },
  },
};
</script>
<style lang="stylus"></style>
