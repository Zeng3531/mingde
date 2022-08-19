$(function (){
    // 节流阀
    var flag = true; 

    $(window).scroll(function () {
        //遍历所有盒子
        if(flag) {
            $("#act-pd .bigbox").each(function (i,ele) {
                //判断被卷去的头部大于等于 里面元素的top值 则表示滑动到了改模块
                if($(document).scrollTop() >= $(ele).offset().top) {
                    //将相应的索引号选出来 添加相应的类     
                    $(".centeredNav li").eq(i).addClass("active").siblings().removeClass("active")
                }
            })
        }
   })
   
   $(".centeredNav li").click(function () {
       flag = false
       
       let curent = $("#act-pd .bigbox").eq($(this).index()).offset().top;
       $("body,html").stop().animate({
           scrollTop: curent 
       },function() {
           flag = true;
       })
       $(this).addClass("active").siblings().removeClass("active")
   })
   
})