//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          // console.log(res)
          // console.log(123)
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              console.log(res.rawData)
              console.log(typeof(res.rawData));
              // var json = JSON.parse(res.rawData)  // JSON.parse() 将字符串转换成json对象
              // JSON.stringify() 将json对象转换成字符串
              // console.log(json.nickName)
              // console.log("上面的是app.js里面打印出来的")
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})