<template>
  <div>
    <homeLayout>
         <Split v-model="split">
            <div slot="left" >
            
            </div>
            <div slot="right" >
                    <markdown
                    width="600"
                    :editorData="content"
                    defaultOpen="edit"
                    toolbarsFlag="true"
                ></markdown>
            </div>
        </Split>
    </homeLayout>
  </div>
</template>

<script>
import homeLayout from "_c/common/homeLayout";
import markdown from "_c/markdown/markdown";
export default {
  name: "question",
  components: {
    homeLayout,
    markdown,
  },
  data() {
    return {
      content: "",
      split:0.3
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
</style>