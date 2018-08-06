
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

});

window.onload = function () {
    $('.ParallaxContainer').css('opacity','1');
}

var output = document.getElementById('maincontainer');

var fidexLinkContainer = document.getElementById('fixed-link-container');

output.addEventListener("scroll", function() {
    var test = document.getElementById('Test2');
    var testImage = document.getElementById('test-image');

    if(isScrolledIntoView(test)){
        hideFixedContainer()
    } else {
        showFixedContainer()
    }
});

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
}

function hideFixedContainer() {
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
