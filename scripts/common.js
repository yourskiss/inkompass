
/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


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
    $("#findmarket").focus().val('')
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
        $("#findmarket").val('');
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