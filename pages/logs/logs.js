var app = getApp();
var num = 1;
var arr = [];
var key = "d4535374cccf71ba15cabed042792655";
var url = "https://japi.juhe.cn/joke/content/text.from";
Page({
    data:{
        scrollTop : 0,
        investList:[]
    },
  onLoad:function(e){
      var that = this;
      wx.getSystemInfo({
        success:function(res){
            console.log(res.windowHeight);
            that.setData({
                scrollHeight:res.windowHeight
            });
        }
    })
      wx.request({
            url: url,
            data: 
            {
                key:key,
                page:num,
                pagesize:'10'
            },
            method: 'GET', 
            success:function(res){
                arr = arr.concat(res.data.result.data)
                that.setData({
                    investList:arr
                })
            }
        })
    },
    upper:function(){
        // console.log("移动到顶部了")
    },

    lower:function(){
        var that = this;
        console.log("移动到底部了");
        num++;
        console.log(num)
        wx.request({
          
            url: url,
            data: 
            {
                key:key,
                page:num,
                pagesize:'10'
            },
            method: 'GET',
            success:function(res){
                arr = arr.concat(res.data.result.data)
                that.setData({
                    investList:arr                    
                })
            }
        })
        
    },
    bindDownLoad:function(){
        
    },
    scroll:function(event){
        //   该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
        // console.log("开始滑动了")
        this.setData({
            scrollTop : event.detail.scrollTop
        });
    }

})