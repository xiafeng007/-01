//app.js
App({
  clientUrl: 'https://xyxy.lchuyu.com',  // 链接地址
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var code = '';
    // 登录
    wx.login({
      success: res => {
        code = res.code;
        //console.log(code);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
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
              wx.request({
                url: 'https://xyxy.lchuyu.com/api/user/login',
                data: { code: code, name: name },
                method: 'POST',
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  // openid = res.data.openid //返回openid
                  console.log(res);
                  // console.log('token', res.data.data.token);
                  wx.setStorageSync('token', res.data.data.token)
                }
              })

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