var educationContainer = document.getElementById("education-container");
var experienceContainer = document.getElementById("experience-container");

// educationContainer.onclick = function() {
//     educationContainer.width = 100%;
// }
// experienceContainer.onclick = function() {
//     experienceContainer.width = 100%;
// }

$(document).ready(function(){
    $("#column-left").click(function(){
        $(this).css("transition", "width 2s, height 4s;");
        $(this).css("flex", "90%");
        $(this).css("max-width", "90%");
        $("#column-right").css("flex", "10%");
        $("#column-right").css("max-width", "10%");
        $("#column-right").css("height", "100%");
    });
    $("#column-right").click(function(){
        $(this).css("transition", "width 2s, height 4s;");
        $(this).css("flex", "90%");
        $(this).css("max-width", "90%");
        $("#column-left").css("flex", "10%");
        $("#column-left").css("max-width", "10%");
        $("#column-left").css("height", "100%");
    });
});




//div enlargement
