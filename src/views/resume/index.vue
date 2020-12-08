<template>
  <div>
    <homeLayout> 
      <wordCloud></wordCloud>
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";
import wordCloud from "_c/antv/wordCloud"
export default {
  name: "resume",
  components: {
    homeLayout,
    wordCloud
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>