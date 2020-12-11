<template>
  <div>
    <homeLayout>
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
          <ListItemMeta :title="item.title" :description="item.description" />
          <span @click="handleClick">{{ item.content }}</span>
          <template slot="action">
            <li><Icon type="ios-star-outline" /> 123</li>
            <li><Icon type="ios-thumbs-up-outline" /> 234</li>
            <li><Icon type="ios-chatbubbles-outline" /> 345</li>
            <li><Rate allow-half v-model="valueHalf" /></li>
          </template>
          <template slot="extra">
            <img
              src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large"
              style="width: 280px"
            />
          </template>
        </ListItem>
      </List>
      <!--  -->

      <Row>
      
        <Button @click="DrawerVal = true" type="primary">Open</Button>
        <Col :span="24"> </Col>

        <Drawer title="Basic Drawer" :closable="false" v-model="DrawerVal">
          {{replace}}
          <p style="height: 900px">  <Button @click="handleView">测试</Button></p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        
        </Drawer>
      </Row>
    </homeLayout>
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      width="60"
      footer-hide
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <markdown :editorData="mdData" :width="w"></markdown>
    </Modal>
    <BackTop></BackTop>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";

import markdown from "_c/markdown/markdown";
import { getMarkDown } from "@/api/common";
import mixinsLink from '@/mixins/links';
import mixinsModul from "@/mixins/modul"
export default {
  name: "article_index",
  components: {
    homeLayout,
    markdown
  },
  mixins: [mixinsLink,mixinsModul],
  data() {
    return {
      valueHalf: 2.5,
      mdData: "",
      modal1: false,
      DrawerVal: false,
      w: 1366,
      data: [
        {
          title: "This is title 1",
          description:
            "This is description, this is description, this is description.",

          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          title: "This is title 2",
          description:
            "This is description, this is description, this is description.",

          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
        {
          title: "This is title 3",
          description:
            "This is description, this is description, this is description.",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
        },
      ],
    };
  },
  created() {
    let t = this;
    t.handleSize();
    const url = "static/md/css基础题.md";
    getMarkDown(url).then((res) => {
      t.mdData = res.data;
    });
  
  },
  methods: {
    handleSize() {
      this.w = window.innerWidth * 0.55;
    },
    handleOpen() {
      this.modal1 = true;
    },
  },
};
</script>

<style lang="less" >
p img {
  max-width: 1360px;
}
</style>