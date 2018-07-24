var isEducationExpanded = false;
var isExperienceExpanded = false;

var isOriginalLayout = true;

$(document).ready(function(){
    $("#experience-container").click(function(){
        if(!isExperienceExpanded){
            showExperience();
            isExperienceExpanded = true;
        }
        isOriginalLayout = false;
    });
    $("#education-container").click(function(){
        if(!isEducationExpanded){
            showEducation();
            isEducationExpanded = true;
        }
        isOriginalLayout = false;
    });
    $("#education-text").click(function(){
        showEducation();
        isEducationExpanded = false;
        isExperienceExpanded = true;
        isOriginalLayout = false;
    });
    $("#experience-text").click(function(){
        showExperience();
        isEducationExpanded = true;
        isExperienceExpanded = false;
        isOriginalLayout = false;
    });
});

function showExperience() {
    scrollToView();
    $("#experience-container").css("width", "100%");
    $("#experience-container").css("height", "200%");
    $("#education-container").css("width", "0%");
    $("#education-container").css("height", "200%");
    $("#overlay-experience").css("opacity","1");
    if(isOriginalLayout){
        $("#overlay-education").css("opacity","0");
    }
    $(".text-overlay").css("top", "0");
    $("#education-text").css("opacity", "1");
    if(isOriginalLayout){
        $("#experience-text").css("opacity", "0");
    }
    $("#overlay-education").css("overflow", "hidden");
    $("#overlay-education").css("padding-right", "0px");
    $("#overlay-education").css("padding-left", "0px");
    $("#overlay-experience").css("cursor", "default");
    $("#overlay-education").css("cursor", "pointer");
    $(".next-text").css("visibility", "visible");
}

function showEducation() {
    scrollToView();
    $("#education-container").css("width", "100%");
    $("#education-container").css("height", "200%");
    $("#experience-container").css("width", "0%");
    $("#experience-container").css("height", "200%");
    $("#overlay-education").css("opacity","1");
    if(isOriginalLayout){
        $("#overlay-experience").css("opacity","0");
    }
    $(".text-overlay").css("top", "0");
    $("#experience-text").css("opacity", "1");
    if(isOriginalLayout){
        $("#education-text").css("opacity", "0");
    }
    $("#overlay-education").css("padding", "20px");
    $("#overlay-education").css("cursor", "default");
    $("#overlay-experience").css("cursor", "pointer");
    $(".next-text").css("visibility", "visible");
}

var experienceContainer = document.getElementById("experience-container");

function scrollToView() {
    var posArray = experienceContainer.getBoundingClientRect();
    var currentScrollPosition = document.documentElement.scrollTop;

    $("html, body").animate({scrollTop: posArray.top + currentScrollPosition}, "300px");
}

function paralaxImages() {
    // $(".container").css("transform", "translateZ(-1px) scale(2)");
}
