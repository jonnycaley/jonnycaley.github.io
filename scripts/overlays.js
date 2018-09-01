$(document).ready(function(){



    $('#DivHover1').click(function(){
        toggleOverlay1();
    });

    // $('#DivHover1').hover(function() {
    //     if(!isOverlayOpened1){
    //         showOverlay1();
    //     }
    // }, function() {
    //     if(!isOverlayOpened1){
    //         hideOverlay1();
    //     }
    // });



    $('#DivHover2').click(function(){
        toggleOverlay2();
    });

    $('#DivHover2').hover(function() {
        if(!isOverlayOpened2){
            showOverlay2();
        }
    }, function() {
        if(!isOverlayOpened2){
            hideOverlay2();
        }
    });



    $('#DivHover3').click(function(){
        toggleOverlay3();
    });

    $('#DivHover3').hover(function() {
        if(!isOverlayOpened3){
            showOverlay3();
        }
    }, function() {
        if(!isOverlayOpened3){
            hideOverlay3();
        }
    });



    $('#DivHover4').click(function(){
        toggleOverlay4();
    });

    $('#DivHover4').hover(function() {
        if(!isOverlayOpened4){
            showOverlay4();
        }
    }, function() {
        if(!isOverlayOpened4){
            hideOverlay4();
        }
    });




    $('#DivHover5').click(function(){
        toggleOverlay5();
    });

    $('#DivHover5').hover(function() {
        if(!isOverlayOpened5){
            showOverlay5();
        }
    }, function() {
        if(!isOverlayOpened5){
            hideOverlay5();
        }
    });
});

var isOverlayOpened1 = false;
var isOverlayOpened2 = false;
var isOverlayOpened3 = false;
var isOverlayOpened4 = false;
var isOverlayOpened5 = false;


function toggleOverlay1() {
    alert('Toggling overlay')
    if(!isOverlayOpened1) {
        showOverlay1();
        $('#SpanText1').text("read less");
        isOverlayOpened1 = true;
    } else {
        hideOverlay1();
        $('#SpanText1').text("read more");
        isOverlayOpened1 = false;
    }
}

if ($(window).width() > 750) {
    moveBackground();
}


function toggleOverlay2() {
    if(!isOverlayOpened2) {
        showOverlay2();
        $('#SpanText2').text("read less");
        isOverlayOpened2 = true;
    } else {
        hideOverlay2();
        $('#SpanText2').text("read more");
        isOverlayOpened2 = false;
    }
}


function toggleOverlay3() {
    if(!isOverlayOpened3) {
        showOverlay3();
        $('#SpanText3').text("read less");
        isOverlayOpened3 = true;
    } else {
        hideOverlay3();
        $('#SpanText3').text("read more");
        isOverlayOpened3 = false;
    }
}



function toggleOverlay4() {
    if(!isOverlayOpened4) {
        showOverlay4();
        $('#SpanText4').text("read less");
        isOverlayOpened4 = true;
    } else {
        hideOverlay4();
        $('#SpanText4').text("read more");
        isOverlayOpened4 = false;
    }
}


function toggleOverlay5() {
    if(!isOverlayOpened5) {
        showOverlay5();
        $('#SpanText5').text("read less");
        isOverlayOpened5 = true;
    } else {
        hideOverlay5();
        $('#SpanText5').text("read more");

        isOverlayOpened5 = false;
    }
}

var opacity = '0.8'



function showOverlay1() {
    $('#overlay1').css('opacity', opacity);
    $('#content-overlay-1').css('opacity', opacity);
}

function hideOverlay1() {
    $('#overlay1').css('opacity', '0');
    $('#content-overlay-1').css('opacity', '0');
}



function showOverlay2() {
    $('#overlay2').css('opacity', opacity);
    $('#content-overlay-2').css('opacity', opacity);
}

function hideOverlay2() {
    $('#overlay2').css('opacity', '0');
    $('#content-overlay-2').css('opacity', '0');
}



function showOverlay3() {
    $('#overlay3').css('opacity', opacity);
    $('#content-overlay-3').css('opacity', opacity);
}

function hideOverlay3() {
    $('#overlay3').css('opacity', '0');
    $('#content-overlay-3').css('opacity', '0');
}



function showOverlay4() {
    $('#overlay4').css('opacity', opacity);
    $('#content-overlay-4').css('opacity', opacity);
}

function hideOverlay4() {
    $('#overlay4').css('opacity', '0');
    $('#content-overlay-4').css('opacity', '0');
}



function showOverlay5() {
    $('#overlay5').css('opacity', opacity);
    $('#content-overlay-5').css('opacity', opacity);
}

function hideOverlay5() {
    $('#overlay5').css('opacity', '0');
    $('#content-overlay-5').css('opacity', '0');
}
