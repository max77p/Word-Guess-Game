

$(".gameMessages").prepend("Welcome to the schoolyard Hangman");

//document.write("hangman game");
var score = 7;
var randomword;
var hangmanarr;
var words = new Array("monday", "parrot", "hockey","percy","november","zoo", "dollar","london");
//console.log(words);
$('.whenClicked').on( "click", function() {
    restartGame();
    startMessage();
});


//fresh game start
function restartGame(){
    randomword=0;
    hangmanarr=[];
    score=7;
 $ ("#placehere").empty();
 $(".showMan").hide();
 $("#alphabet").empty();
    
randomword = words[Math.floor(Math.random() * words.length)];
//console.log(randomword);
hangmanarr = randomword.toUpperCase().split("");
console.log(hangmanarr);

//add the blanks to html
for (var i = 0; i < hangmanarr.length; i++) {
    var x = document.getElementById('placehere');
    var spacing = "&nbsp;&nbsp;";
    x.innerHTML += '<span>' + "__" +spacing+ '</span>' + "  ";
  }
  
}





//lettersGuessed
function lettersGuessed(lg){
    var y=document.getElementById('alphabet');
    //console.log(lg);
    var spacing = "&nbsp;&nbsp;";
    y.innerHTML +=lg+spacing;
}





var regex = new RegExp(/[a-zA-Z.]/);

var lastkey;
//console.log(/[a-zA-Z.]/.test(shan));
document.addEventListener('keyup', function(event) {
  var convert = String.fromCharCode(event.keyCode);
  //console.log(regex.test(convert));
 // console.log(lastkey1);

  if (newarr.indexOf(convert) < 0 && regex.test(convert) === true) {
    lettersPressed(convert);
    //console.log("invalid");
    lettersGuessed(convert);
  }

  if (hangmanarr.indexOf(convert) > -1) {
    //console.log("you got it!");
    console.log("correct!");
    insertLetter(convert);
  } else {
   keepScore(convert);
  }
  
lastkey=convert;
});

//add all letters pressed on keyboard in array
var newarr = [];
function lettersPressed(x) {
  newarr.push(x);
  console.log(newarr);
}

//keepscore
function keepScore(c) {
console.log(lastkey);
if(c!=lastkey && score>0){
score--;
startMessage();
showBody();

//console.log("try again");
//console.log(score);
}
if(score<=0){
alert("you lost the game");
showGameEnd();
}

}

//win counter
function winsCounter(){

}

//game messages function
function startMessage(){
    $(".gameMessages").empty().prepend("You have"+" "+score+" "+ "guesses");
    }
    

//show piece of man when answer wrong
var displayMan=0;
function showBody(){
    var k=document.getElementsByClassName('showMan');
    if(k.length>displayMan){
   
        k[displayMan].style.display="block";
        displayMan++;
    }
    }
    


//show end of game screen
function showGameEnd(){
    
}


//insert letter into html
function insertLetter(y) {
  var element = document.getElementsByTagName('span'); //get array of the html span
  //console.log(element[0].innerHTML);
  var findInArray = [];
  for (var i = 0; i < hangmanarr.length; i++) {
    if (hangmanarr[i] === y) {
      findInArray.push(i);
    }
  }

  for (var k = 0; k < findInArray.length; k++) {
    element[findInArray[k]].innerHTML = y;
  }

  //console.log(findInArray);
  //console.log(s);
  //;
}
