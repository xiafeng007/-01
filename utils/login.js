var that = this;
var openid = wx.getStorageSync('openid');
var name = wx.getStorageSync('name');
console.log(name);
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