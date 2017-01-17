//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '笑话大全',
    text: '1024',
    text_s: '身份证查询',
    text_p:'省市级联动',
    text_d:'搜索图片',
    text_c:'城市选择',
    map:"地图",
    form:"表单验证",
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindViewText: function() {
    var id = 1;
    wx.navigateTo({
      url: '../text/text?item='+id,
      success:function(res){
        console.log(res)
      }
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
  bindViewD:function(){
    wx.navigateTo({
      url: '../doutu/doutu'
    })
  },
  bindViewC:function(){
    wx.navigateTo({
      url: '../city/city'
    })
  },
  bindViewM:function(){
    wx.navigateTo({
      url: '../map/map'
    })
  },
  bindViewF:function(){
    wx.navigateTo({
      url: '../form/form'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      // console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  // onshow:function(){
  //   console.log("onshow")
  // }
})
