/*
 * @Author: feifan
 * @Date: 2020-11-26 11:18:03
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-26 11:47:05
 */

/*
函数柯里化
*/  
export const  add = function(){
    let args = Array.prototype.slice.call(arguments);
    let inner = function(){
        args.push(...arguments)
        return inner
    }
    inner.toString = function(){
        return args.reduce(function(prev,cur){
            return prev+cur;
        },0)
    }

    return inner
}

export const whichEvent  = (function(){
    if(window.addEventListener){
        return function(element,type,listener,useCapture){
            element.addEventListener(type,function(ele){
                listener.call(element,ele);
            },useCapture);
        }
    }else if(window.attachEvent){
        return  function(element,type,handler) {
            element.attachEvent("on"+type,function(ele){
                handler.call(element,ele);
            });
        }
    }
})()