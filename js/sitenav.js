$(function () {
    // 请求后台数据
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getsitenav',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $(".sitenav ul").html( template("navTmp",info) );
        }
    })
})