$(function (){
    var productid = getSearch('productId');

    console.log(productid);

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data: {
            productid: productid
        },
        dataType: 'json',
        success: function (info){
            console.log(info);
            $(".mon_product").html(template("productTmp",info));

            $(".mmb_extra").html(template("commonTmp",info));
        }
    })
})