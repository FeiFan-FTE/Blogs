<!--
 * @Author: feifan
 * @Date: 2020-11-24 13:54:41
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-26 11:54:32
-->
<template>
  <div class="hello">
  
  </div>
</template>

<script>
import { add } from "@/libs/util";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    let a = add(1)(2)(3);
    console.log(a)
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
