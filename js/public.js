$(function () {
    // 点击出现搜索
    $('.nav .search_nav .search img').click(function () {
        $('.all').append('<div class="mask_search"><div class="search_input"><input type="text" placeholder="搜索"><img class="search_img" src="img/home_nav_search_hui@2x.png" alt=""><img class="close_search" src="img/home_nav_search_delete@2x.png" alt=""><span>确定</span></div></div>');
        $('.close_search').click(function () {
            $('.mask_search').css({display: 'none'})
        })
    })

    // 点击出现导航栏
    $('.nav_img').click(function(){
        $('.all').append('<div class="nav_mask"><ul><li><img class="close_nav" src="img/home_nav_search_delete@2x.png" alt=""></li><li><a href="login.html">登录/注册</a></li><li><a href="index.html">首页</a></li><li><a href="recommend.html">推荐</a></li><li><a href="cate.html">美食</a></li><li><a href="car.html">汽车</a></li><li><a href="travel.html">旅行</a></li></ul></div>');
        $('.close_nav').click(function(){
            $('.nav_mask').css({display:'none'})
        })
    })
})