
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
    window.sr = ScrollReveal({ container: '.MainContainer', reset: true });
    sr.reveal('.reveal', { duration: 800 });
    // window.sr = ScrollReveal({ container: '.MainContainer', reset: false, scale: 0.1 });
    sr.reveal('.RevealAwaitTwo', { duration: 2000, reset: false, scale: 0.1 });
    sr.reveal('.RevealAwaitThree', { duration: 3000, reset: false, scale: 0.1 });
    sr.reveal('.RevealAwaitFour', { duration: 4000, reset: false, scale: 0.1 });


});

window.onload = function () {
    $('.ParallaxContainer').css('opacity','1');
}


function scrollToView(view) {
    view.scrollIntoView({behavior: "smooth", block: "start"});
}
