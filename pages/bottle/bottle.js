var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    select: 1,    
    idx:'',
    classfly:[{
      title:"最新",
      id:1
      }, {
        title: "本周最新",
        id:2
      },{
        title: "星愿榜",
        id:3
      }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getlists(){
    var that = this;
    var token = wx.getStorageSync('token');
    var idx = that.idx;
    wx.request({
      url: app.clientUrl + '/api/user/lists',
      data: {
        token: token,
        type: idx,
        page: 1,
        num: 10
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          lists: res.data.data
        })
      }
    });
  },
  onchange(data) {
    var that = this;
    var idx = data.currentTarget.dataset.idx;
    that.setData({ "select": idx });
    console.log(idx);
    that.idx=idx;
    that.getlists();
  },
  onLoad: function (options) {
    var that = this;
    var token = wx.getStorageSync('token');
    var idx = that.idx;
    console.log(idx);
    console.log(token);
    that.getlists();
  },

  //点赞
  ongive:function(data){
    var that = this;
    var id = data.currentTarget.dataset.id;
    console.log(id);
   var token = wx.getStorageSync('token');
    wx.request({
      url: app.clientUrl + '/api/Wish/like',
      data: {
        token: token,
        id:id
      },
      method: 'POST',
      success: function (res) {
        that.getlists();
        if (res.code == 0) {
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
        that.setData({
          
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getlists();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.getlists();
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