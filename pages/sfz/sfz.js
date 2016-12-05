//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //事件处理函数
  bindViewS:function(e){
    var that = this;
    console.log(e.detail.value.input)
    var val = e.detail.value.input ;
    wx.request({
      url: 'http://apis.juhe.cn/idcard/index',
      data: {
          key:'bcc2fe431500a3db116b39857baf0883',
          cardno:val
      },
      method: 'GET', 
      success: function(res){
        console.log(res.data)
        that.setData({
          area:res.data.result.area,
          birthday:res.data.result.birthday
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onLoad: function (e) {
      
      
  }
})
