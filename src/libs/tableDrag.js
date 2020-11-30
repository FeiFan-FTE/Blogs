/*
 * @Author: feifan
 * @Date: 2020-11-30 10:57:57
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-30 10:58:10
 */
import Vue from 'vue';

//表格拖拽
Vue.directive('tableDrag', {
    inserted: function() {
        let el = document.getElementsByClassName('ivu-table-body')[0];
        el.style.cursor = 'grab';
        el.onmousedown = function() {
            let gapX = event.clientX;
            let startX = el.scrollLeft;
            document.onmousemove = function(e) {
                let x = e.clientX - gapX;
                el.scrollLeft = startX - x;
                return false;
            };
            document.onmouseup = function(e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    }
});