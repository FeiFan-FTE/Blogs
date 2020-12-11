import {debounce,throttle} from '@/libs/util'
export default {
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
    mounted () {
        window.addEventListener('resize',debounce(this.handleWindowSize,500))
    }
}