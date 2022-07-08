/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* onLoad === start */
$(window).on('load', function() 
{
     
});
/* onLoad === end */


// maainmenu


/* dropdown header menu === start */
$(".navigation .wrapper ul li.megamenu a").click(function()
{
    if($(this).parent().hasClass('active'))
    {
        $(this).next(".dropdownmenu").slideUp(400);
        $(this).parent().removeClass("active");
        $(this).find("i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    }
    else
    {
        $(".dropdownmenu").slideUp(400);
        $(".navigation .wrapper ul li.megamenu").removeClass("active");
        $(".navigation .wrapper ul li.megamenu a i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
        $(this).next(".dropdownmenu").slideDown(400);
        $(this).parent().addClass("active");
        $(this).find("i.fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    }
});

$(".dropdownclose").click(function()
{
    $(".dropdownmenu").slideUp(400);
    $(".navigation .wrapper ul li.megamenu").removeClass("active");
    $(".navigation .wrapper ul li.megamenu a i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
});
/* dropdown header menu === end */



/* footer menu === start */
$(".footer .wrapper .footerright ul li h2").click(function()
{
    if($(window).width() < 1255)
    {
        if($(this).hasClass('active'))
        {
            $(".footer .wrapper .footerright ul li ul").slideUp(300);
            $(".footer .wrapper .footerright ul li h2").removeClass("active");
        }
        else 
        {
            $(".footer .wrapper .footerright ul li ul").slideUp(300);
            $(".footer .wrapper .footerright ul li h2").removeClass("active");
    
            $(this).addClass("active");
            $(this).next("ul").slideDown(300);
        }
    }
});
/* footer menu === end */

/* mobile main menu === start */
$("#mainmenu").click(function()
{
    $("#mobilemenuBG").fadeIn(500);
    $("#mobilemenu").fadeIn(500);
    $("body").css("overflow","hidden");
});
$("#mobilemenuBG, #menuobileClose").click(function()
{
    $("#mobilemenuBG").fadeOut(500);
    $("#mobilemenu").fadeOut(500);
    $("body").css("overflow","visible");
});

$(".mobilemenu ul li h2").click(function()
{
    if($(this).hasClass('active'))
    {
        $(".mobilemenu ul li ul").slideUp(300);
        $(".mobilemenu ul li h2").removeClass("active");
        $(".mobilemenu ul li h2 i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    }
    else 
    {
        $(".mobilemenu ul li ul").slideUp(300);
        $(".mobilemenu ul li h2").removeClass("active");
        $(".mobilemenu ul li h2 i.fa").removeClass("fa-angle-up").addClass("fa-angle-down");

        $(this).addClass("active");
        $(this).find("i.fa").removeClass("fa-angle-down").addClass("fa-angle-up");
        $(this).next("ul").slideDown(300);
    }
});
/* mobile main menu === end */




/* quick link menu === start */
$("#quickmenu").click(function()
{
    $("#quicklinkToggle").hide().addClass("active");
    $("#quicklinkBG").fadeIn(500);
    $("#quicklink").fadeIn(500);
});
$("#qlMobileClose").click(function()
{
    $("#quicklinkToggle").hide().removeClass("active");
    $("#quicklinkBG").fadeOut(500);
    $("#quicklink").fadeOut(500);
});
$("#quicklinkToggle").click(function()
{
    $("#quicklinkToggle").addClass("active")
    $("#quicklinkBG").fadeIn(500);
    $("#quicklink").animate({right: "0"});
});
$("#quicklinkBG").click(function()
{
    $("#quicklinkToggle").removeClass("active")
    $("#quicklinkBG").fadeOut(500);
    if($(window).width() > 1565)
    {
        $("#quicklink").animate({ right: "-248px" });
    }
    else if($(window).width() < 1565 && $(window).width() > 1255)
    {
        $("#quicklink").animate({ right: "-210px" });
    }
    else 
    {
        // 
        $("#quicklink").fadeOut(500);
    }
});
$(document).scroll(function() 
{
    var heightlocation = $(this).scrollTop();
    if(!$("#quicklinkToggle").hasClass('active'))
    {
        if (heightlocation > 350) 
        {
          $('#quicklinkToggle').css('opacity','1');
        } 
        else 
        {
            $('#quicklinkToggle').css('opacity','0');
        }
    }
});
/* quick link menu === end */





/* ############################ sliders === start ############################ */
$(function($) 
{
    if($("#bannerhome").length > 0)
    {
        // homepage main banner
        $('.bannerhomeslider').slick({
            slidesToShow:1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 767,
                    settings: { arrows: true  }
                }
            ]
        });
    }

    if($(".knowledgeresources").length > 0)
    {
        // homepage knowledg slider
        $('.knowledgeresourcesslider').slick({
            slidesToShow:3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '10px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 767,
                    settings: { arrows: true  }
                }
            ]
        });
    }
    
    if($(".satisfactionwrap").length > 0)
    {
        // homepage satisfaction slider
        $('.satisfactionSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            fade: true,
            autoplay: false,
            asNavFor: '.satisfactionNav'
        });
        $('.satisfactionNav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.satisfactionSlider',
            dots: true,
            arrows:true,
            centerMode: true,
            autoplay: false,
            centerPadding: '10px',
            focusOnSelect: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 559,
                    settings: {
                        vertical: false,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                        vertical: false,
                        slidesToShow: 2,
                    }
                }
            ]
        });
    }
});
/* ############################ sliders === end ############################ */



/* ############################ satisfaction  video === start ############################ */
function satisfactionShowVideo(iframesrc) // video show
{
    $(".satisfactionVideo").fadeIn(600);
    $(".satisfactionVideo iframe").attr("src", "https://www.youtube.com/embed/"+iframesrc+"?autoplay=1&mute=0&loop=1&rel=0&showinfo=0&controls=0&modestbranding=1&playsinline=1&playlist="+iframesrc);
}
function satisfactionHideVideo() // video close 
{
    $(".satisfactionVideo").fadeOut(600);
    $(".satisfactionVideo iframe").attr('src', '');
}
/* ############################ satisfaction  video === end ############################ */