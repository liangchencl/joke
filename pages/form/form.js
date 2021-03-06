var app = getApp()

// 匹配邮箱
var isEmail = function (email) {
        return /^\s*\w+(?:\.{0,1}[\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]+\s*$/i.test(email);
    };

// 匹配手机号码
var isMoblie = function (mobile) {
        return /^1[358]\d{9}$/.test(mobile);
    };
// 匹配中文
var isNumberlatterCcter = function (userName) {
        return /^[\u0391-\uFFE5]+$/.test(userName);
    };
// 匹配中文字母数字
// /^[\u0391-\uFFE5A-Za-z0-9]+$/

var tojson = function (str){
    return str = JSON.parse(str);
}


Page({
    data:{
        error:false,
        link:[
            {url:"../activity/activity1"},
            {url:"../activity/activity2"},
            {url:"../activity/activity3"},
            {url:"../activity/activity4"}
        ],
        user:"用户名填写错误"
    },
    onLoad:function(){
        var a={"name":"tom","sex":"男","img":'{"big":"big.jpg","small":"small.jpg"}'}; 
        
        console.log(a.img);
        var b = tojson(a.img)
        // console.log(typeof(a.img))  // string
        // a.img = JSON.parse(a.img)
        a.img = b;
        console.log(typeof(a.img))  // object

        var myRe = /d(b+)d/g;
        var myArray = myRe.exec("cdbbdbsbz");
        console.log(myArray)
    },
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        var userName = e.detail.value.userName;
        var email = e.detail.value.email;

        if(isEmail(email)){
            console.log("正确的邮箱")
        }else{
            console.log("邮箱错误")
        }
        
        // console.log(userName)
        var arr = userName.match(/[\u4e00-\u9fa5]/gm);
        console.log(arr)
        this.setData({
            arr : arr
        })
        if(userName == ""){
            this.setData({
                error:true,
            })
        }else{
            this.setData({
                error:false,
            })
        }
    },
    formReset: function() {
        console.log('form发生了reset事件')
        this.setData({
                error:false,
            })
    },
    setstyle:function(e){
        console.log(e)
        // 底部有导航栏的时候才适用
        // wx.switchTab({
        //    url: '../index/index'
        // })
    }
})