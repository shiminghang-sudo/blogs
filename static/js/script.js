

$(document).ready(function () {
    //定时器的返回值
    var time = null;
    //记录当前位置
    var nexImg = 0;
    //获取轮播图图片个数
    var imgLength = $(".swiper-li").length;
    time = setInterval(intervalImg, 3000);

    function intervalImg() {
        if (nexImg < imgLength - 1){
            nexImg++;
        } else {
            nexImg = 0;
        }

        var swiperLi = $(".swiper-li");
        swiperLi.eq(nexImg).animate({"opacity": 1}, 1000);
        swiperLi.eq(nexImg - 1).animate({"opacity": 0}, 1000);
    }
});

