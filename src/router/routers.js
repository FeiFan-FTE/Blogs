/*
 * @Author: feifan
 * @Date: 2020-12-03 10:01:57
 * @LastEditors: feifan
 * @LastEditTime: 2020-12-03 14:11:34
 */
import Home from '../views/Home.vue'
export default[
    {
        path: '/',
        name: 'index',
        component: Home
},
{
    path: '/resume',
    name: 'resume',
    component:() => import('@/views/resume/index.vue')
},
{
    path: '/blogs',
    name: 'blogs',
    component:() => import('@/views/article/index.vue')
},
{
    path: '/question',
    name: 'question',
    component:() => import('@/views/question/index.vue')
},
{
    path: '/401',
    name: 'error_401',

    component: () => import('@/views/error-page/401.vue')
},
{
    path: '/500',
    name: 'error_500',

    component: () => import('@/views/error-page/500.vue')
},
{
    path: '*',
    name: 'error_404',
    meta: {
        hideInMenu: true
    },
    component: () => import('@/views/error-page/404.vue')
},
]