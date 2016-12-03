function request(url,num){
    var arr = [];
    wx.request({
            url: url,
            data: 
            {
                key:'d4535374cccf71ba15cabed042792655',
                page:num,
                pagesize:'10'
            },
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success:function(res){
                arr = arr.concat(res.data.result.data)                
            }
        })
}

module.exports = {
    request: request
}