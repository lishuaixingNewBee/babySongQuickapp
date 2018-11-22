import nativeFetch from '@system.fetch';
import prompt from '@system.prompt';
const BASE_URL = `https://easy-mock.com/mock/5bec37889466046b368d2024/quickapp/api`;
class http {
  static async request(method, Aurl, data) {
    let url = Aurl;
    const strRegex = '(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]';
    var reg = new RegExp(strRegex);
    if (!reg.test(url)) {
      url = BASE_URL + url;
    }
    console.warn(`请求地址:${url}`);
    const res = await this.fetch(method, url, data)
    if (this.isSuccess(res)) {
      return JSON.parse(res.data);
    } else {
      console.warn('请求错误');
      throw this.requestException(res);
    }
  }
  static fetch(method, url, data) {
    return new Promise((resolve, reject) => {
      nativeFetch.fetch({
        method,
        url,
        data,
        success: resolve,
        fail: reject
      })
    })
  }
  static isSuccess(res) {
    const quickappCode = res.code;
    // 快应用请求错误
    if (quickappCode !== 200) {
      return false;
    }
    const quickappData = JSON.parse(res.data)
    return !(quickappData && quickappData.status !== 0);
  }
  /**
   * 异常
   */
  static requestException(res) {
    const error = {};
    error.statusCode = res.code;
    const quickappData = res.data;
    if (quickappData) {
      const serverData = JSON.parse(res.data)
      if (serverData) {
        error.serverCode = serverData.status;
        error.message = serverData.msg;
        error.serverData = serverData.data;
      }
    }
    return error;
  }
  static get(url, data) {
    return this.request('GET', url, data);
  }

  static put(url, data) {
    return this.request('PUT', url, data);
  }

  static post(url, data) {
    return this.request('POST', url, data);
  }

  static patch(url, data) {
    return this.request('PATCH', url, data);
  }

  static delete(url, data) {
    return this.request('DELETE', url, data);
  }
}
// 全局注册
// export default base
const injectRef = Object.getPrototypeOf(global) || global
injectRef.$http = http