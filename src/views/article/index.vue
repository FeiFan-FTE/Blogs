<template>
  <div>
    <homeLayout>
      <!--  -->
      <artcleList></artcleList>
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
 
    <BackTop></BackTop>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";

import markdown from "_c/markdown/markdown";
import { getMarkDown } from "@/api/common";
import mixinsLink from '@/mixins/links';
import mixinsModul from "@/mixins/modul"

import artcleList from './components/artcleList'
export default {
  name: "article_index",
  components: {
    homeLayout,
    markdown,
    artcleList
  },
  mixins: [mixinsLink,mixinsModul],
  data() {
    return {
      DrawerVal: false,
    
    };
  },
  created() {
  
  },
  methods: {
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