// pages/text/text.js
var startLeft;
var startTop;
var endLeft;
var endTop;
// 随机生成2个位置用于放置数字
var radom = function(that,num1,num2,num3,num4){
    var item_0_0_left=[0,120,240,360];
    var item_0_0_top=[0,120,240,360];
    var item_top = item_0_0_top[num1];
    var item_left = item_0_0_left[num2];
    var item_top2 = item_0_0_top[num3];
    var item_left2 = item_0_0_left[num4];
    that.setData({
      top:item_top,
      left:item_left,
      top2:item_top2,
      left2:item_left2
    })
};

Page({
  data:{
    item_0_0_left:[0,120,240,360],
    item_0_0_top:[0,120,240,360]
    
  },
  onLoad:function(e){
    var that = this;
    // 
    var num1 = Math.floor(Math.random()*4);
    var num2 = Math.floor(Math.random()*4);
    var num3 = Math.floor(Math.random()*4);
    var num4 = Math.floor(Math.random()*4);

    if(num1==num3 && num2==num4){
      var num1 = Math.floor(Math.random()*4);
      var num2 = Math.floor(Math.random()*4);
      radom(that,num1,num2,num3,num4)
    }else{
      radom(that,num1,num2,num3,num4)
    };
    // 随机生成两个数字 2 或者 4 
    var n1 = Math.random() < 0.5 ? 2 : 4;
    var n2 = Math.random() < 0.5 ? 2 : 4;
    that.setData({
      n1:n1,
      n2:n2
    })    
  },

  startFirst:function(e){
    startLeft = e.changedTouches[0].clientX;
    startTop = e.changedTouches[0].clientY;
  },
  moveFirst:function(e){
    console.log("move")
  },
  endFirst:function(e){
    endLeft = e.changedTouches[0].clientX;
    endTop = e.changedTouches[0].clientY;

    console.log(startLeft)
    console.log(endLeft)
    console.log('///////////')
    
    console.log(startTop)
    console.log(endTop)

    if(endLeft - startLeft > 0 && endLeft - startLeft > Math.abs(startTop - endTop)){
      console.log("向右移动了")

    }else if(endLeft - startLeft < 0 && startLeft - endLeft > Math.abs(endTop - startTop) ){
      console.log("向左移动了")

    }else if( startTop - endTop > 0 && startTop - endTop > Math.abs(endLeft - startLeft)){
      console.log("向上移动了")

    }else if( endTop - startTop > 0 && endTop - startTop > Math.abs(endLeft - startLeft)){
      console.log("向下移动了")
    }
  }
})