var app = getApp()
var util = require('../../utils/util.js')  //引入微信自带的日期格式化
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start_time:'',
    api: app.clientUrl,
    Activity:[],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //活动列表
    var that = this;
    wx.request({
      url: app.clientUrl + '/api/Activity/lists?page=1&num=10',
      method: 'GET',
      success: function (res) {
        var Activity=res.data.data;
        // Activity.forEach(function (item) {
        //   item.start_time = util.formatTime(item.start_time, 'Y/M/D');
        //   item.over_time = util.formatTime(item.over_time, 'Y/M/D');
        // });
        that.setData({
          Activity: Activity
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})