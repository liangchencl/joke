//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //事件处理函数
  bindViewS:function(e){
    console.log(e.detail.value.input)
    var val = e.detail.value.input ;
    wx.request({
      url: 'http://apis.juhe.cn',
      data: {
          key:'bcc2fe431500a3db116b39857baf0883',
          cardno:val
      },
      method: 'GET', 
      success: function(res){
        console.log(res)
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
