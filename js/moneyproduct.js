$(function () {
    var productId = getSearch("productId");

    console.log(productId);


    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data: {
            productid: productId
        },
        dataType1: 'json',
        success: function (info) {
            console.log(info);

            $('.mon_product').html( template("productTmp", info) );
            $('.mmb_extra').html( template("commonTmp",info) );
        }
    })
})