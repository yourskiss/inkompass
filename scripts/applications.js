// opening popup === start 
function viewOpeningDetails(val)
{
    $(".jobOpeningPopup").fadeIn(500);
    $("body").css("overflow","hidden");
}
function closeOpeningDetails()
{
    $(".jobOpeningPopup").fadeOut(500);
    $("body").css("overflow","auto");
}
// opening popup ===  end 


// menu ==== start
if($(window).width() < 1023)
{
    $("#margket_nav_bar").click(function()
    {
        $(this).toggleClass('active');
        $("#margket_nav_menu").slideToggle(300);
    });
    $("#margket_nav_menu").click(function()
    {
        $("#margket_nav_bar").removeClass('active');
        $("#margket_nav_menu").slideUp(300);
    });
}
// menu ==== end

// menu fixed on scroll === start
$(window).scroll(function() 
{
    var marketnavigation = $('.market_navigation_wrap'),
    scroll = $(window).scrollTop();
    if (scroll >= 100) marketnavigation.addClass('menufixed');
    else marketnavigation.removeClass('menufixed');
});
// menu fixed on scroll === end


// click to jump ==== start
function gotothe(tabID, sectionID, scrollDuration)
{
    $("#margket_nav_menu li").removeClass('active');
    $("#"+tabID).addClass('active');
    $('html,body').animate({ scrollTop: $("#section_"+sectionID).offset().top}, scrollDuration);
}
// click to jump ==== end


// element is visible in viewport === start
function isOnScreen(elem) {

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
// element is visible in viewport === end
 
// add remove active class by element position === start
$(window).scroll(function() 
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
});
// add remove active class by element position === start






// slick === start
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
            settings: { arrows: false, slidesToShow: 2, slidesToScroll: 2 }
        },
        {
            breakpoint: 479,
            settings: { centerPadding: '8px', arrows: false, slidesToShow: 1, slidesToScroll: 1 }
        } 
    ]
});
// slick === end

// lookbackwrap === start
$('.lookbackwrap').slick({
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
// lookbackwrap === end



// assessment video === start
function openassessmentvideo(popupType, iframesrc)
{
    if(popupType == 0) // close 
    {
        $(".assessment_close").fadeOut(600);
        $("#videoassessment").fadeOut(300).attr('src', '');
    }
    else if(popupType == 1) // open
    {
        $(".assessment_close").fadeIn(600);
        $("#videoassessment").fadeIn(300).attr("src", "https://www.youtube.com/embed/"+iframesrc+"?autoplay=1&loop=1&rel=0&showinfo=0&controls=1&playlist="+iframesrc);
    }
    else 
    {
        // nothing
    }
}
// assessment video === end



// register form Validation === start
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
// register form Validation === end


