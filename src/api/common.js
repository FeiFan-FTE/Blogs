/*
 * @Author: feifan
 * @Date: 2020-11-30 10:52:45
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-30 10:52:47
 */
import axios from '@/libs/api.request'
import {
    setToken,
    getToken
} from '@/libs/util'

export const getMarkDown = (url) => {
    return axios.request({
        url: url,
        method: 'get',
    })
}