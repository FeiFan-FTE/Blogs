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
      <div><audioPlayer></audioPlayer> </div>
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout"
import Login from "_c/login/login";
import Scroller from "_c/common/scroller";

import audioPlayer from "_c/common/audioPlayer"
import RFB from "@novnc/novnc/core/rfb";
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
      websockify: "ws:/172.16.2.11:32787/websockify",
      rfb: null,
      passwd: "",
    };
  },
  created() {},
  methods: {
    connect() {
      this.rfb.sendCredentials({ password: this.passwd });
    },
    disconnect() {
      this.rfb.disconnect();
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.rfb = new RFB(this.$refs.novnc, this.websockify);
    // });
  },
};
</script>
