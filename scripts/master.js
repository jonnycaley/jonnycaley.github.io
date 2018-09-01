
var experienceContainer = document.getElementById("ExperienceContent");
var educationContainer = document.getElementById("EducationContent");
var aboutContainer = document.getElementById("AboutContent");

$(document).ready(function(){
    $("#AboutText").click(function(){
        scrollToView(aboutContainer);
    });
    $("#ExperienceText").click(function(){
        scrollToView(experienceContainer);
    });
    $("#EducationText").click(function(){
        scrollToView(educationContainer);
    });

    $("#ExperienceTextToolbar").click(function(){
        closeToolbar();
        scrollToView(experienceContainer);
    });
    $("#EducationTextToolbar").click(function(){
        closeToolbar();
        scrollToView(educationContainer);
    });

    $("#fixed-container-experience").click(function(){
        scrollToView(experienceContainer);
    });
    $("#fixed-container-education").click(function(){
        scrollToView(educationContainer);
    });

    window.sr = ScrollReveal({ container: '.MainContainer', reset: true });
    sr.reveal('.reveal', { duration: 2000 });
    // window.sr = ScrollReveal({ container: '.MainContainer', reset: false, scale: 0.1 });
    sr.reveal('.RevealAwaitTwo', { duration: 3000, reset: false, scale: 0.1 });
    sr.reveal('.RevealAwaitThree', { duration: 4000, reset: false, scale: 0.1 });
    sr.reveal('.RevealAwaitFour', { duration: 5000, reset: false, scale: 0.1 });

    $(".hamburger").click(function(){
        toggleHamburger();
    });

    $('#DivHover1').click(function(){
        toggleOverlay1();
    });

    $('#DivHover1').hover(function() {
        if(!isOverlayOpened1){
            showOverlay1();
        }
    }, function() {
        if(!isOverlayOpened1){
            hideOverlay1();
        }
    });



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

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

var toolbarButton = document.getElementById("toolbar-button");

function toggleHamburger() {
    if(toolbarButton.classList.contains("is-active")){
        closeToolbar();
        // $(".MainContainer").css('overflow-y','scroll');
        // $(".ParallaxContainer").css('overflow-y','scroll');

    } else {
        openToolbar();
        // $(".MainContainer").css('overflow-y','hidden');
        // $(".ParallaxContainer").css('overflow-y','hidden');
    }
}

function closeToolbar() {
    $(".hamburger").removeClass("is-active");
    $("#ToolbarExpandPage").animate({height: '0vh'});
}
function openToolbar() {
    $(".hamburger").addClass("is-active");
    $("#ToolbarExpandPage").animate({height: '100vh'});
}



window.onload = function () {
    $('.ParallaxContainer').css('opacity','1');
}

var output = document.getElementById('maincontainer');

var fidexLinkContainer = document.getElementById('fixed-link-container');

var toolbar = document.getElementById('ToolbarContainer');

var contentContainer = document.getElementById('ContentContainerId');

var gear1 = document.querySelector(".gear1");
var gear2 = document.querySelector(".gear2");

output.addEventListener("scroll", function() {

    $('.PageContentContainer').each(function(){
        $(this).css('margin-top', - $(window).scrollTop() / parseInt($(this).attr('scrollSpeed')));
    });

    if($(this).scrollTop() < 5){
        hideFixedContainer()
        showParallaxContainer()
    } else {
        showFixedContainer()
        hideParallaxContainer()
    }

    if(getPositionOfContent() < 1){
        console.log('white');
        $('#ToolbarContainer').css('background-color','white');
    } else {
        console.log('none');
        $('#ToolbarContainer').css('background-color','transparent');
    }

    if (getPositionOfEducation() < 1){
        $('#middle-text').text("Education");
    } else {
        $('#middle-text').text("Experience");
    }

    if(getPositionOfExperience() < 1){
        $('#middle-text').css('opacity','0.05');
    } else {
        $('#middle-text').css('opacity','0');
    }

    gear1.style.transform = "rotate(" + ($(this).scrollTop()) + "deg)";
    gear2.style.transform = "rotate(-" + ($(this).scrollTop()) + "deg)";


});

function getPositionOfExperience() {
    var scrollTop = $(window).scrollTop(),
    elementOffset = $('#ExperienceContent').offset().top,
    distance      = (elementOffset - scrollTop);
    return distance
}
function getPositionOfEducation() {
    var scrollTop = $(window).scrollTop(),
    elementOffset = $('#EducationContent').offset().top,
    distance      = (elementOffset - scrollTop);
    return distance
}

function getPositionOfContent() {
    var scrollTop = $(window).scrollTop(),
    elementOffset = $('#ContentContainerId').offset().top,
    distance      = (elementOffset - scrollTop);
    return distance
}

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


var state = 0;

function showFixedContainer() {

    fidexLinkContainer.style.visibility = "visible";

    $("#fixed-container-experience").addClass("animated fadeInRight");
    $("#fixed-container-education").addClass("animated fadeInRight");
    $("#fixed-container-github").addClass("animated fadeInRight");
    $("#fixed-container-hotmail").addClass("animated fadeInRight");
    $("#fixed-container-linkedin").addClass("animated fadeInRight");

    $("#fixed-container-experience").removeClass("fadeOutRight");
    $("#fixed-container-education").removeClass("fadeOutRight");
    $("#fixed-container-github").removeClass("fadeOutRight");
    $("#fixed-container-hotmail").removeClass("fadeOutRight");
    $("#fixed-container-linkedin").removeClass("fadeOutRight");

    state = 1;

}

function showParallaxContainer() {
    setTimeout(function(){

        if(state == 0){

            $("#ExperienceText").addClass("animated fadeInDown");
            $("#EducationText").addClass("animated fadeInDown");
            $("#parallax-container-github").addClass("animated fadeInDown");
            $("#parallax-container-email").addClass("animated fadeInDown");
            $("#parallax-container-linkedin").addClass("animated fadeInDown");

            $("#ExperienceText").removeClass("fadeOutUp");
            $("#EducationText").removeClass("fadeOutUp");
            $("#parallax-container-github").removeClass("fadeOutUp");
            $("#parallax-container-email").removeClass("fadeOutUp");
            $("#parallax-container-linkedin").removeClass("fadeOutUp");
        }
    }, 500);
}

function hideParallaxContainer() {

    $("#ExperienceText").removeClass("fadeInDown");
    $("#EducationText").removeClass("fadeInDown");
    $("#parallax-container-github").removeClass("fadeInDown");
    $("#parallax-container-email").removeClass("fadeInDown");
    $("#parallax-container-linkedin").removeClass("fadeInDown");

    $("#ExperienceText").addClass("animated fadeOutUp");
    $("#EducationText").addClass("animated fadeOutUp");
    $("#parallax-container-github").addClass("animated fadeOutUp");
    $("#parallax-container-email").addClass("animated fadeOutUp");
    $("#parallax-container-linkedin").addClass("animated fadeOutUp");
}


function hideFixedContainer() {

    state = 0;
    $("#fixed-container-experience").removeClass("fadeInRight");
    $("#fixed-container-education").removeClass("fadeInRight");
    $("#fixed-container-github").removeClass("fadeInRight");
    $("#fixed-container-hotmail").removeClass("fadeInRight");
    $("#fixed-container-linkedin").removeClass("fadeInRight");

    $("#fixed-container-experience").addClass("fadeOutRight");
    $("#fixed-container-education").addClass("fadeOutRight");
    $("#fixed-container-github").addClass("fadeOutRight");
    $("#fixed-container-hotmail").addClass("fadeOutRight");
    $("#fixed-container-linkedin").addClass("fadeOutRight");
    stateChange()
}

function stateChange() { //hides the fixed layout to prevent overlapping of links - needs the delay to allow the animation then checks if the state is still valid for it to collapse after the time
    setTimeout(function(){
        if(state == 0){
            fidexLinkContainer.style.visibility = "collapse";
        }
    }, 1000);
}

function scrollToView(view) {
    view.scrollIntoView({behavior: "smooth", block: "start"});
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 30;

function moveBackground() {
    x += 3*(lFollowX - x) * friction;
    y += 3*(lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) translateZ(-1px) scale(2.1)';

    $('.ParallaxContainer').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

if ($(window).width() > 750) {
    moveBackground();
}


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
