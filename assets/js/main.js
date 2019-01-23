// Main JS File. Will Probably break a lot of things.

// Initialize the Materialize JS from CDN 
// M.AutoInit();

// Main function to load when document is ready
$(document).ready(function(){

    var userTrain;
    var userDestination;
    var userDepartTime;
    var userFrequency;

    console.log("It Works!")

    // Test getting user input
    $("#user-add-train").click(function(){
        console.log("Click Registered!");
        userTrain = $("#input-trainLine").val().trim();
        userDestination = $("#input-destination").val().trim();
        userDepartTime = $("#input-departureTime").val().trim();
        userFrequency = $("#input-frequency").val().trim();

        console.log(userTrain); 
        console.log(userDestination); 
        console.log(userDepartTime); 
        console.log(userFrequency); 

    });


});