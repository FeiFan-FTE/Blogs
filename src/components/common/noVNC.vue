<template>
  <div ref="novnc"></div>
</template>

<script>
import RFB from "@novnc/novnc/core/rfb";
export default {
  name: "noVNC",
  props: {
    websockify: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
        rfb:null
    };
  },
  methods: {
    connect() {
      this.rfb.sendCredentials({ password: this.passwd });
    },
    disconnect() {
      this.rfb.disconnect();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.rfb = new RFB(this.$refs.novnc, this.websockify);
    });
  },
};
</script>

<style lang="less" scoped>
</style>