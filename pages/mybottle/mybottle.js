var app = getApp();
Page({
  data: {
    // 走马灯js
    text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
    tempInfo: [{ // 模拟后台数据
      id: 1,
      name: '犀牛快跑',
      info: '一帆风顺，大吉大利，出入平安，和气生财。一帆风顺，大吉大利，出入平安，和气生财。',
      time: '2018-07-12 14:00'
    }, {
        id: 2,
        name: '犀牛快跑',
        info: '一帆风顺，大吉大利，出入平安，和气生财。一帆风顺，大吉大利，出入平安，和气生财。',
        time: '2018-07-12 14:00'
      }, {
        id: 3,
        name: '犀牛快跑',
        info: '一帆风顺，大吉大利，出入平安，和气生财。一帆风顺，大吉大利，出入平安，和气生财。',
        time: '2018-07-12 14:00'
      }],
    dataInfo: [], // 重组数组内容
  },
  // 展开详情
  expandDetail: function (e) {
    var idx = e.currentTarget.dataset.idx; // 获取当前下标
    var key = "dataInfo[" + idx + "].flag";
    var val = this.data.dataInfo[idx].flag;
      this.setData({
        [key]: !val
    });
  },
  onLoad: function (opt) {
    for (var i in this.data.tempInfo) {
      this.data.tempInfo[i].flag = false; // 添加新属性
    };
    this.setData({
      dataInfo: this.data.tempInfo
    });
  },
  onShow: function () {
    // 页面显示
    
  }
  
})