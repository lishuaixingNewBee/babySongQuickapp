/**
 * 显示菜单
 */
function showMenu() {
  const itemList = this.appConfig.showMenu
  const prompt = require('@system.prompt')
  prompt.showContextMenu({
    itemList,
    success(ret) {
      if ((itemList.length - 1) === ret.index) {
        // 取消
        return
      }
      if (ret.index === 0) {
        // 保存到桌面
        createShortcut()
      } else if (ret.index === 1) {
        // 下载app
        download()
      } else if (ret.index === 2) {
        // 分享到微信
        shareWx()
      }
    }
  })
}
// 分享到微信
function shareWx() {
  const share = require('@system.share')
  const prompt = require('@system.prompt')
  share.share({
    type: 'image/*',
    data: '/common/image/shareimage.png',
    success(data) {
      console.log('handling success')
    },
    fail(data, code) {
      prompt.showToast({
        message: `${code}`
      })
    }
  })
}

function download() {
  const pkg = require('@system.package')
  const prompt = require('@system.prompt')
  pkg.install({
    package: 'com.kidplay.xb',
    success(data) {
      console.log(`handling success: ${data.result}`)
    },
    fail(data, code) {
      prompt.showToast({
        message: `${code}`
      })
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut() {
  const prompt = require('@system.prompt')
  const shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success(ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        })
      } else {
        shortcut.install({
          success() {
            prompt.showToast({
              message: '成功创建桌面图标'
            })
          },
          fail(errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`
            })
          }
        })
      }
    }
  })
}

function audioShow() {
  this.minplayVisible = true
  this.isplaying = false
  if (this.audio.src) {
    // 音乐开始
    this.audio.onplay = () => {
      this.isplaying = true
    }
    // 暂停时触发
    this.audio.onpause = () => {
      this.isplaying = false
    }
    // 音频播放进度控制
    this.audio.ontimeupdate = () => {
      this.isplaying = true
    }
  }
}

function audioHide() {
  this.audio.ontimeupdate = null
  this.audio.onplay = null
  this.audio.onpause = null
  this.minplayVisible = false
}
export default {
  showMenu,
  download,
  shareWx,
  createShortcut,
  audioShow,
  audioHide
}