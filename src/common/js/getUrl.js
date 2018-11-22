export default class getUrl {
    static relativePath(url) {
        var relUrl = this.pathSearch(url)
        if (relUrl.indexOf('?') != -1) {
            relUrl = relUrl.split('?')[0]
        }
        return relUrl;
    }
    static pathSearch(url) {
        var arrUrl = url.split('//')
        var start = arrUrl[1].indexOf('/')
        var relUrl = arrUrl[1].substring(start)
        return relUrl
    }
    static paramsFromURL(url) {
        if ('undefined' == url) {
            return {};
        }
        let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        let paraObj = {};
        for (let i = 0; i < paraString.length; i++) {
            let j = paraString[i];
            paraObj[j.substring(0, j.indexOf("="))] = j.substring(j.indexOf("=") + 1, j.length);
        }
        return paraObj;
    }
}