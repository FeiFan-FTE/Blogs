<template>
  <div>
    <List item-layout="vertical">
      <ListItem v-for="item in data" :key="item.title">
        <ListItemMeta :title="item.title" :description="item.description" />
        <span @click="handleClick">{{ item.content }}</span>
        <template slot="action">
          <li><Icon type="ios-star-outline" /> 123</li>
          <li><Icon type="ios-thumbs-up-outline" /> 234</li>
          <li><Icon type="ios-chatbubbles-outline" /> 345</li>
          <li><Rate allow-half v-model="item.valueHalf" /></li>
        </template>
        <template slot="extra">
          <img
            src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large"
            style="width: 280px"
          />
        </template>
      </ListItem>
    </List>

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
  </div>
</template>

<script>

import markdown from "_c/markdown/markdown";
import mixinsLink from "@/mixins/links";
import mixinsModul from "@/mixins/modul";
export default {
  name: "artcleList",
  components:{
      markdown
  },
  mixins: [mixinsLink, mixinsModul],
  data() {
    return {
      data: [
        {
          title: "This is title 1",
          description:
            "This is description, this is description, this is description.",

          content:
            "This is the content, this is the content, this is the content, this is the content.",
           valueHalf: 2.5,
        },
        {
          title: "This is title 2",
          description:
            "This is description, this is description, this is description.",

          content:
            "This is the content, this is the content, this is the content, this is the content.",
             valueHalf: 2.5,
        },
        {
          title: "This is title 3",
          description:
            "This is description, this is description, this is description.",
          content:
            "This is the content, this is the content, this is the content, this is the content.",
             valueHalf: 2.5,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
</style>