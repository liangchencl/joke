var app = getApp()
Page({
  data:{
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../images/car.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 113.324129,
      iconPath: '../images/car.png',
      rotate: 90
    }]
  },
  
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        // success
        var latitude = res.latitude
        var longitude = res.longitude
        
        console.log(latitude)
        console.log(longitude)
        that.setData({
          latitude : latitude,
          longitude : longitude,
          markers:[{
            latitude:latitude,
            longitude : longitude,
            name: '科兴科学园',
            desc: '位置貌似定的不对'
          }],
          covers: [{
            latitude: latitude,
            longitude: longitude,
            iconPath: '../images/car.png',
            rotate: 10
          }, {
            latitude: latitude,
            longitude: longitude,
            iconPath: '../images/car.png',
            rotate: 90
          }]
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
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  }
})