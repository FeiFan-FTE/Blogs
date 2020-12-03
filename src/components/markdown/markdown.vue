<!--
 * @Author: feifan
 * @Date: 2019-10-31 14:18:55
 * @LastEditors: feifan
 * @LastEditTime: 2020-09-10 15:13:49
-->
<template>
  <div>
    <div id="editor">
      <mavon-editor
        ref="editor"
        previewBackground="#fff"
        :defaultOpen="defaultOpen"
        :style="'width:'+width+'px;min-height:'+height+'px;max-height:'+maxHeight+'px'"
        :externalLink="externalLink"
        :boxShadow="false"
        :shortCut="shortCut"
        :toolbarsFlag="toolbarsFlag"
        :editable="editable"
        :scrollStyle="true"
        :subfield="subfield"
        :placeholder="placeholder"
        :value="escapeHtml(editorData)"
        @change="changeHtml"
        @save="save"
      ></mavon-editor>
    </div>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  name: "editor",
  components: {
    mavonEditor,
  },
  props: {
    defaultOpen: {
      type: String,
      default: "preview",
    },
    toolbarsFlag: {
      type: Boolean,
      default: false,
    },
    editable: {
      //是否允许编辑
      type: Boolean,
      default: true,
    },
    subfield: {
      //true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)
      type: Boolean,
      default: false,
    },
    shortCut: {
      //是否启用快捷键
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 700,
    },
    maxHeight: {
      type: Number,
      default: null,
    },
    editorData: {
      type: String,
      default: "",
    },
    placeholder: {
      //输入框为空时默认提示文本
      type: String,
      default: "",
    },
  },
  watch: {
    editable: function (n, o) {
      console.log(n, o);
    },
  },
  data() {
    return {
      externalLink: {
        markdown_css: function () {
          // 这是你的markdown css文件路径
          return "./static/markdown/github-markdown.min.css";
        },
        hljs_css: function (css) {
          // 这是你的代码高亮配色文件路径
          return "./static/markdown/github.min.css";
        },
        katex_css: function () {
          // 这是你的katex配色方案路径路径
          return "./static/markdown/katex.min.css";
        },
        hljs_js: function () {
          // 这是你的hljs文件路径
          return "./static/markdown/highlight.min.js";
        },
        katex_js: function () {
          // 这是你的katex.js路径
          return "./static/markdown/katex.min.js";
        },
      },
    };
  },
  methods: {
    escapeHtml(html) {
      return html.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    },
    changeHtml(value) {
      this.$emit("on-success-save", value, this.index);
    },
    save(value) {
      this.$Notice.success({
        title: this.$t("save")+this.$t("success"),
      });
      this.$emit("on-success-save", value);
    },
  },
};
</script>
<style>
.ivu-select-dropdown {
  z-index: 99999 !important;
}
.v-note-wrapper {
  z-index: 999 !important;
}
</style>