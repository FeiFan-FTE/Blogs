<template>
  <div>
    <homeLayout>
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
          <ListItemMeta :title="item.title" :description="item.description" />
          {{ item.content }}
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
        <!-- <Col>
         <Card>
           <testmarkdown></testmarkdown>
        </Card>
        </Col> -->
        <!-- <Col :span="24">
          <markdown :editorData="mdData" :width="w"></markdown>
        </Col> -->
      </Row>
    </homeLayout>
     <BackTop></BackTop>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";
// import testmarkdown from "../../../public/static/md/test.md"

import axios from "axios";
import markdown from "_c/markdown/markdown";
import { getMarkDown } from "@/api/common";
export default {
  name: "article_index",
  components: {
    homeLayout,
    // testmarkdown,
    markdown,
  },
  data() {
    return {
      valueHalf: 2.5,
      mdData: "",
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
    const url = "static/md/test.md";
    getMarkDown(url).then((res) => {
      console.log(res);
      t.mdData = res.data;
    });
  },
  methods: {},
};
</script>

<style lang="less" >
p img {
  max-width: 1360px;
}
</style>