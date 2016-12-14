// pages/text/text.js
Page({
  data:{},
  onLoad:function(e){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    for(var i=0;i<4;i++){
      for(var j=0;j<4;j++){
        var item_left = 120*i;
        var item_top = 120*j;
        console.log(item_top)
        that.setData({
          item_0_0_left:item_left,
          item_0_0_right:item_top
        })
      }
    }
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
  },
  startFirst:function(e){
    console.log("kaishi")
  },
  moveFirst:function(e){
    console.log("move")
  },
  endFirst:function(e){
    console.log("end")
  }
})