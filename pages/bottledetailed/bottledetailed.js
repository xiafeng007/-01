var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailed:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 详情
      var that = this;
      wx.request({
        url: app.clientUrl + '/api/Wish/one?id=' + options.id,
        data: {

        },
        method: 'GET',
        success: function (res) {
          console.log(res.data.data);
          that.setData({
            detailed: res.data.data
          })
        }
    });
  },

  //许愿跳转
  // onwyxy:function(data){
  //   var id = data.currentTarget.dataset.id;
  //   console.log(id);
  //   wx.navigateTo({
  //     url: '../payMoney/payMoney?id =' + id
  //   })
  // },


  // onShareAppMessage: function () {
  //   return {
  //     title: '微信小程序联盟',
  //     desc: '最具人气的小程序开发联盟!',
  //     path: '/page/user?id=123'
  //   }
  // },
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮   
      console.log(ops.target)
    }
    return {
      title: '小程序',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

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