var allCoordinates = [];
var userAnswers = [];
var letterSquare = ["a","b","c","d","e","f","g","h"];
var nextCoordinate = -1;
var rightAnswers = 0;


var started = false;
startTheGame ();

function startTheGame(){
    $("h1").on("click", function(){
        if (!started){
            countdown();
            started = true;}
    })}


function countdown() {
    $("h1").text("3");

    setTimeout(function() {
        $("h1").text("2");
        setTimeout(function() {
            $("h1").text("1");
            setTimeout(function() {
                newCoordinate();
            }, 1000);
        }, 1000);
    }, 1000);
}


function newCoordinate (){
    nextCoordinate++;

    var randomNumber = Math.floor (Math.random()*8)+1;

    var randomNumberTwo = Math.floor (Math.random()*8);
    var randomLetter = letterSquare [randomNumberTwo];

    var randomCoordinate = randomLetter+randomNumber;

    console.log (randomCoordinate);
    allCoordinates.push (randomCoordinate)

    $("h1").text (randomCoordinate);
}

//USER CLICK
$(".square").on("click", function(event){

    var userClickedSquare = this.id;
    userAnswers.push (userClickedSquare);
    checkAnswer ();
    $("#"+userClickedSquare).addClass("pressed");
    setTimeout(function (){
    $("#"+userClickedSquare).removeClass ("pressed");
    }, 100)
})





function checkAnswer(){
    if (allCoordinates [nextCoordinate] === userAnswers[nextCoordinate]) {
        rightAnswers++;
        newCoordinate();

    }else{
        started = false;
        $("h1").text("Game Over, Click Again to Restart");
        $("body").removeClass("gradient");
        setTimeout(function(){$("body").addClass("gradient")}, 200);
        startOver();
    }
}

function startOver(){
    var allCoordinates = 0;
    var userAnswers = 0;
}
