$(function () {

    var shopId;
    var areaId;

    // 点击显示二级导航
    $('.shop').click(function () {
        $(".shopNav").toggle().parent().siblings().find(".areaNav").hide();
        $(this).siblings().toggleClass("fa fa-sort-down").toggleClass("fa fa-sort-up");
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsshop',
            dataType: 'json',
            success: function (info) {
                $(".shopNav").html(template("shopTmp",info));
            }
        })

    })

    $('.area').click(function () {
        $(".areaNav").toggle().parent().siblings().find(".shopNav").hide();
        $(this).siblings().toggleClass("fa fa-sort-down").toggleClass("fa fa-sort-up");
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsshoparea',
            dataType: 'json',
            success: function (info) {
                $(".areaNav").html(template("areaTmp", info));
            }
        })
    })


    // 点击a获取对应的id
    $('.shopNav').on('click',"li",function () {
        shopId = $(this).data('id');
        var txt = $(this).text();
        $('.nav>ul>li').eq(0).children("a").text(txt);
        $('.shopNav').hide();

        render(shopId,areaId);
    })

    $(".areaNav").on('click',"li",function () {
        areaId = $(this).data('id');
        var txt = $(this).text().trim().slice(0,2);
        $('.nav>ul>li').eq(1).children("a").text(txt);
        $(".areaNav").hide();

        render(shopId,areaId);
    })


    render();
    // 渲染商品数据
    function render(shopid,areaid) {
        shopid = shopid || 0;
        areaid = areaid || 0;

        $.ajax({
            url: 'http://127.0.0.1:9090/api/getgsproduct',
            data: {
                shopid: shopid,
                areaid: areaid
            },
            dataType: 'json',
            success: function (info) {
                $(".goods ul").html(template("goodsTmp",info));
            }
        })
    }
})