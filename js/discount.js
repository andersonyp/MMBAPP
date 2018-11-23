$(function () {
    var id = getSearch("productid");

    // 获取后台数据渲染页面
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getdiscountproduct",
        data: {
            productid: id
        },
        dataType: "json",
        success: function (info) {
            console.log(info);
            $(".mon_product").html( template("proTmp",info) );
            $(".mmb_extra").html( template("commonTmp",info) );
        }
    })
})