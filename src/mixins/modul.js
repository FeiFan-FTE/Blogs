import {debounce,throttle} from '@/libs/util'
import { getMarkDown } from "@/api/common";
export default {
    data () {
        return {
            modal1: false,
            mdData: "",
            w: 1366,
        }
    },
    computed: {
        
    },
    methods: {
        ok(){
            //this.$Message.info("Clicked ok");
        },
        cancel(){
            //this.$Message.info("Clicked cancel");    
        },
        handleWindowSize(){
            console.log('width:'+window.innerWidth+'height:'+window.innerHeight)
        },
        handleClick(){
            this.modal1 = true
        }
    },
    created () {
        const url = "static/md/css基础题.md";
        this.w = window.innerWidth * 0.55;
        getMarkDown(url).then((res) => {
          this.mdData = res.data;
        });
    },
    mounted () {
        window.addEventListener('resize',debounce(this.handleWindowSize,500))
    }
}