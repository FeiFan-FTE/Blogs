<!--
 * @Author: feifan
 * @Date: 2020-11-24 13:54:41
 * @LastEditors: feifan
 * @LastEditTime: 2020-12-03 16:52:34
-->
<template>
  <div class="home">
    <homeLayout>
      <!-- 横向滚动通知 -->
       <Scroller :content="content"></Scroller>
      <!-- <Login></Login> -->
      <!-- <div><audioPlayer></audioPlayer> </div> -->
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout"
import Login from "_c/login/login";
import Scroller from "_c/common/scroller";

import audioPlayer from "_c/common/audioPlayer"
export default {
  name: "Home",
  components: {
    homeLayout,
    Login,
    Scroller,
    audioPlayer
  },
  data() {
    return {
      content:
        "更多功能正在全力开发中,敬请期待。。。",
    };
  },
  created() {},
  methods: {
  
  },
  mounted() {
 
  },
};
</script>
