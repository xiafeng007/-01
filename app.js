//app.js
// const APP_ID = 'wx862ca94211b7f0aa';//输入小程序appid  
// const APP_SECRET = '6f0e2001d7dfa636468d341696fd30cd';//输入小程序
const APP_ID = 'wxe25066b19a4d4893';//输入小程序appid  
const APP_SECRET = 'a3ca9cec08e426212504fd847dba4204';//输入小程序app_secret  
var OPEN_ID = ''//储存获取到openid  
var SESSION_KEY = ''//储存获取到session_key  
App({
  clientUrl: 'https://xyxy.lchuyu.com',  // 链接地址
  OPEN_ID: '',
  motto: '欢迎光临',
  userInfo: {},
  hasUserInfo: false,
  canIUse: wx.canIUse('button.open-type.getUserInfo'),
  onLaunch: function () {
    var that=this;
    //授权登录
    wx.getUserInfo({
      withCredentials: true,
      success: function (res) {
        let userInfo = res.userInfo
        that.globalData.userInfo = userInfo
      }
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var code='';
    // 登录
    wx.login({
      success: function (res) {
        wx.request({
          //获取openid接口  
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: APP_ID,
            secret: APP_SECRET,
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function (res) {
            OPEN_ID = res.data.openid;//获取到的openid
            wx.setStorageSync('openid',OPEN_ID)
            console.log('oppid',OPEN_ID);
            SESSION_KEY = res.data.session_key;//获取到session_key  
            console.log(OPEN_ID.length)
            console.log(SESSION_KEY.length)
            that.setData({
              openid: res.data.openid.substr(0, 10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length),
              session_key: res.data.session_key.substr(0, 8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)
            });
          }
        })
      }
    })
  
   
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
          
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              var name = res.userInfo.nickName;
              wx.setStorageSync('name', name)
              // wx.request({
              //   url: 'https://xyxy.lchuyu.com/api/user/login?code=' + code + '&name=' + name,
              //   data: {},
              //   header: {
              //     'content-type': 'application/json'
              //   },
              //   success: function (res) {
              //     // openid = res.data.openid //返回openid
              //     console.log(res);
              //     // console.log('token', res.data.data.token);
              //     wx.setStorageSync('token', res.data.data.token)
              //   }
              // })


              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})