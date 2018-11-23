$(function () {
    // 发送ajax请求后台数据,渲染一级导航
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorytitle',
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.nav ul').html( template('navTmp',info) );

            $('.nav').on('click','a',function () {
                // 获取id
                var id = $(this).data('id');
                var $that = $(this);

                // 通过id获取对应的二级导航列表
                $.ajax({
                    type: 'get',
                    url: 'http://127.0.0.1:9090/api/getcategory',
                    data: {
                        titleid:id
                    },
                    dataType: "json",
                    success: function (info) {
                        console.log(info);
                        $that.next().html( template('navListTmp',info) );
                        $that.next().stop().slideToggle();
                    }
                })
            })
        }
    })
})