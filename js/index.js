

//scale

var alsoenlarge = true;

$(function(){
    if(isScalePossible()){
        $('body').css({overflow:'hidden'});
        $('#scalecontainer').css({position: 'relative', margin: 0});

        // Run scale function on start
        scaleSite();
        scaleSite();

        // Run scale function on browser resize
        $(window).resize(scaleSite);
    }
});

function scaleSite()
{
    var el = $("#textWrap");
    var containerw = el.innerWidth * 1; /* The width of the div, currently set to half of the window's width */
    var containerh = el.innerHeight * 1; /* The maximum possible height of the div; the recommend size for this is equal to or larger than the H of the element. */
    sitew = $('#scalecontainer').width();
    siteh = $('#scalecontainer').height();
    f = containerw/sitew;
    f = containerh/siteh<f?containerh/siteh:f;
    if(!alsoenlarge && f>1) f = 1;
    $('#scalecontainer').css({
        "-moz-transform"    : "scale("+f+") translate(-50%,0)",
        "-webkit-transform" : "scale("+f+") translate(-50%,0)",
        "-ms-transform"     : "scale("+f+") translate(-50%,0)",
        "-o-transform"      : "scale("+f+") translate(-50%,0)",
        "transform"         : "scale("+f+") translate(-50%,0)",
        "top"               : "0px"
    });
}

function isScalePossible()
{
    can = 'MozTransform' in document.body.style;
    if(!can) can = 'webkitTransform' in document.body.style;
    if(!can) can = 'msTransform' in document.body.style;
    if(!can) can = 'OTransform' in document.body.style;
    if(!can) can = 'transform' in document.body.style;
    if(!can) can = 'Transform' in document.body.style;
    return can;
}
// end scale
