/*$(".gameMessages").prepend("Welcome to the schoolyard Hangman");
var keysPressedArr = [];
var regex = new RegExp(/[a-zA-Z.]/);
var displayMan = 0;

$('.whenClicked').on("click", function () {
    hangmanGame['listenforkey'];
    hangmanGame['startGame'];
    gameOver = false;
});

var hangmanGame = {

    startGame: function () {
        keysPressedArr = [];
        displayMan = 0;
        randomword = 0;
        score = 7;
        hangmanarr = [];
        convert = 0;
        tempArr = [];
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

    },
    keyPressed:'',
    listenforkey: function () {
        var self=this;
        document.addEventListener('keyup', function (event) {
            if (gameOver) {
                return;
            }

            convert = String.fromCharCode(event.keyCode);
            if (hangmanarr.indexOf(convert) < 0 && regex.test(convert) === true && keysPressedArr.indexOf(convert) < 0) {
                self.lettersPressed(convert);
                score--;
                console.log(score);
                startMessage();
                self.showBody();
            }
            else if (hangmanarr.indexOf(convert) >= 0 && regex.test(convert) === true); {
                insertLetter(convert);
                lettersPressed(convert);
            }
            if (score < 1) {
                self.gameOverMsg();
            }
        });

    },

    lettersPressed: function () {
        var y = document.getElementById('alphabet');
        var spacing = "&nbsp;&nbsp;";
        if (keysPressedArr.indexOf(x) < 0 && regex.test(convert) === true) {
            keysPressedArr.push(x);
            var spacing = "&nbsp;&nbsp;";
            y.innerHTML += x + spacing;
        }
        else {
            return;
        }
    },

    gameOverMsg: function () {
        $(".gameMessages").empty().prepend("Game Over! To play again press Start");
        restartGame();
    },

    startMessage: function () {
        $(".gameMessages").empty().prepend("You have" + " " + score + " " + "guesses");
    },

    restartGame: function () {
        winsCounter = 0;
        $("#winNumber").empty();
    },
    showGameWin: function () {
        var guessedWord = tempKey.join("");
        var mainWord = hangmanarr.join("");
        var mainIdx = hangmanarr.length;
        if (guessedWord === mainWord) {
            winsCounter();
            gameOver = true;
        }

    },

    winsCounter: function () {
        $(".gameMessages").empty().prepend("You have won!");
        winCount++;
        $("#winNumber").html(winCount);
    },


    sendRepeatMessage: function () {
        $(".gameMessages").empty().prepend("You have pressed and invalid key or repeated a letter");
        setTimeout(function () {
            $(".gameMessages").empty().prepend("You have" + " " + score + " " + "guesses");
        }, 2000);
    },
    showBody: function () {
        var k = document.getElementsByClassName('showMan');
        console.log(k);
        if (k.length > displayMan) {
            k[displayMan].style.display = "block";
            displayMan++;
        }
    },

    insertLetter: function () {
        var element = document.getElementsByClassName('blankSpace'); //get array of the html span
        var findInArray = [];
        for (var i = 0; i < hangmanarr.length; i++) {

            if (hangmanarr[i] === y) {
                findInArray.push(i);//push position of letter to this array
                tempArr[i] = y;
            }
        }
        for (var k = 0; k < findInArray.length; k++) {

            element[findInArray[k]].innerHTML = y;//adding matched letter to inner html of span according to position
        }

        showGameWin(tempArr, y);
    }


};
*/


$(".gameMessages").prepend("Welcome to the schoolyard Hangman");


    

var tempArr = [];
var score = 7;
var randomword;
var hangmanarr;
var winCount = 0;
var convert;
var gameOver;
var veryFirstGame;
//console.log(words);

function hint(el){
$(".hintBtn").on('click',function(){
    $(".hintBtn").empty().prepend(el);
    setTimeout(function () {
        $(".hintBtn").empty().prepend("Hint?");
    }, 2000);
});
}

$('.whenClicked').on("click", function () {
    listenforkey();
    startGame();
    gameOver = false;
});

var words = {
    City:["toronto","california","london","montreal"],
    Sports:["soccer","curling","jordan","stadium","rink"],
    PopCulture:["katy","movie","jackson","instagram","hollywood"],
    Animals:["dog","hippo","rhino","panda"]
}

var pickcategory=function(){
    var keywords=Object.keys(words);
    var combine="";
    var selection;
    //console.log(keywords);
    var getrandomcategory= keywords[Math.floor(Math.random() * keywords.length)];
    hint(getrandomcategory);
    var wordsforCategory=words[getrandomcategory];
    temprandomword = wordsforCategory[Math.floor(Math.random() * wordsforCategory.length)]
    var temphangmanarr = temprandomword.toUpperCase().split("")
    return temphangmanarr;
}



  
  
  

//fresh game start
function startGame() {
    keysPressedArr = [];
    displayMan = 0;
    randomword = 0;
    score = 7;
    hangmanarr = [];
    convert = 0;
    tempArr = [];
    $(".hideMan").hide();
    $("#placehere").empty();
    $(".showMan").hide();
    $("#alphabet").empty();
    startMessage();
    hangmanarr=pickcategory();
    //var words = new Array("Toronto", "yosemite", "travel", "wonderland", "dog", "business", "candy");
    //randomword = words[Math.floor(Math.random() * words.length)];
    //hangmanarr = randomword.toUpperCase().split("");
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

        if (gameOver) {
            return;
        }

        convert = String.fromCharCode(event.keyCode);
        if (hangmanarr.indexOf(convert) < 0 && regex.test(convert) === true && keysPressedArr.indexOf(convert) < 0) {
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
        if (score < 1) {
            gameOverMsg();
        }
    });
}



//add all letters pressed on keyboard in array, but not including repeating letters
var keysPressedArr = [];
function lettersPressed(x) {
    var y = document.getElementById('alphabet');
    var spacing = "&nbsp;&nbsp;";
    if (keysPressedArr.indexOf(x) < 0 && regex.test(convert) === true) {
        keysPressedArr.push(x);
        var spacing = "&nbsp;&nbsp;";
        y.innerHTML += x + spacing;
    }
    else {
        return;
    }

}


//keepscore
function gameOverMsg() {
    $(".gameMessages").empty().prepend("Game Over! To play again press Start");
    winCount=0;
    $("#winNumber").empty();
    gameOver = true;

}

function restartGame() {
    winsCounter = 0;
    $("#winNumber").empty();
}

//show end of game screen
function showGameWin(tempKey, pressedkey) {
    var guessedWord = tempKey.join("");
    var mainWord = hangmanarr.join("");
    var mainIdx = hangmanarr.length;
    if (guessedWord === mainWord) {
        winsCounter();
        gameOver = true;
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
    if (k.length > displayMan) {
        k[displayMan].style.display = "block";
        displayMan++;
    }
}






//insert letter into html
function insertLetter(y) {
    var element = document.getElementsByClassName('blankSpace'); //get array of the html span
    var findInArray = [];
    for (var i = 0; i < hangmanarr.length; i++) {

        if (hangmanarr[i] === y) {
            findInArray.push(i);//push position of letter to this array
            tempArr[i] = y;
            
        }
        console.log(hangmanarr[i]);
    }
    for (var k = 0; k < findInArray.length; k++) {

        element[findInArray[k]].innerHTML = y;//adding matched letter to inner html of span according to position
    }
    console.log(tempArr);

    showGameWin(tempArr, y);
}



