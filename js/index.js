

$(function () {
    $(document).ready(function () {
        var siteWelcome = $('#loading');
        siteWelcome.addClass('close');
        setTimeout(function () {
            siteWelcome.remove();
        }, 600);
    });

    //获取所有图片 进行图片懒，预加载
    let imglist = document.querySelectorAll(".lay-img")
    // console.log(imglist);
    document.addEventListener("scroll", function () {
        let veheight = window.innerHeight;
        [...imglist].forEach(ele => {

            let { top } = ele.getBoundingClientRect()
            // console.log(top);

            let loading = ele.getAttribute("loading");
            if (loading) {
                return;
            }
            if (top - 100 < veheight) {
                //当高度小于可视高度时触发  即看到了图片
                ele.src = ele.getAttribute("data-src")
                //如果当前图片已经加载过了 得 给一个属性去记录当前的状态值 如当前图片有状态值 则不进行懒加载
                ele.setAttribute("loading", "true")
            }

        })
    })

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //判断页面被卷去的头部有没有超过规定的数值 有则添加类名 无则移除类名
        if (scroll >= 50) {
            $(".navAdmin").addClass("navSticky");
            //第一张图隐藏 第二张图删除隐藏的类名
            $(".imags").addClass("hide")
            $(".images").removeClass("hide")
            $(".navAdmin").addClass("sky")
            $(".collapse .centeredNav .item a").css("color", "#000")
            //将定位置为30 透明度为1
            $("#roop").css({ "bottom": "30px", "opacity": "1" })
            $(".assist").css("display", "block")
        } else {
            $(".navAdmin").removeClass("navSticky");
            //第二张图重新添加隐藏的类名 第一张图删除隐藏的类名
            $(".imags").removeClass("hide")
            $(".images").addClass("hide")
            $(".navAdmin").removeClass("sky")
            $(".collapse .centeredNav .item a").css("color", "rgba(255, 255, 255, 0.7)")
            //将定位置为0 透明度为0
            $("#roop").css({ "bottom": "0", "opacity": "0" })
            $(".assist").css("display", "none")

        }
    });
    // 动画
    $("#understand").click(function () {
        $("#cover").css("display", "block")
        $("#coverMD").show()
        $(".titles").text("了解一下，或许你就是最适合这个行业的人！")
        $("#coverMD").addClass('animate__animated animate__bounceInLeft')
        // 完成之后要移除类名，因为要恢复到原状态
        setTimeout(function () {
            $(".box").removeClass('animate__animated animate__bounceInLeft')
        }, 1000)
    })
    $(".close").click(function () {
        $("#cover").css("display", "none")
        $("#coverMD").animate(500, function () {
            $(this).addClass("animate__animated animate__fadeOutUp")
            setTimeout(function () {
                $("#coverMD").removeClass('animate__animated animate__fadeOutUp')
                $("#coverMD").hide();
            }, 1000)

        })
    })

    // 联系方式 微信公众号
    $("#wx").click(function () {
        $(".box").addClass("animate__animated animate__bounceInLeft").show()
        $(".box>h4").html('微信公众号')
        $(".box>img")[0].src = "/images/qrcode.bmp"
        $(".box>h2").html("")
    })

    // 联系方式 微信
    $("#tearch").click(function () {
        $(".box").addClass("animate__animated animate__bounceInLeft").show()
        $(".box>h4").html('陈老师微信')
        $(".box>img")[0].src = "/images/a9e60cfb788a1a2c36c339a3af75ef91.png"
        $(".box>h2").html("")
    })
    // 联系方式 地址电话
    $("#iphone").click(function () {
        $(".box").addClass("animate__animated animate__bounceInLeft").show()
        $(".box>h4").html('联系电话')
        $(".box>img")[0].src = ""
        $(".box>h2").html("姓名：陈老师 <br></br>手机号码：13750422927<br></br>电话号码：0755-33235520 / 0755-33235678 <br></br> 地址：广东省深圳市龙华区观澜街道观光路1301号银星科技大厦")
    })


    $(".closes").click(function () {
        $(".box").removeClass("animate__animated animate__bounceInLeft")
        $(".box").animate(500, function () {
            $(this).addClass("animate__animated animate__fadeOutUp")
            setTimeout(function () {
                $(".box").removeClass('animate__animated animate__fadeOutUp')
                $(".box").hide();
            }, 1000)
        })
    })

    //点击之后打开遮盖层
    $("#bmzx").click(function () {
        $(".trial").css("display", "block")
    })

    $("#roop").click(function () {
        $("body,html").stop().animate({
            scrollTop: 0
        }) //d动画效果返回顶部
    });


    $(".Web_main_info_img").mouseenter(function () {
        $(this).css({ boxShadow: ' 0px 0px 20px 12px #ccc', transition: 'all .5s' })
    })
    $(".Web_main_info_img").mouseleave(function () {
        $(this).css({ boxShadow: ' 0px 0px 0px 0px #ccc', transition: 'all .5s' })
    })

    //悬浮当前li元素 显示当前的阶段名称
    $(".path-main .path-item").mouseover(function () {
        //找到当前this.下面的阶段元素将元素隐藏
        this.querySelector(".path-title").style.display = "none"
    })

    $(".path-main .path-item").mouseout(function () {
        //找到当前this.下面的阶段元素将元素显示
        this.querySelector(".path-title").style.display = "block"
    })


    $(".st-text").mouseover(function () {
        this.querySelector(".st-textBox").style.display = "block";
        this.querySelector("h1").style.display = "none"
    })
    $(".st-text").mouseout(function () {
        this.querySelector(".st-textBox").style.display = "none";
        this.querySelector("h1").style.display = "block"
    })


    // 学习时长模块定时互动转换
    let timing;
    let stFlag = 0;
    function tabSelectBgcl(index) {
        $('.tab-select').eq(index).css({
            backgroundColor: '#cee0ff',
            color: 'black',
            fontSize: '15px'
        })
    }
    function moduleTrfo() {
        if (stFlag == $('.time-picture ul>li').length) {
            stFlag = 0;
        }
        $('.time-picture ul>li').eq(stFlag).css("display", "block").siblings().css("display", "none")
        $('.tab-select').css({ backgroundColor: '', color: '', fontSize: '' })
        tabSelectBgcl(stFlag)
    }
    function time() {
        timing = setInterval(() => {
            moduleTrfo()
            stFlag++;
        }, 3000)
    }

    tabSelectBgcl(stFlag)
    time()
    $(".time-tab>.tab-select").mouseenter(function () {
        var stTxtIndex = $(this).index();
        $('.time-picture ul>li').eq(stTxtIndex).css("display", "block").siblings().css("display", "none");
        $('.tab-select').css({ backgroundColor: '', color: '', fontSize: '' })
        tabSelectBgcl(stTxtIndex)
        stFlag = stTxtIndex + 1;
        clearInterval(timing);
    })
    $(".time-tab>.tab-select").mouseleave(function () {
        time()
    })

    ScrollReveal().reveal('section', {
        reset: true, //触发动画 true为多次触发 false 为触发一次
        origin: 'bottom',
        easing: 'ease-in-out',
        distance: '50px',
        opcity: 0.5,
    });
    // 提交动画
    [].slice.call(document.querySelectorAll('.progress-button')).forEach(function (bttn, pos) {
        new UIProgressButton(bttn, {
            callback: function (instance) {
                var progress = 0,
                    interval = setInterval(function () {
                        progress = Math.min(progress + Math.random() * 0.1, 1);
                        instance.setProgress(progress);

                        if (progress === 1) {
                            instance.stop(pos === 1 || pos === 3 ? -1 : 1);
                            clearInterval(interval);
                        }
                    }, 150);
            }
        });
    });

    let owl_wrapper = document.querySelector('.owl-wrapper');
    console.log(owl_wrapper)
    let solr = 0;
    let ser = null;
    ser = setInterval(() => {
        solr += 555;
        if (solr >= 3330) {
            solr = 0;
        }
        owl_wrapper.style.transform = 'translate3d(-' + solr + 'px, 0px, 0px)';
    }, 5000

    )



    $(".return").click(function () {
        layer.msg('正在返回首页，请稍等');
        setTimeout(function () {
            $("#inpnt").val("")
            $(".trial").css("display", "none")
        }, 3000)
    })


    //悬浮出现模块分部情况
    $(".code").mouseenter(function () {
        $(".codetooltip").show();
    })
    $(".code").mouseleave(function () {
        $(".codetooltip").hide();
    })

    // 页面放大功能
    // 添加元素节点
    let morePlateImg = {
        know_Web: '.know_Web img',
        teacher: '#person .portrait img'
    }
    // 循环元素节点
    for (let key in morePlateImg) {
        $(morePlateImg[key]).bind('click', function () {
            $(".page_magnify_img").fadeIn(1000)  // 淡入放大页面
            let imgEle = $(this).clone();   // 克隆点击时的图片，存入变量
            $('.magnify_img-box li').append(imgEle);    // 插入克隆的元素节点
        })
    }

    // 学习阶段path
    $.each($('.path-vessel .path-left li'), function (index) {
        $(this).mouseover(function () {
            $(this).addClass('cur')
                .siblings().removeClass('cur');
            $('.content').eq(index).show()
                .siblings('.content').hide();
        })
    })

    //点击后调用api接口
    $(".assistModule").click(function () {
        //调用聊天窗口
        _LAIGU('init');
        _LAIGU('showPanel');
    })

    //行业前景
    $("#industry .container .flexs .mudel").mouseenter(function () {
        $(this).addClass('hover').siblings().removeClass('hover')
    })

    var swiper = new Swiper('.swiper-container', {
        autoplay: true,
        speed: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: 2,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // prevButton: '.swiper-button-prev',
        // nextButton: '.swiper-button-next',
        onInit: function (swiper) {
            swiper.slides[2].className = "swiper-slide swiper-slide-active";
        },
        breakpoints: {
            668: {
                slidesPerView: 1,
            }
        },
    });

})


// 图片放大页面关闭事触发的事件
function colse(ele) {
    $(ele).fadeOut(1000); // 淡出放大页面
    setTimeout(() => {
        $('.page_magnify_img').hide()   // 延时隐藏放大页面
        $('.page_magnify_img img').remove();    // 关闭时删除克隆的元素节点
    }, 1000)
}


$("#md-tp").on('click', function () {
    $("#cover").css("display", "block")
    $(".md-image").show();
    setTimeout(function () {
        layer.msg('点击任意地方即可退出图片预览')
    }, 2000)
})

$("#cover").on('click', function () {
    $(this).css("display", "none");
    $(".md-image").hide();
})

