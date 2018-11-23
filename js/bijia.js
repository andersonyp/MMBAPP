$(function () {
    var id = getSearch("productId");

    // 获取商品数据
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getproduct',
        data: {
            productid: id
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $(".goodsInfo").html( template("goodsInfoTmp",info) );
            $('.goshop').html( template("goshopTmp",info) );

            // 保存分类id
            var categoryid = info.result[0].categoryId;
            // 保存商品名
            var productName = info.result[0].productName.split(" ")[0];

            $.ajax({
                url: 'http://127.0.0.1:9090/api/getcategorybyid',
                data: {
                    categoryid: categoryid
                },
                success: function (info) {
                    console.log(info);
                    var brand = {
                        category: info.result[0],
                        productName: productName
                    };
                    console.log(brand);

                    $(".nav").html( template("navTmp",brand) );
                }
            })
        }
    })

    // 获取评论数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
            productid: id
        },
        dataType: "json",
        success: function (info) {
            $(".goodsCom ul").html( template("goodsComTmp",info) );
        }
    })
})