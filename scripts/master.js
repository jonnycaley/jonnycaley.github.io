
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

});

var toolbarButton = document.getElementById("toolbar-button");


function toggleHamburger() {
    if(toolbarButton.classList.contains("is-active")){
        $(".hamburger").removeClass("is-active");
        $("#ToolbarExpandPage").animate({height: '0vh'});
    } else {
        $(".hamburger").addClass("is-active");
        $("#ToolbarExpandPage").animate({height: '100vh'});
    }
}

window.onload = function () {
    $('.ParallaxContainer').css('opacity','1');
}

var output = document.getElementById('maincontainer');

var fidexLinkContainer = document.getElementById('fixed-link-container');

var toolbar = document.getElementById('ToolbarContainer');

var contentContainer = document.getElementById('ContentContainerId');


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

});

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

moveBackground();
