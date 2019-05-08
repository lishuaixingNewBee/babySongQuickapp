# 熊宝儿歌故事QuickApp

<p align="center">
  <img height="60" src="https://user-gold-cdn.xitu.io/2018/11/22/1673aa469f67ae2c?w=280&h=97&f=png&s=11011">
</p>
熊宝儿歌故事基于快应用技术开发，且小程序版已经上线欢迎大家体验，由于快应用推出时间不久，网络上关于快应用的资料少之又少，本人也因公司需求进行开发，一路上踩坑无数，并集成友盟统计，完全遵循正式项目，今想把自己的一些经验分享出来，让大家少走弯路，如有错误和意见欢迎大家提出，共同进步。

![banner.png](https://user-gold-cdn.xitu.io/2018/11/22/1673a99b22d4de1c?w=2800&h=1724&f=png&s=782271)

- [线上开源地址](https://github.com/lishuaixingNewBee/babySongQuickapp) https://github.com/lishuaixingNewBee/babySongQuickapp 点个赞吧！
- [快应用开发文档](https://doc.quickapp.cn/)

![首页](https://user-gold-cdn.xitu.io/2018/11/22/1673aaa9f1bb50ce?w=260&h=466&f=gif&s=1835323)

![音乐/视频](https://user-gold-cdn.xitu.io/2018/11/22/1673aab73d0246d5?w=260&h=466&f=gif&s=3308757)

![信息流](https://user-gold-cdn.xitu.io/2018/11/22/1673aacdcee6238a?w=260&h=466&f=gif&s=2998732)


`以下所有 API 均由产品公司自身提供，本人皆从网络获取。获取与共享之行为或有侵犯产品权益的嫌疑。若被告知需停止共享与使用，本人会及时删除此页面与整个项目。请您暸解相关情况，并遵守产品协议。`

为了方便大家学习和测试，且保证原公司利益，本项目采用easy-mock模拟后台数据。

###  项目介绍
熊宝儿歌故事基于快应用技术开发，分音乐、视频、育儿信息流三大模块，音乐模块相对复杂，包含套完整的音乐播放器逻辑，且快应用坑较多，所以实现起来难度加大，其他模块均为信息流方式呈现，包含常用的上拉刷新，下拉加载逻辑。

### 目录结构
------
```shell
├── sign                      rpk包签名模块
│   └── debug                 调试环境
│       ├── certificate.pem   证书文件
│       └── private.pem       私钥文件
├── src
│   ├── api                   请求接口
│   ├── common                公用的资源和组件文件
│   ├── components            组件文件
│   ├── pages                  页面目录
│   |   └── index.ux          页面文件，可自定义页面名称
│   ├── app.ux              APP文件，可引入公共脚本，暴露公共数据和方法等
│   └── manifest.json         项目配置文件，配置应用图标、页面路由等
└── package.json              定义项目需要的各种模块及配置信息
```

### 项目安装
```
    git clone git@github.com:lishuaixingNewBee/babySongQuickapp.git
    npm install
    打开两个终端窗口分别执行：
    npm run watch
    npm run server
    如果开发者在后续操作中遇到报错Cannot find module '.../node_modules/hap-tools/webpack.config.js'，请运行一次
    hap update —force
```
### 编译打包
```
特别注意：如果是需要发布到应用市场是安卓应用一样需要签名文件
npm run build
编译后的工程目录在/build
生成的应用路径为/dist/.rpk
```
### 增加release签名
```
1、创建私钥：
通过openssl命令等工具生成签名文件private.pem、certificate.pem，如：
openssl req -newkey rsa:2048 -nodes -keyout private.pem -x509 -days 3650 -out certificate.pem
(密钥长度，1024觉得不够安全的话可以用2048，但是代价也相应增大)
在工程的sign目录下创建release目录，将私钥文件private.pem和证书文件certificate.pem拷贝进去

Country Name (2 letter code) [XX]:CN   #国家代码（中国）
State or Province Name (full name) []:BeiJing   #省（北京）
Locality Name (eg, city) [Default City]:BeiJing   #市（北京）
Organization Name (eg, company) [Default Company Ltd]:tact  #公司名称
Organizational Unit Name (eg, section) []:   #可不填
Common Name (eg, your name or your server's hostname) []: #可不填
Email Address []:Val.china@foxmail.com  #邮箱
 
Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:   #可不填
An optional company name []:   #可不填
在工程的sign目录下创建release目录，将私钥文件private.pem和证书文件crtificate.pem拷贝进去
```
### 发布程序包
```
发布程序包前需要增加release签名，然后在工程的根目录下运行
npm run release
生成的应用路径为/dist/.signed.rpk
如果需要临时使用debug签名，可以使用
npm run release -- --debug
注意: debug签名由于是公开的，安全性无法保证，一定不要使用debug签名签发正式上线的应用,一定要保存好你的签名文件。
```
### 开发中常见问题
`如一些基本问题，组件传参啥的我就不仔细讲了，大家去看文档就好了。我主要说一些坑吧。`
1. 关于样式组件问题
    ```
    - 快应用默认flex布局，所以咱们之前float,position啥的都不好使。
    - background-image 不支持网络路径
    - 不支持 box-shadow属性(很多样式都不支持)，想实现的话用背景图去实现
    - 不支持 webfont,据说后期会加上。
    - svg的图片在华为应用平台有兼容问题。
    - 华为应用平台对动画有兼容性问题，下一版才会解决
    - tabs内不能再嵌套tabs，如有此类需求，请参考教程第一部分div组件模拟选项卡
    - 要实现z-index的图层效果请使用stack
    - swiper不支持 滑动方向改变
    - list-item组件dom结构不一致时,一定要给type="***"不同命名来区别，否则也会闪退，且组件的if改为show否则，会改变dom结构。
    暂时采用<list-item type="{{index}}">解决
    ```
2. 关于框架API
  ```
   - 父子组件prop传参数，如果属性名称使用驼峰定义，如：prop2Object，那么在外部传递数据时请使用-连接，如：prop2-object
   - slider 组件只有滑动结束后end才有回调，进行中没有回调，改变value值也会触发change事件，无法判断change是人为滑动触发，还是改变数据触发的
   - 没有提供获取音频播放状态的接口。
   - 组件没有onDestroy钩子，用if不会被触发。
   - 无selectionchange 选中文本改变和光标移动时触发(据说1030会加上)。
   - 有没有类似 touchstart  和 touchend的事件(确定1030会加上)。
   - this.$forceUpdate()相当于vue的this.$nextTick()
  ```
3. 重新封装fetch接口
```
import nativeFetch from '@system.fetch';
import prompt from '@system.prompt';
const BASE_URL = `https://xxxxxx`;
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
  /*异常*/
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
```

### ○ 更新记录
#### 2018.11.23
#### 2019.5.8  更新toolkit
```
    -  求小伙伴一起维护项目
```
<p align="center">
  <img height="200" src="https://user-gold-cdn.xitu.io/2018/11/23/1673ea1d0980ff01?w=516&h=365&f=png&s=196419">
</p>
