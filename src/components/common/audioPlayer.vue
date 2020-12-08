<template>
  <div class="audioPlayer">
    <Aplayer
      autoplay
      :music="music"
      :mini="isMini"
      :autoplay="autoplay"
      :repeat='repeat'
      :volume='volume'
    />
  </div>
</template>

<script>
import Aplayer from "vue-aplayer";
export default {
  name: "audioPlayer",
  components: {
    Aplayer,
  },
  props: {
    isMini: {
      type: Boolean,
      default: false,
    },
    repeat:{
        type:String,
        default:'repeat-one'
    },
    volume:{
        tpye:Number,
        default:0.1
    },
    autoplay:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      music: {
        title: "secret base~君がくれたもの~",
        artist: "Silent Siren",
        src: null,
        pic: "",
      },
      list: [
        {
          title: "病变remix.mp3",
          artist: "Silent Siren",
          src: '"http://121.196.26.168/audio/病变remix.mp3',
          pic: "",
        },
        {
          title: "Here With You（Bootleg）(YT_Official remix)",
          artist: "Silent Siren",
          src: '"http://121.196.26.168/audio/Here With You（remix）.mp3',
          pic: "",
        },
        {
          title: "金玟岐 - 岁月神偷.mp3",
          artist: "Silent Siren",
          src: '"http://121.196.26.168/audio/金玟岐 - 岁月神偷.mp3',
          pic: "",
        },
      ],
    };
  },
  created() {
    const ADURL = "http://121.196.26.168/audio/";
    this.music.src = ADURL + "病变remix.mp3";
    this.music.title = "病变remix";
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>