$(function () {
    // 1-导航栏区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        scrollY: false, //是否竖向滚动
        scrollX: true, //是否横向滚动
    });

    // 2-请求导航栏数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.nav .mui-scroll ul').html( template("navTmp",info));

            var $ul = document.querySelector(".nav .mui-scroll ul");

            var $lis = $ul.querySelectorAll("li");

            var width = $(".nav .mui-scroll ul li a").width() + 26;

            console.log(width);
            var totalWidth = $lis.length * width;

            $('.nav .mui-scroll ul').width(totalWidth);


        }
    })


})