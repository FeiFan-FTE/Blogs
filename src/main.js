/*
 * @Author: feifan
 * @Date: 2020-11-24 13:54:41
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-30 11:09:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //全局状态管理vuex
import i18n from '@/locale'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false

/* 
  全局自定义过滤器
*/
import filters from './libs/fitters'
Object.keys(filters).forEach(key =>{
  Vue.filter(key,filters[key])
})
//全局导入view 框架

Vue.use(ViewUI);

Vue.use(ViewUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
