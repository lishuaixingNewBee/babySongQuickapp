export default class util {
    static randomNum(Min, Max) { // 随机数
        var Range = Max - Min
        var Rand = Math.random()
        var num = Min + Math.round(Rand * Range) //四舍五入
        return num
    }
    static numW(num) {
        if (num >= 10000) {
            return Math.round(num / 10000 * 100) / 100 + '万';
        }
        return num
    }
    static formatSeconds(seconds) { // 时间转换 hh:mm:ss
        // 时间
        var ss = parseInt(seconds) // 秒
        var mm = 0 // 分
        var hh = 0 // 小时
        if (ss > 60) {
            mm = parseInt(ss / 60)
            ss = parseInt(ss % 60)
        }
        if (mm > 60) {
            hh = parseInt(mm / 60)
            mm = parseInt(mm % 60)
        }
        var result = ('00' + parseInt(ss)).slice(-2)
        if (mm > 0) {
            result = ('00' + parseInt(mm)).slice(-2) + ':' + result
        } else {
            result = '00:' + result
        }
        if (hh > 0) {
            result = ('00' + parseInt(hh)).slice(-2) + ':' + result
        }
        return result
    }
    /* eslint-disable */
    static setConsole(text = 'this is console!',isOneLine = 1,author = 'GordanLee(github.com/lishuaixingNewBee)') {
        console.warn(`${text}  ---  ${author}`)
    }
}
util.setConsole('李帅醒Plus+狗蛋实验室-基于quickapp开发')