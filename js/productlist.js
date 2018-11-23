$(function () {
    var id = getSearch('categoryid') || 1;


    // 渲染导航数据
    $.ajax({
        type: 'get',
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid: id
        },
        dataType: 'json',
        success: function (info) {
            console.log(info);
            $('.nav').html( template("navTmp",info) );
        }
    })

    // 渲染商品数据


    function render(currentPage) {

        currentPage = currentPage || 1;

        $.ajax({
            type: 'get',
            url: 'http://127.0.0.1:9090/api/getproductlist',
            data: {
                categoryid: id,
                pageid: currentPage
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                $(".content ul").html(template('goodsTmp', info));

                totalPage = Math.ceil(info.totalCount / info.pagesize);

                $(".currentPage span").text( currentPage + "/" + totalPage );

                $('.morePage').html( template("pageTmp",{pageCount: totalPage}) );
            }
        })
    }


    var currentPage = 1;
    var totalPage;

    render();
    // 下一页
    $("#next").click(function () {
        currentPage++;
        if (currentPage >= totalPage) {
            currentPage = totalPage;
        }
        render(currentPage);
    })

    // 上一页
    $("#prev").click(function () {
        currentPage--;
        if (currentPage <= 0) {
            currentPage = 1;
        }
        render(currentPage);
    })


    // 点击切换
    $('.currentPage').on('click',function () {
        $(this).find('.morePage').toggle();
    })

    // 改变当前页数
    $('.currentPage').on('click','.morePage li',function () {
        currentPage = $(this).index() + 1;
        render(currentPage);
    })
})