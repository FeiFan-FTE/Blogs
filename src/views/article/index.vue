<template>
  <div>
    <homeLayout>
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
          <ListItemMeta
            
            :title="item.title"
            :description="item.description"
          />
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
        <testmarkdown></testmarkdown>
      <Row>
        <Col>
        
        </Col>
      </Row>
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";
import testmarkdown from "../../../public/static/md/test.md"
export default {
  name: "article_index",
  components: {
    homeLayout,
    testmarkdown
  },
  data() {
    return {
      valueHalf:2.5,
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
};
</script>

<style lang="less" scoped>
</style>