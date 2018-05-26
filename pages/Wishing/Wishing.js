const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    api: app.clientUrl,
    bottle_id:"",
    sex_id:1,
    birth:'',
    api: app.clientUrl,
    items: [
      { name: '男', value: '1', checked: 'true' },
      { name: '女', value: '2'},
    ]
  },
  radioChange: function (e) {
    var that=this;
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    that.sex_id = e.detail.value
  },

  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    this.birth = e.detail.value
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options);
    console.log(options.bottle_id);
    that.bottle_id = options.bottle_id;
  },

  fb: function (res) {
    var fdata = res.detail.value
    //console.log(fdata)
    var that=this;
    var token = wx.getStorageSync('token');
    wx.request({
      url: app.clientUrl+'/api/user/wish',
      data: {
        token: token,
        bottle_id: that.bottle_id,
        name: fdata.name,
        sex: that.sex_id,
        birth: fdata.birth,
        mobile: fdata.mobile,
        content: fdata.content
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data == 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'laoding',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }
      }
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