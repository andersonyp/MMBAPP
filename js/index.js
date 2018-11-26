$(function () {
    // 1-获取导航数据渲染到页面
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.nav ul').html( template( 'navTmp',info ) );

            var $more = $('.nav .more');
            $more.on('click',function () {
                $('.nav_list.more ~ .nav_list').stop().slideToggle(500);
            })
        }
    });

    // 2-获取商品列表数据渲染页面
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.goodsList .content ul').html( template("goodsTmp",info) );   
            
        }
    })
})