//crystal variables
var blueCrystal = 0;
var redCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;


var targetScore = 0;
var myScore = 0;

var wins = 0;
var losses = 0;






//Player Will guess the answer



var startGame = function () {

    myScore = 0;
    //Generate a random number for the user to get in the beginning 19 - 120
    // each crystal will have new hidden value
    //Player Shown a random number at the start of the game
    targetScore = Math.floor(Math.random() * (120 - 19) + 19);


    //crystal Values
    blueCrystal = Math.floor(Math.random() * (12) + 1);


    redCrystal = Math.floor(Math.random() * (12) + 1);


    yellowCrystal = Math.floor(Math.random() * (12) + 1);


    greenCrystal = Math.floor(Math.random() * (12) + 1);

    console.log(blueCrystal);
    console.log(redCrystal);
    console.log(yellowCrystal);
    console.log(greenCrystal);
    console.log(targetScore);

    $("#targetScore").html(targetScore);
    $("#myScore").html(myScore);







}

startGame();

//player wins IF their total score matches the random number from beginning of the game.
//player loses IF their score goes above random Number
//game restarts whenever the player wins or loses
//when game starts again new random number is chosen
// show number of games player wins and loses

console.log(myScore);
console.log(targetScore);
console.log(losses);
console.log(wins);

var winCheck = function () {
    if (myScore > targetScore) {
        losses++;
        $("#losses").html("Losses: " +losses);
        startGame();
    }
    else if (myScore === targetScore) {
        wins++;
        $("#wins").html("Wins: " + wins);
        startGame();
    }
}
winCheck();

    


//Display Crystals as buttons on the page
//Player clicks a crystal and it will add a specific amount of points to players total score
//Amount added will be hidden from crystal click - each crystal adds 1 - 12 value
//update players score when crystal is clicked

$("#blue").click(function() {
    myScore = myScore + blueCrystal;
    $("#myScore").html(myScore);
    winCheck();

});

$("#green").click(function() {

    myScore = myScore + redCrystal;
    $("#myScore").html(myScore);
    winCheck();

});

$("#yellow").click(function() {
    myScore = myScore + yellowCrystal;
    $("#myScore").html(myScore);
    winCheck();

});

$("#red").click(function() {
    myScore = myScore + greenCrystal;
    $("#myScore").html(myScore);
    winCheck();

});


























