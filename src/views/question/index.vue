<template>
  <div>
    <homeLayout>
      <!-- <Split v-model="split">
            <div slot="left" >
            
            </div>
            <div slot="right" >
               
            </div>
        </Split> -->
      <markdown
        :width="editer.w"
        :height="editer.h"
        :editorData="content"
        defaultOpen="edit"
        :toolbarsFlag="toolbarsFlag"
      ></markdown>
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
      split: 0.3,
      toolbarsFlag: true,
      editer:{
        w:600,
        h:600
      }
    };
  },
  created() {
    this.handleSize()
  },
  mounted(){
    window.addEventListener('resize',this.handleSize)
  },
  methods: {
    handleSize(){
        let t = this
        t.editer.w = window.innerWidth-200;
        t.editer.h = window.innerHeight-200;
    }
  },
};
</script>

<style lang="less" scoped>
</style>