// pages/activitydetailed/activitydetailed.js
var idinfolist = [
  { "code": "1", "text": 'R&B笔记本电脑1台' },
  { "code": "2", "text": '乐高音响一套' },
  { "code": "3", "text": '背背佳书包一个' },
  { "code": "4", "text": '手机话费50元' },
  { "code": "5", "text": '爱奇艺体验会员（1周）' },
  { "code": "6", "text": '燕麦乐薯片一袋' },
  { "code": "7", "text": '神乐笔记簿1本' },
  { "code": "7", "text": '神乐笔记簿1本' },
  { "code": "7", "text": '神乐笔记簿1本' },
  { "code": "7", "text": '神乐笔记簿1本' },
  { "code": "7", "text": '神乐笔记簿1本' }
]
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailed:{},
    id:'',
    listData: idinfolist,
    inputValue: '', //用于显示输入语句  
    searchinput: '', //用户输入的查询语句  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 详情
    var that = this;
    that.id = options.id;
    wx.request({
      url: app.clientUrl + '/api/Activity/detail?id=' + options.id,
      data: {

      },
      method: 'GET',
      success: function (res) {
        that.setData({
          detailed: res.data.data
        })
      }
    });
  },

  //查看活动排名
  onlock: function (data) {
    var that=this;
    var id = data.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../ranking/ranking?id=' + id
    })
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