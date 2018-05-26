//index.js
//获取应用实例
const app = getApp()
const APP_ID = 'wx862ca94211b7f0aa';//输入小程序appid  
const APP_SECRET = '6f0e2001d7dfa636468d341696fd30cd';//输入小程序app_secret  
var OPEN_ID = ''//储存获取到openid  
var SESSION_KEY = ''//储存获取到session_key  
Page({
  data: {
    OPEN_ID:'',
    motto: '欢迎光临',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  onShow(){
   
  },
  bindViewTap:function(){
    var openid = wx.getStorageSync('openid');
    var name= wx.getStorageSync('name');
    console.log(openid, name);
    wx.request({
      url: app.clientUrl + '/api/user/login',
      data: {
        openid: openid,
        name: name
      },
      method: 'POST',
      success: function (res) {
        console.log(res);
        that.setData({

        })
      }
    });
  },
  onclick:function(){
    wx.navigateTo({  
      url: '../home/home'
    })
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
