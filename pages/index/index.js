//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '开心一笑',
    text: '1024',
    text_s: '身份证查询',
    text_p:'省市级联动',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewText: function() {
    wx.navigateTo({
      url: '../text/text'
    })
  },
  bindViewS:function(){
    wx.navigateTo({
      url: '../sfz/sfz'
    })
  },
  bindViewP:function(){
    wx.navigateTo({
      url: '../picker/picker'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
