// Main JS File. Will Probably break a lot of things.



// Main function to load when document is ready
$(document).ready(function () {

    var userTrain;
    var userDestination;
    var userDepartTime;
    var userFrequency;
    var userTrainFull;

    // Initialize the Materialize JS from CDN 
    M.AutoInit();

    console.log("It Works!");

    // Test getting user input
    $("#user-add-train").click(function () {
        console.log("Click Registered!");
        userTrain = $("#input-trainLine").val().trim();
        userDestination = $("#input-destination").val().trim();
        userDepartTime = $("#input-departureTime").val().trim();
        userFrequency = $("#input-frequency").val().trim();
        userTrainFull = [userTrain,userDestination,userDepartTime,userFrequency];

        console.log(userTrain);
        console.log(userDestination);
        console.log(userDepartTime);
        console.log(userFrequency);


        


        // will relocate after getting time
        // pushToDom(userTrain,userDestination,userDepartTime,userFrequency);

    });

    function pushToDom(a,b,c,d){
        console.log(a + " function!");
        console.log(b + " function!");
        console.log(c + " function!");
        console.log(d + " function!");
        // $("#push-here").append()

        // // throw into for loop
        // $("<tr>").appendTo("#push-here");
        // $("<td>test</td>").appendTo("#push-here");
        // $("</tr>").appendTo("#push-here");

    };

    // Calculate time with MotionJS
    // function calculateMins(){
    // MotionJS goes here
    // Take current time minus current time
    // };











});