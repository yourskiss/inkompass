
/* if fontAwesome cdn fail === start */
if ($("body").find("i.fa").css('fontFamily') !== 'FontAwesome' ) 
{
    $('head').append('<link href="styles/fontawesome.min.css" rel="stylesheet" />');
}
/* if fontAwesome cdn fail === end */

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
$("#mainmenu").click(function(e)  
{
    e.preventDefault();
    e.stopPropagation();
});
$('body').click(function(e) // close on click body
{    
    e.preventDefault();
    e.stopPropagation();
    if (e.target != $('#headerMenu') || e.target != $('#mainmenu')) 
    {
        $("#headerMenu").addClass("open").removeClass("close");
        $("#mainmenu").slideUp(500);
    }
});
/* header Menu === end */


/* application open on header === start */
$("#headerApplication").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    $("#findmarket").focus().val('')
    $("#applicationBox").stop(true).slideToggle(300);
    $("#headerApplication").stop(true).toggleClass("active");
});
$("#applicationBox").click(function(e) // stop closing on same div
{
    e.preventDefault();
    e.stopPropagation();
});
$('body').click(function(e) // close on click body
{    
    e.stopPropagation();
    if (e.target != $('#headerApplication')  || e.target != $('#applicationBox')) 
    {
        $("#findmarket").val('');
        $("#applicationBox").slideUp(300);
        $("#headerApplication").removeClass("active");
    }
});
/* application open on header === end */


