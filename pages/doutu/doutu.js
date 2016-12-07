var app = getApp()
Page({
    data:{

    },
    search:function(e){
        var val = e.detail.value.doutu;
        var that = this;
        wx.request({
          url: 'https://www.doutula.com/search?keyword=' + val,
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          
          success: function(res){
              var html = res.data;
              // console.log(res.data)
              // . 匹配除了换行和回车的所有字符串，打印res.data 可以看出有换行。所以用 https\:\/\/img7\.doutula\.com\/.*!dtb 即可匹配到。

              // 应该是  https\:\/\/img7\.doutula\.com\/.*?!dtb 在!dtb的前面加了一个? 问号  防止有的地址在同一行里面而匹配错误

              // 贪婪匹配(/.*/)，尽可能匹配任意多的字符。所以会直接匹配到最后一个字符，如果不能匹配则去掉一个字符再行匹配，重复这个过程直到匹配成功，或是匹配到第一个字符结束。

              // 隋性匹配(/.*?/)，尽可能少的匹配字符。所以这段正则并不会匹配任何内容，然后紧接着的其他内容会从字符串开头进行匹配

              // 参考地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions 

              var reg = new RegExp('https\:\/\/img7\.doutula\.com\/.*?!dtb','gm');

              // 下面的是匹配的是从第一个https://img7.doutula.com/ 开始到最后一个 !dtb 结尾的中间的一段字符串
              // var reg = new RegExp('https\:\/\/img7\.doutula\.com\/(.|\n)*!dtb','gm'); 
              
              var result;
              var arr = [];
              while((result = reg.exec(html)) != null){
                  arr.push(result);
                  console.log(arr)
                  that.setData({
                    imgList: arr
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
    }
})