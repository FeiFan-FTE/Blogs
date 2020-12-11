export default {
    ellipsis(str, len) { //截取字符串长度
        len = len ? len : 16
        var regexp = /[^\x00-\xff]/g;
        // 当字符串字节长度小于指定的字节长度时
        if (str.replace(regexp, "aa").length <= len) {
            return str;
        }
        // 假设指定长度内都是中文
        var m = Math.floor(len / 2);
        for (var i = m, j = str.length; i < j; i++) {
            // 当截取字符串字节长度满足指定的字节长度
            if (str.substring(0, i).replace(regexp, "aa").length >= len) {
                return str.substring(0, i) + '...';
            }
        }
        return str;
    }
}