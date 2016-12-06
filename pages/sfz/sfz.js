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
      
      
  }
})
