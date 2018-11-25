$(function () {
    var id = getSearch("brandtitleid");
    var productid;
    // 获取十大品牌数据
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getbrand',
        data: {
            brandtitleid: id
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $(".productNav").html( template("productTmp",info) );

        }
    })

    // 获取销量排行数据
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandproductlist',
        data: {
            brandtitleid: id,
            pagesize: 5
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $(".saleBox").html( template("saleTmp",info) );
            productid = $(".saleBox li").data("id");

            $.ajax({
                url: 'http://127.0.0.1:9090/api/getproductcom',
                data: {
                    productid: 0
                },
                dataType: 'json',
                success: function (info) {
                    console.log(info);
                    $(".newComment").html( template("commentTmp",info) );
                }
            })
        }
    })

})