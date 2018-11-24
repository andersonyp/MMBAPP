$(function () {
    var id = getSearch("couponid");

    // 1-点击显示模态框
    $(".content").on("click","ul li a",function () {
        $(".modal").addClass(' fadeIn').show();
    })

    $(".modal-in").on('click',".close",function () {
        $(".modal").removeClass(' fadeIn').hide();
    })

    // 2-获取后台数据,渲染到页面
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcouponproduct',
        data: {
            couponid: id
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $(".content ul").html( template("listTmp",info) );

            $(".modal-in").html(template("modalTmp",info));
        }
    })
})