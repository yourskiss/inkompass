
/* if fontAwesome cdn fail === start */
if ($("body").find("i.fa").css('fontFamily') !== 'FontAwesome' ) 
{
    $('head').append('<link href="styles/fontawesome.min.css" rel="stylesheet" />');
}
/* if fontAwesome cdn fail === end */



/* application open on header === start */
$("#openApplication").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    $("#findmarket").focus().val('')
    $("#applicationBox").stop(true).slideToggle(300);
    $("#openApplication p").stop(true).toggleClass("active");
});
$("#applicationBox").click(function(e) // stop closing on same div
{
    e.preventDefault();
    e.stopPropagation();
});
$('body').click(function(e) // close on click body
{    
    e.stopPropagation();
    if (e.target != $('#openApplication')  || e.target != $('#applicationBox')) 
    {
        $("#findmarket").val('');
        $("#applicationBox").slideUp(300);
        $("#openApplication p").removeClass("active");
    }
 
});
/* application open on header === end */


