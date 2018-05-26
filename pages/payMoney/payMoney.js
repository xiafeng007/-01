var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.id = options.id;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  onpayment: function () {
    var that = this
    var token = wx.getStorageSync('token');
    console.log(that.id, token)
        wx.request({
          url: app.clientUrl + '/api/user/wishPay',
          data: {
            "id": that.id,
            "token": token
          },
          method: 'POST',
          success: function (res) {
            console.log(res);
          }
    });
  },

  // onpayment:function(){
  //   var that = this
  //   var token = wx.getStorageSync('token');
  //   console.log(that.id, token)
  //   wx.login({
  //     success: function (res) {
  //       wx.request({
  //         url: app.clientUrl + '/api/user/wishPay',
  //         data: {
  //           "id": that.id,
  //           "token": token
  //         },
  //         method: 'POST',
  //         success: function (res) {
  //           wx.requestPayment({
  //             timeStamp: res.data.timeStamp,
  //             nonceStr: res.data.nonceStr,
  //             package: res.data.package,
  //             signType: res.data.signType,
  //             paySign: res.data.paySign,
  //             success: function (res) {

  //             },
  //             fail: function (res) {
  //               console.log(res)
  //             }
  //           })
  //         }
  //       });
  //     }
  //   });
  // },

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