


    $(".gameMessages").prepend("Welcome to the schoolyard Hangman");




var tempArr = [];
var score=7;
var randomword;
var hangmanarr;
var winCount = 0;
var convert;
var gameOver;
//console.log(words);


$('.whenClicked').on("click", function () {  
    listenforkey();
    startGame();
    gameOver=false;
});




//fresh game start
function startGame() {
    keysPressedArr = [];
    displayMan = 0;
    randomword = 0;
    score = 7;
    hangmanarr = [];
    convert=0;
    tempArr=[];
    $(".hideMan").hide();
    $("#placehere").empty();
    $(".showMan").hide();
    $("#alphabet").empty();
    startMessage();
    var words = new Array("Toronto", "yosemite", "travel", "wonderland", "dog", "business", "candy");
    randomword = words[Math.floor(Math.random() * words.length)];
    hangmanarr = randomword.toUpperCase().split("");
    //console.log(randomword);

    console.log(hangmanarr);

    //add the blanks to html
    for (var i = 0; i < hangmanarr.length; i++) {
        var x = document.getElementById('placehere');
        var spacing = "&nbsp;&nbsp;";
        x.innerHTML += '<span class="blankSpace">' + "__" + spacing + '</span>' + "  ";
    }

}



var regex = new RegExp(/[a-zA-Z.]/);

function listenforkey(element) {

    document.addEventListener('keyup', function (event) {
        //console.log(event.keyCode);
        
        if(gameOver){
            return;
        }
      
      convert = String.fromCharCode(event.keyCode);
        if (hangmanarr.indexOf(convert) < 0 && regex.test(convert) === true && keysPressedArr.indexOf(convert)<0) {          
            lettersPressed(convert);          
            score--; 
            console.log(score);
            startMessage();     
               showBody();
        }
        else if (hangmanarr.indexOf(convert) >= 0 && regex.test(convert) === true); {
            insertLetter(convert);          
            lettersPressed(convert);
        }
        if(score<1){
            gameOverMsg();
        }
  


    });
}


//lettersGuessed --push all non repeating letters to html
/*function lettersGuessed(lg) {

    var y = document.getElementById('alphabet');
    //console.log(lg);
    var spacing = "&nbsp;&nbsp;";
    y.innerHTML += lg + spacing;

}*/



//add all letters pressed on keyboard in array, but not including repeating letters

var keysPressedArr = [];
function lettersPressed(x) {
   //console.log(keysPressedArr);
   var y = document.getElementById('alphabet');
   var spacing = "&nbsp;&nbsp;";
   if(keysPressedArr.indexOf(x)<0 && regex.test(convert) === true){
        keysPressedArr.push(x);
        var spacing = "&nbsp;&nbsp;";
        y.innerHTML += x + spacing;
    }
    else{
        return;
    }
   
}


//keepscore
function gameOverMsg() {  
    $(".gameMessages").empty().prepend("Game Over!");   
}

//show end of game screen
function showGameWin(tempKey, pressedkey) {
    //var checkarray=tempKey.join("").split("");
    var guessedWord = tempKey.join("");
    var mainWord = hangmanarr.join("");
    //console.log(mainWord);

    var mainIdx = hangmanarr.length;
    //console.log(mainIdx);
    if (guessedWord === mainWord) {
        winsCounter(); 
        gameOver=true; 
    }

}



//win counter
function winsCounter() {
    $(".gameMessages").empty().prepend("You have won!");
    winCount++;
    $("#winNumber").html(winCount);
}





//game messages function
function startMessage() {
    $(".gameMessages").empty().prepend("You have" + " " + score + " " + "guesses");
}



function sendRepeatMessage(c) {
    $(".gameMessages").empty().prepend("You have pressed and invalid key or repeated a letter");
    setTimeout(function () {
        $(".gameMessages").empty().prepend("You have" + " " + score + " " + "guesses");
    }, 2000);
}

//show piece of man when answer wrong
var displayMan = 0;
function showBody() {
    var k = document.getElementsByClassName('showMan');
    console.log(k);
    if(k.length>displayMan){
        k[displayMan].style.display = "block";
        displayMan++;   
    }
}






//insert letter into html
function insertLetter(y) {
    //console.log(y);
    var element = document.getElementsByClassName('blankSpace'); //get array of the html span


    var findInArray = [];
    for (var i = 0; i < hangmanarr.length; i++) {

        if (hangmanarr[i] === y) {
            findInArray.push(i);//push position of letter to this array
            tempArr[i] = y;
        }

    }

    console.log(tempArr);


    for (var k = 0; k < findInArray.length; k++) {

        element[findInArray[k]].innerHTML = y;//adding matched letter to inner html of span according to position




    }

    showGameWin(tempArr, y);


}
//console.log(tempArr.join("").toUpperCase().split(""));