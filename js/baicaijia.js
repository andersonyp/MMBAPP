$(function () {


    // 1-请求导航栏数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.nav .wrapper ul').html( template("navTmp",info));


            // 2-区域滚动
            new IScroll('.wrapper', {
                scrollX: true,
                scrollY: false
            });

        }
    })

// 3-给li添加样式
    $(".wrapper").on('click', 'li', function () {
        $(this).addClass('current').siblings().removeClass('current');

        var titleId = $(this).find("a").data("id");

        render(titleId);


    })

    render();

    function render( id ) {
        id = id || 0,

        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data: {
                titleid: id
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                $(".content ul").html(template('goodsTmp', info));
            }
        })
    }
})