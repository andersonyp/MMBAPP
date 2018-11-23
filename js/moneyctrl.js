$(function () {
    var pageid = 0;
    var totalPage;

    render();

    // 请求后台数据,渲染页面
   function render(pageid) {
       pageid = pageid || 0;
       $.ajax({
           type: 'get',
           url: 'http://127.0.0.1:9090/api/getmoneyctrl',
           data: {
               pageid: pageid
           },
           dataType: 'json',
           success: function (info) {
               $(".content ul").html(template('goodsTmp', info));

               totalPage = Math.ceil(info.totalCount / info.pagesize);
               $(".currentPage span").text((pageid + 1) + "/" + totalPage);

               $(".morePage").html(template("pageTmp", {pageCount: totalPage}));
           }
       })
   }


   // 下一页
    $("#nextPage").click(function () {
        pageid++;
        if (pageid > totalPage) {
            pageid = totalPage
        }

        render(pageid);
    })

    // 下一页
    $("#prevPage").click(function () {
        pageid--;
        if (pageid < 0) {
            pageid = 0;
        }
        render(pageid);
    })

    $('.currentPage').on('click',function () {
        $(this).find('.morePage').toggle();
    })

    $('.currentPage').on('click','.morePage li',function () {
        pageid = $(this).index();
        render(pageid);
    })
})