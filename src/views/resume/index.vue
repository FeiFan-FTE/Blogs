<template>
  <div>
    <homeLayout> 
      <wordCloud></wordCloud>
      <webTree :width='width' :height='height'></webTree>
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";
import wordCloud from "_c/antv/wordCloud"
import webTree from "_c/antv/webTree"

import {debounce} from "@/libs/util"
export default {
  name: "resume",
  components: {
    homeLayout,
    wordCloud,
    webTree
  },
  data() {
    return {
      width:null,
      height:null
    };
  },
  created () {
    let t = this
      t.width = window.innerWidth -150
        t.height =  window.innerHeight-80
  },
  mounted () {
    let t = this
      window.addEventListener('resize',debounce(t.handleSize,1000))
  },
  methods: {
     handleSize(){
        let t = this
        t.width = window.innerWidth -150
        t.height =  window.innerHeight-80
        console.log('width'+t.width+'height'+t.height)
    }
  }
};
</script>

<style lang="less" scoped>
</style>