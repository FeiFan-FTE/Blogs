/*
 * @Author: feifan
 * @Date: 2020-11-25 09:21:14
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-25 09:21:14
 */
import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios