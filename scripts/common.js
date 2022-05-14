/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* onLoad === start */
$(window).on('load', function() 
{
    /*  cookies container */
    setTimeout(siteusescookiesOpen, 3000); 
});
/* onLoad === end */

/* cookies === start */
function setCookie(cname,cvalue,exdays) 
{
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) 
{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') 
      {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) 
      {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
function siteusescookiesOpen() 
{ 
  if (getCookie("sitecookies") != "") 
  {
    // console.log(getCookie("sitecookies"));
  } 
  else 
  {
    $("#siteusescookies").slideDown(300); 
  }
} 
function acceptcookies()
{
    setCookie("sitecookies","inkompasscookies",1);
    $("#siteusescookies").slideUp(300);
}
/* cookies === end */

// header market search === start  
$('#findmarket').on('keypress', function (e) 
{
    if (e.keyCode == '13' || e.charCode == '13') return false;
});
$("#findmarket").keyup(function() 
{
    $('#listofmarket li').removeClass("firstresult");
    if ($(this).val() == '')
    {
        $('#listofmarket li:nth-of-type(1), #listofmarket li:nth-of-type(2), #listofmarket li:nth-of-type(3), #listofmarket li:nth-of-type(4), #listofmarket li:nth-of-type(5)').addClass('firstresult');
    }
    else 
    {
        var searchmarcket = $(this).val(),
        counter = 0;
        if (counter == 0) { $('#marketnotfound').hide(); }
        $('#listofmarket li').each(function() 
        {
            if ($(this).find("span").text().search(new RegExp(searchmarcket, "i")) < 0) 
            {
                if (counter == 0) $('#marketnotfound').show();
                else $('#marketnotfound').hide();
                $(this).removeClass("firstresult");
            } 
            else 
            {
                $(this).addClass("firstresult");
                counter++;
            }
        });
    }
});
// header market search === end  



/* header Menu === start */
$("#headerMenu").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    if($(this).hasClass("open"))
    {
        $("#headerMenu").stop(true).addClass("close").removeClass("open");
        $("#mainmenu").stop(true).slideDown(500);
    }
    else 
    {
        $("#headerMenu").stop(true).addClass("open").removeClass("close");
        $("#mainmenu").stop(true).slideUp(500);
    }

});
/* header Menu === end */

/* application open on header === start */
$("#headerApplication").hover(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    $("#applicationBox").stop(true).slideDown(300);
    $("#headerApplication").stop(true).addClass("active");
});
$(".marketserch").click(function(e) 
{
    e.preventDefault();
    e.stopPropagation();
});
/* application open on header === end */


// header fixed on scroll === start
$(window).scroll(function() 
{
    if ($(window).scrollTop() > 0) $('.header').addClass('headerFixed');
    else $('.header').removeClass('headerFixed');
});
// header fixed on scroll === end


$('body').click(function(e) // close on click body
{    
    e.stopPropagation();
    if (e.target != $('#headerApplication')  || e.target != $('.marketserch')) 
    {
        $("#applicationBox").slideUp(300);
        $("#headerApplication").removeClass("active");
    }

    if($(window).width() < 1255)
    {
        if (e.target != $('#headerMenu') || e.target != $('#mainmenu')) 
        {
            $("#headerMenu").addClass("open").removeClass("close");
            $("#mainmenu").slideUp(500);
        }
    }
});




/* ############################ home === start ############################ */
$(function($) 
{
    if($(".latestatHereSlider").length > 0)
    {
        $('.latestatHereSlider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 4000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '10px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 767,
                    settings: { centerPadding: '8px', arrows: false, slidesToShow: 2, slidesToScroll: 2 }
                },
                {
                    breakpoint: 479,
                    settings: { centerPadding: '6px', arrows: false, slidesToShow: 1, slidesToScroll: 1 }
                } 
            ]
        });
    }
});
/* ############################ home === end ############################ */





/* ############################ t&c and privacy === start ############################ */


$(window).scroll(function() 
{
    if($(".termleft").length > 0)
    {
        if($('.termleft ul').offset().top + $('.termleft ul').height() >= $('.share-nav').offset().top - 10)
        {
            $('.termleft ul').css('position', 'relative');
        }
        if($(document).scrollTop() + window.innerHeight < $('.share-nav').offset().top)
        {
            $('.termleft ul').css('position', 'fixed'); 
        }
    }
});


/* ############################ t&c and privacy === end ############################ */





/* ############################ testimonial === start ############################ */
$(function($) 
{
    if($(".intern_testimonial_container").length > 0)
    {
        $('.intern_testimonial_container').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 4000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '7px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 99999,
                    settings: "unslick"
                },
                {
                    breakpoint: 479,
                    settings: {  slidesToShow:1, slidesToScroll:1 }
                } 
            ]
        });
    }
    if($(".ourcoaches_container").length > 0)
    {
        $('.ourcoaches_container').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 4000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '7px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 99999,
                    settings: "unslick"
                },
                {
                    breakpoint: 479,
                    settings: {  slidesToShow:1, slidesToScroll:1 }
                } 
            ]
        });
    }
});

function testimonialvideo(popupType, iframesrc)
{
    if(popupType == 0) // video close 
    {
        $(".testimonial_video_close").fadeOut(600);
        $("#testimonial_video_iframe").fadeOut(300).attr('src', '');
    }
    else if(popupType == 1) // video open
    {
        $(".testimonial_video_close").fadeIn(600);
        $("#testimonial_video_iframe").fadeIn(300).attr("src", "https://www.youtube.com/embed/"+iframesrc+"?autoplay=1&loop=1&rel=0&showinfo=0&controls=0&playlist="+iframesrc);
    }
    else 
    {
        // nothing
    }
}
/* ############################ testimonial === end ############################ */




 



/* ############################ Faqs === start ############################ */
function expandAllFaqs(val)
    {
        if(val == 1) // application faqs
        {
            $("#faqsapplication aside").addClass("active");
            $("#faqsapplication section").addClass("selected").slideDown(300);
        }
        else if(val == 2) // selection faqs
        {
            $("#faqsselection aside").addClass("active");
            $("#faqsselection section").addClass("selected").slideDown(300);
        }
        else if(val == 3) // project work faqs
        {
            $("#faqsprojectwork aside").addClass("active");
            $("#faqsprojectwork section").addClass("selected").slideDown(300);
        }
        else 
        {
            // nothing
        }
}
function collapseAllFaqs(val)
{
        if(val == 1) // application faqs
        {
            $("#faqsapplication aside").removeClass("active");
            $("#faqsapplication section").removeClass("selected").slideUp(300);
        }
        else if(val == 2) // selection faqs
        {
            $("#faqsselection aside").removeClass("active");
            $("#faqsselection section").removeClass("selected").slideUp(300);
        }
        else if(val == 3) // project work faqs
        {
            $("#faqsprojectwork aside").removeClass("active");
            $("#faqsprojectwork section").removeClass("selected").slideUp(300);
        }
        else 
        {
            // nothing
        }
}
if($(".faqscontainer").length > 0)
{
    $(".faqscontainer ul li").click(function()
    {
        var getName = $(this).attr("data-id");
        $('html, body').animate({scrollTop: $("#" + getName + "_top").offset().top }, 1000);
    });
    $(".faqsbody aside").click(function()
    {
        $(".faqsbody aside").removeClass("active");
        $(".faqsbody section").removeClass("selected").slideUp(300);
        $(this).addClass("active");
        $(this).next("section").removeClass("selected").slideDown(300);
    });
    $('#FaqsSerchInput').on('keypress', function (e) 
    {
        if (e.keyCode == '13' || e.charCode == '13') return false;
    });
    $("#FaqsSerchInput").keyup(function() 
    {
        if($(this).val() == '')
        {
            $('#faqsnotfound').hide();
            $("#faqsclearsearch").fadeOut(300);
            $(".faqscontainer, .faqshead").fadeIn(300);
            $(".faqsholder .faqsbody aside").show().removeClass("active").removeClass("disabled");
            $(".faqsholder .faqsbody section").hide().removeClass("selected");
        }
        else 
        {
            $(".faqscontainer, .faqshead").fadeOut(300);
            $("#faqsclearsearch").fadeIn(300);
            var filter = $(this).val(),
            count = 0;
            if (count == 0) { $('#faqsnotfound').hide();  }
            $('.faqsholder .faqsbody aside').each(function() 
            {
                if ($(this).text().search(new RegExp(filter, "i")) < 0) 
                {
                    if (count == 0) $('#faqsnotfound').show();
                    else $('#faqsnotfound').hide();
                    $(this).hide().removeClass("active");
                    $(this).next("section").removeClass("selected").hide();
                } 
                else 
                {
                    $(this).show().addClass("active disabled");
                    $(this).next("section").addClass("selected").show();
                    count++;
                }
            });
        }  
    });
}
function clearSearch()
{
    $('#faqsnotfound').hide();
    $("#FaqsSerchInput").val('');
    $("#faqsclearsearch").fadeOut(300);
    $(".faqscontainer, .faqshead").fadeIn(300);
    $(".faqsholder .faqsbody aside").show().removeClass("active").removeClass("disabled");
    $(".faqsholder .faqsbody section").hide().removeClass("selected");
}
/* ############################ Faqs === end ############################ */








/* ############################ exploreopportunities === start ############################ */  

if($("#internshipTitle").length > 0)
{
    $('#internshipTitle').on('keypress', function (e) 
    {
        if (e.keyCode == '13' || e.charCode == '13') return false;
    });
    $("#internshipTitle").keyup(function() 
    {
        var filter = $(this).val(),
        count = 0;
        if (count == 0) { $('#internshipNotFound').hide(); }
        $('#internshipData tbody tr').each(function() 
        {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) 
            {
                $(this).hide();
                if (count == 0) $('#internshipNotFound').show();
                else $('#internshipNotFound').hide();
            } 
            else 
            {
                $(this).show();
                count++;
            }
        });
    });
}

if($("#show_more_country").length > 0)
{
    let counter, count;
    if($(window).width() > 1023){
        counter = 12;
        count = 12;
    }else if($(window).width() < 1023 && $(window).width() > 599){
        counter = 8;
        count = 8;
    }else if($(window).width() < 599 && $(window).width() > 479){
        counter = 6;
        count = 6;
    }else{
        counter = 4;
        count = 4;
    }
    $("#show_less_country").hide();
    $('#listofcountry li').slice(0, counter).show();
    $('#show_more_country').on('click', function (e) 
    {
        e.preventDefault();
        count = count+counter;
        $('#listofcountry li').slice(0, count).show();
        if(count > 45)
        {
            $("#show_more_country").hide();
            $("#show_less_country").show();
        }
    });
    $('#show_less_country').on('click', function () 
    {
        if($(window).width() > 1023) count = 12;
        else if($(window).width() < 1023 && $(window).width() > 599) count = 8;
        else if($(window).width() < 599 && $(window).width() > 479) count = 6;
        else count = 4;
        $("#show_more_country").show();
        $("#show_less_country").hide();
        $('#listofcountry li').slideUp(300);
        $('#listofcountry li').slice(0, counter).show(300);
    });
}

if($("#findcountry").length > 0)
{
    $('#findcountry').on('keypress', function (e) 
    {
        if (e.keyCode == '13' || e.charCode == '13') return false;
    });
    $("#findcountry").keyup(function() 
    {
        if($("#findcountry").val() == '')
        {
            $("#show_more_country").hide();
            $("#show_less_country").show();
        }
        else 
        {
            $("#show_more_country").hide();
            $("#show_less_country").hide();
            var filter = $(this).val(),
            count = 0;
            if (count == 0) { $('.countrynotfound').hide(); }
            $('#listofcountry li').each(function() 
            {
                if ($(this).find("p").text().search(new RegExp(filter, "i")) < 0) 
                {
                $(this).hide();
                if (count == 0) $('.countrynotfound').show();
                else $('.countrynotfound').hide();
                } 
                else 
                {
                $(this).show();
                count++;
                }
            });
        }
    });
}
/* ############################ exploreopportunities === end ############################ */







/* ############################ application === start ############################ */
$(function($) 
{
    if($(".lookbackwrap").length > 0)
    {
        $('.lookbackwrap').slick({ // lookback slider
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 4000,
            infinite: false,
            adaptiveHeight: true,
            centerMode: false,
            centerPadding: '8px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1023,
                    settings: {   slidesToShow: 2, slidesToScroll: 2 }
                },
                {
                    breakpoint: 599,
                    settings: {  slidesToShow: 1, slidesToScroll: 1 }
                } 
            ]
        });
    }
});

function openassessmentvideo(popupType, iframesrc)
{
    if(popupType == 0) // video close 
    {
        $(".assessment_close").fadeOut(600);
        $("#videoassessment").fadeOut(300).attr('src', '');
    }
    else if(popupType == 1) // video open
    {
        $(".assessment_close").fadeIn(600);
        $("#videoassessment").fadeIn(300).attr("src", "https://www.youtube.com/embed/"+iframesrc+"?autoplay=1&loop=1&rel=0&showinfo=0&controls=1&playlist="+iframesrc);
    }
    else 
    {
        // nothing
    }
}


if($(window).width() < 1023) // menu on mobile
{
    if($("#margket_nav_bar").length > 0)
    {
        $("#margket_nav_bar").click(function()
        {
            $(this).toggleClass('active');
            $("#margket_nav_menu").slideToggle(300);
        });
    }
    if($("#margket_nav_menu").length > 0)
    {
        $("#margket_nav_menu").click(function()
        {
            $("#margket_nav_bar").removeClass('active');
            $("#margket_nav_menu").slideUp(300);
        });
    }
}
$(window).scroll(function()  // menu fixed on scroll 
{
    if($(".market_navigation_wrap").length > 0)
    {
        var marketnavigation = $('.market_navigation_wrap'),
        scroll = $(window).scrollTop();
        if (scroll >= 100) marketnavigation.addClass('menufixed');
        else marketnavigation.removeClass('menufixed');
    }
});
function gotothe(tabID, sectionID, scrollDuration) // click to jump
{
    $("#margket_nav_menu li").removeClass('active');
    $("#"+tabID).addClass('active');
    $('html,body').animate({ scrollTop: $("#section_"+sectionID).offset().top}, scrollDuration);
}
function isOnScreen(elem)  // element is visible in viewport 
{
	if( elem.length == 0 ) {return;}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}
$(window).scroll(function()  // add remove active class by element position
{
    if($("#margket_nav_menu").length > 0)
    {
        $("#margket_nav_menu li").removeClass('active');
        if(isOnScreen($('#section_theprogram')) ) 
        { 
            $("#tab_theprogram").addClass('active');
        }	
        else if(isOnScreen($('#section_schedule')) ) 
        { 
            $("#tab_schedule").addClass('active');
        }
        else if(isOnScreen($('#section_assessment')) ) 
        { 
            $("#tab_assessment").addClass('active');
        }
        else if(isOnScreen($('#section_ourinterns')) ) 
        { 
            $("#tab_ourinterns").addClass('active');
        }
        else if(isOnScreen($('#section_ourcoaches')) ) 
        { 
            $("#tab_ourcoaches").addClass('active');
        }
        else if(isOnScreen($('#section_joinus')) ) 
        { 
            $("#tab_joinus").addClass('active');
        }
        else if(isOnScreen($('#section_careerquiz')) ) 
        { 
            $("#tab_careerquiz").addClass('active');
        }
        else 
        {
            // nothing
        }
    }
});
/* ############################ application === end ############################ */




/* ############################ our peoples Slider === start ############################ */
$(function($) 
{
    if($(".ourpeoplesSlider").length > 0)
    {
        $('.ourpeoplesSlider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 4000,
            infinite: false,
            adaptiveHeight: false,
            centerMode: false,
            centerPadding: '10px',
            initialSlide:0,
            responsive:
            [
                {
                    breakpoint: 767,
                    settings: { centerPadding: '8px', arrows: false, slidesToShow: 2, slidesToScroll: 2 }
                },
                {
                    breakpoint: 479,
                    settings: { centerPadding: '6px', arrows: false, slidesToShow: 1, slidesToScroll: 1 }
                } 
            ]
        });
    }
});
/* ############################ our peoples Slider === end ############################ */




/* ############################ job opening popup === start ############################ */
$(function($) 
{
    if($(".slimscroller").length > 0)
    {
        $('.slimscroller').slimScroll({ 
            width: "100%",
            height: "100%",
            size: "5px",
            color: "#14A0D2",
            position: "right",
            distance: "1px",
            start: "top",
            opacity: 0.8,
            alwaysVisible: false,
            disableFadeOut: true,
            railVisible: true,
            allowPageScroll: false,
            railColor: "#575756",
            railOpacity: 0.6,
            railDraggable: true,
            railClass: "slimscrollerRail",
            barClass: "slimscrollerBar",
            wrapperClass: "slimscrollerHolder",
            wheelStep: 10,
            touchScrollStep: 100,
            borderRadius: "5px",
            railBorderRadius: "5px"
        });
    }
});
function viewOpeningDetails(val) // post popup open
{
    $(".jobOpeningPopup").fadeIn(500);
    $("body").css("overflow","hidden");
}
function closeOpeningDetails() // post popup close
{
    $(".jobOpeningPopup").fadeOut(500);
    $("body").css("overflow","auto");
}
/* ############################ job opening popup === end  ############################ */




/* ############################ register form Validation === start ############################ */
function registerformValidation() 
{
    var emailReg = /( )|(^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$)/;
    if ($("#first_name").val() == "") 
    {
        $("#error_fn").show().text('Please Enter First Name');
        return false;
    }
    if ($("#last_name").val() == "") 
    {
        $("#error_ln").show().text('Please Enter Last Name');
        return false;
    }
    else if ($("#email_address").val() == "") 
    {
        $("#error_email").show().text('Please Enter Email Address');
        return false;
    }
    else if (!emailReg.test($("#email_address").val()))
    {
        $("#error_email").show().text('Please Enter Valid  Email Address');
        return false;
    }
    else if ($("#phone_number").val() == "") 
    {
        $("#error_phone").show().text('Please Enter Mobile Number');
        return false;
    }
    else if ($("#country_of_internship").val() == 0) 
    {
        $("#error_country").show().text('Please Select Country');
        return false;
    }
    else if ($("#leave_a_message").val() == "") 
    {
        $("#error_message").show().text('Please leave a message ');
        return false;
    }
    else 
    {
        $(".registerform").hide();
        $(".registerthankyou").show();
        return true;
    }
}
/* ############################ register form Validation === end ############################ */
