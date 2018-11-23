$(function () {
    // 请求数据渲染页面
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getinlanddiscount",
        dataType: "json",
        success: function (info) {
            console.log(info);
            $(".product ul").html( template("goodsTmp",info) );
        }
    })
})