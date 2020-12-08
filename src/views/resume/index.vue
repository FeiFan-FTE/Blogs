<template>
  <div>
    <homeLayout> 
      <wordCloud></wordCloud>
      <webTree></webTree>
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";
import wordCloud from "_c/antv/wordCloud"
import webTree from "_c/antv/webTree"
export default {
  name: "resume",
  components: {
    homeLayout,
    wordCloud,
    webTree
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>