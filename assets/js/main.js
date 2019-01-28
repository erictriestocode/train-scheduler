// Main JS File. Will Probably break a lot of things.

// initialize firebase
var config = {
    apiKey: "AIzaSyADAIXlWljzdlEnM6hO3dZcAvtVeuix2pE",
    authDomain: "train-time-f36f0.firebaseapp.com",
    databaseURL: "https://train-time-f36f0.firebaseio.com",
    projectId: "train-time-f36f0",
    storageBucket: "train-time-f36f0.appspot.com",
    messagingSenderId: "965445250067"
};

firebase.initializeApp(config);

// Main function to load when document is ready
$(document).ready(function () {

    // Input Variables
    var userTrain;
    var userDestination;
    var userDepartTime;
    var userFrequency;
    var userTrainFull;
    var currentTime;
    // Firebase Variable for Use
    var trainSchedule = firebase.database();

    // Initialize the Materialize JS from CDN 
    M.AutoInit();

    console.log("It Works!");

    // Test getting user input
    $("#user-add-train").click(function () {
        event.preventDefault();
        console.log("Click Registered!");
        // Grab User input and store in appropriate 
        userTrain = $("#input-trainLine").val().trim();
        userDestination = $("#input-destination").val().trim();
        userDepartTime = $("#input-departureTime").val().trim();
        userFrequency = $("#input-frequency").val().trim();
        // needs to be object not array like first mentioned
        userTrainFull = {
            train: userTrain, 
            destination: userDestination, 
            departure: userDepartTime, 
            frequency: userFrequency,
        };

        console.log(userTrain);
        console.log(userDestination);
        console.log(userDepartTime);
        console.log(userFrequency);

        // will relocate after getting time
        pushToDom(userTrain, userDestination, userDepartTime, userFrequency, currentTime);

        trainSchedule.ref().push({
            train: userTrain,
            destination: userDestination,
            departure: userDepartTime,
            frequency: userFrequency
        });
    });

  

    function pushToDom(a, b, c, d, e) {

        // Testing
        console.log(a + " function!");
        console.log(b + " function!");
        console.log(c + " function!");
        console.log(d + " function!");


        $("<tr>").appendTo("#push-here");
        $("<td>" + a + "</td>").appendTo("#push-here");
        $("<td>" + b + "</td>").appendTo("#push-here");
        $("<td>" + d + "</td>").appendTo("#push-here");
        $("<td>" + c + "</td>").appendTo("#push-here");
        $("<td>" + e + "</td>").appendTo("#push-here");
        $("</tr>").appendTo("#push-here");


    };



    // honestly taking a lot of th is from 7-21 train example from class(that we didnt go over)
    currentTime = moment();
    console.log(currentTime);
    
    var firstTime = "03:30";

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


});