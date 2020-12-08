<template>
  <div>
    <div id="container-tree" ref="containerTree"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import webTreeData from "../../../public/static/json/tree.json";
export default {
  name: "webTree",
  props: {
    height: {
      type: Number,
      default: 800,
    },
    width:{
        type: Number,
      default: 1366,
    }
  },
  data() {
    return {
      graph: null,
    };
  },
  created() {},
  mounted() {
    let t = this;
    t.graph = new G6.TreeGraph({
      container: t.$refs.containerTree,
      width:t.width,
      height:t.height,
      linkCenter: true,
      modes: {
        default: [
          {
            type: "collapse-expand",
            onChange: function onChange(item, collapsed) {
              const data = item.get("model").webTreeData;
              data.collapsed = collapsed;
              return true;
            },
          },
          "drag-canvas",
          "zoom-canvas",
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: "cubic-vertical",
      },
      layout: {
        type: "dendrogram",
        direction: "TB", // H / V / LR / RL / TB / BT
        nodeSep: 40,
        rankSep: 100,
      },
    });

    t.graph.node(function (node) {
      let position = "right";
      let rotate = 0;
      if (!node.children) {
        position = "bottom";
        rotate = Math.PI / 2;
      }
      return {
        label: node.id,
        labelCfg: {
          position,
          offset: 5,
          style: {
            rotate,
            textAlign: "start",
          },
        },
      };
    });

    t.graph.data(webTreeData);
    t.graph.render();
    t.graph.fitView();
  },
};
</script>

<style lang="less" scoped>
</style>