//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    start:"1",
    time: '12:01',
    djs:"点击获取手机验证码"
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
        // 这里还要进行判断，看看输入的值是不是身份证号码。如果不是，应该有提示错误的的！
        console.log(res.data)
        if(res.data.result == null ){
          that.setData({
            sex:'',
            area:'',
            birthday:'',
            error:res.data.reason
          })
        }else{
          that.setData({
            sex:res.data.result.sex,
            area:res.data.result.area,
            birthday:res.data.result.birthday,
            numb:val,
            error:''
          })
        }
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
      wx.getSystemInfo({
        success:function(res){
          console.log(res)
        }
      })
      
  },

  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },

  clickMe:function(e){
    if(e.currentTarget.dataset.click == 'start'){
      this.setData({
        start:"0"
      })
    }else{
      this.setData({
          start:"1"
      })
    }
    
  },

  djs:function(e){
    console.log(e)
    var time = 120;
    var i = 1;
    var that = this;
    function daojishi(){
      var minute = time - i;
      i++
      that.setData({
        djs:"倒计时"+ minute +"秒"
      })
      if(minute == 0){
        clearInterval(sh)
        that.setData({
          djs:"点击重新获取手机验证码"
        })
      }
      console.log(minute)
    }
    var sh;
    sh = setInterval(daojishi,1000)
    

    
  }
})
