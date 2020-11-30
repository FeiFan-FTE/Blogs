/*
 * @Author: feifan
 * @Date: 2020-11-30 10:58:32
 * @LastEditors: feifan
 * @LastEditTime: 2020-11-30 10:58:57
 */

 //获取浏览器信息
class BrowserInfo {
    constructor() {
      
    }
    getBrowserInfo() {
        var agent = navigator.userAgent.toLowerCase();
        var sUserAgent = navigator.userAgent;
        var regStr_ie = /msie [\d.]+;/gi;
        var regStr_ff = /firefox\/[\d.]+/gi
        var regStr_chrome = /chrome\/[\d.]+/gi;
        var regStr_saf = /safari\/[\d.]+/gi;
        //IE
        if (agent.indexOf("msie") > 0) {
            return{
                type:"msie",
                version:agent.match(regStr_ie)[0]
            }
        }
        //firefox
        if (agent.indexOf("firefox") > 0) {
            return{
                type:"firefox",
                version:agent.match(regStr_ff)[0]
            }
        }
        //Chrome
        if (agent.indexOf("chrome") > 0) {
            return {
                type:"chrome",
                version:agent.match(regStr_chrome)[0]
            }
        }
        //Safari
        if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
            return{
                type:"safari",
                version:agent.match(regStr_saf)[0]
            }
        }
    }
    detectOS() {
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) return "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) return "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
        if (isLinux) {
            if (bIsAndroid) return "Android";
            else return "Linux";
        }
        if (isWin) {
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) return "操作系统：Win2000";
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1
            sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) return "操作系统：WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) return "操作系统：Win2003";
            var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) return "操作系统：WinVista";
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) return "操作系统：Win7";
            var isWin8 = sUserAgent.indexOf("windows nt6.2") > -1 || sUserAgent.indexOf("Windows 8") > -1;
            if (isWin8) return "操作系统：Win8";
        }
        return "其他";
    }
    digits() {
        var agent = navigator.userAgent.toLowerCase();
        var sUserAgent = navigator.userAgent;
        var sUserAgent = navigator.userAgent;
        var is64 = sUserAgent.indexOf("WOW64") > -1;
        if (is64) {
            return "64位";
        } else {
            return "32位";
        }
    }
}


export default BrowserInfo