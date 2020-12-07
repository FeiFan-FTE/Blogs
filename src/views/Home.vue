<!--
 * @Author: feifan
 * @Date: 2020-11-24 13:54:41
 * @LastEditors: feifan
 * @LastEditTime: 2020-12-03 16:52:34
-->
<template>
  <div class="home">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                Item 4
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <div><audioPlayer></audioPlayer> </div>
        <Content :style="{ padding: '0 50px' }">
          <Scroller :content="content"></Scroller>
          <Breadcrumb :style="{ margin: '20px 0' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="min-height: 500px">
              <div ref="novnc"></div>
                
   
              <Login></Login>
            </div>
          </Card>
        </Content>
        <Copyright></Copyright>
      </Layout>
    </div>
  </div>
</template>

<script>
import Copyright from "_c/copyright/copyright";
import Login from "_c/login/login";
import Scroller from "_c/common/scroller";

import audioPlayer from "_c/common/audioPlayer"
import RFB from "@novnc/novnc/core/rfb";
export default {
  name: "Home",
  components: {
    Copyright,
    Login,
    Scroller,
    audioPlayer
  },
  data() {
    return {
      content:
        "文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。",
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
