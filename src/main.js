/*
 * @Author: feifan
 * @Date: 2020-11-24 13:54:41
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-30 11:09:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/locale'
Vue.config.productionTip = false

//全局导入view 框架
Vue.use(ViewUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(ViewUI);

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
