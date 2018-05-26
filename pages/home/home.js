var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: app.clientUrl,
    imgUrls: [
      // { src: '/images/banner_01.jpg', title: '第1张图片', page_url:''},
      // { src: '/images/banner_02.jpg', title: '第2张图片', page_url:''},
      // { src: '/images/banner_03.jpg', title: '第3张图片', page_url: '' }
    ], 
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorColor: '#f00',
    swiperCurrent: 0,
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 轮播图
    var that = this;
    wx.request({
      url: app.clientUrl + '/api/index/slide',
      data: {

      },
      method: 'GET',
      success: function (res) {
        //console.log(res.data.data);
        that.setData({
          imgUrls: res.data.data
        })
      }
    });
  },

  // changewish:function(data){
  //   var bottle_id = data.currentTarget.dataset.bottle_id;
  //   console.log(bottle_id);
  //   wx.navigateTo({
  //     url: '../Wishing/Wishing?bottle_id =' + bottle_id
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var openid = wx.getStorageSync('openid');
    var name = wx.getStorageSync('name');
    wx.request({
      url: app.clientUrl + '/api/user/login',
      data: {
        openid: openid,
        name: name
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success: function (res) {
        console.log(res);
        wx.setStorageSync('token', res.data.data.token)
        that.setData({

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