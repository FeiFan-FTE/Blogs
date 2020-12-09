<template>
  <div>
    <div id="pieContainer"></div>
  </div>
</template>

<script>
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
import {debounce} from "@/libs/util"
export default {
  name: "pie",
  props: {
    height: {
      type: Number,
      default: 660,
    },
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    data: function (n, o) {
      let t = this;
      if (n != o) {
        t.drawChart();
      }
    },
  },
  mounted() {
    let t = this;
    setTimeout(() => {
      t.drawChart();
    }, 2000);
  },

  methods: {
    drawChart() {
      let t = this;
      const ds = new DataSet();
      const dv = ds.createView();
      dv.source(t.data).transform({
        type: "percent",
        field: "value",
        dimension: "type",
        as: "percent",
      });

      this.chart = new G2.Chart({
        container: "pieContainer",
        forceFit: true,
        height: t.height,
        padding: "auto",
      });

      this.chart.source(dv);
      this.chart.legend(false);
      this.chart.coord("theta", {
        radius: 0.5,
        innerRadius: 0.6,
      });
      this.chart
        .intervalStack()
        .position("percent")
        .color("type", [
          "rgb(147, 77, 233)",
          "rgb(43, 183, 237)",
          "rgb(150, 203, 38)",
          "rgb(255, 189, 71)",
          "#873bf4",
          "#820014",
          "#871400",
          "#00474f",
          "#722ed1",
          "#c41d7f",
          "#1d39c4",
        ])
        .style({
          stroke: "white",
          lineWidth: 1,
        })
        .tooltip("type", (val) => {
          return { category: "类型:" + val };
        })
        .opacity(1);
      // 第二层外圈
      const outterView = this.chart.view();
      const ds2 = new DataSet();
      const dv2 = ds2.createView();
      dv2.source(t.data).transform({
        type: "percent",
        field: "value",
        dimension: "name",
        as: "percent",
      });
      outterView.source(dv2);
      outterView.coord("theta", {
        innerRadius: 0.5 / 0.8,
        radius: 0.8,
      });
      outterView
        .intervalStack()
        .position("percent")
        .color("name", [
          "#1890ff",
          "#13c2c2",
          "#ffc53d",
          "#73d13d",
          "#873bf4",
          "#820014",
          "#871400",
          "#00474f",
          "#722ed1",
          "#c41d7f",
          "#1d39c4",
        ])
        .style({
          stroke: "white",
          lineWidth: 1,
        })
        .tooltip("name", (val) => {
          return { category: "题目:" + val };
        })
        .opacity(1);
      // 最外层圈-3
      const outterView1 = this.chart.view();
      const ds3 = new DataSet();
      const dv3 = ds3.createView();
      dv3.source(t.data).transform({
        type: "percent",
        field: "value",
        dimension: "blood",
        as: "percent",
      });
      outterView1.source(dv3);
      outterView1.coord("theta", {
        innerRadius: 0.8 / 0.9,
        radius: 0.9,
      });
      outterView1
        .intervalStack()
        .position("percent")
        .color("blood", ["#1890ff", "#13c2c2", "#ffc53d"])
        .style({
          stroke: "white",
          lineWidth: 1,
        })
        .tooltip("blood", (val) => {
          return { category: val };
        })
        .opacity(1);

      this.chart.tooltip({
        showTitle: false,
        itemTpl: "<li>{category}</li>",
      });

      this.chart.render();
    },
  },
};
</script>

<style lang="less" scoped>
</style>