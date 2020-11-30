/*
 * @Author: feifan
 * @Date: 2020-11-30 11:07:26
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-30 11:07:26
 */
import {

    localSave,
    localRead
  } from '@/libs/util'
  
  import config from '@/config'
  
  
  export default {
    state: {
      local: localRead('local')?localRead('local'):'zh-CN',
    },
    getters: {
  
    },
    mutations: {
      setLocal(state, lang) {
        localSave('local', lang)
        state.local = lang
      },
  
    },
    actions: {
  
    }
  }