//set var for question
//set var for answer
//set obj with question:answers

//check question is property of obj
//if yes check answer to question:answer
//if answer correct display image tick (needs img src w/ style="display: "none") to then reset to "block" if answer is correct
//if answer wrong, as above but different image.

//reset button sets new word in obj

//if JS can read 'value' to test function, can change display for next test by changing 'value' value once submitted




//need to (attached to next button) to clear old answers too.
function allClear() { //clears answer results (correct/incorrect)
    var yes1 = document.getElementById("yes1");
    var no1 = document.getElementById("no1");
    var yes2 = document.getElementById("yes2");
    var no2 = document.getElementById("no2");
    var yes3 = document.getElementById("yes3");
    var no3 = document.getElementById("no3");
    var yes4 = document.getElementById("yes4");
    var no4 = document.getElementById("no4");
    var yes5 = document.getElementById("yes5");
    var no5 = document.getElementById("no5");
    var yes6 = document.getElementById("yes6");
    var no6 = document.getElementById("no6");
    var err = document.getElementById("error");
    var fault = document.getElementById("fault");
    var ans1 = document.getElementById("answerInp1");
    var ans2 = document.getElementById("answerInp2");
    var ans3 = document.getElementById("answerInp3");
    var ans4 = document.getElementById("answerInp4");
    var ans5 = document.getElementById("answerInp5");
    var ans6 = document.getElementById("answerInp6");
    
return      yes1.style.display = "none",
            no1.style.display = "none",
            yes2.style.display = "none",
            no2.style.display = "none",
            yes3.style.display = "none",
            no3.style.display = "none",
            yes4.style.display = "none",
            no4.style.display = "none",
            yes5.style.display = "none",
            no5.style.display = "none",
            yes6.style.display = "none",
            no6.style.display = "none",
//            err.style.display = "none",
//            fault.style.display = "none",
            ans1.value = "",
            ans2.value = "",
            ans3.value = "",
            ans4.value = "",
            ans5.value = "",
            ans6.value = "";
}
//declared outside testDutch() function to collect total from all verb tests
var score = 0;
var verbScore = 0


//tests all 6 answers against obj database
function testDutch() { 
var q = document.getElementById("question").innerHTML; 
 
var ans1 = document.getElementById("answerInp1").value;
var ans2 = document.getElementById("answerInp2").value;
var ans3 = document.getElementById("answerInp3").value;
var ans4 = document.getElementById("answerInp4").value;
var ans5 = document.getElementById("answerInp5").value;
var ans6 = document.getElementById("answerInp6").value;

var yes1 = document.getElementById("yes1");
var no1 = document.getElementById("no1");
var yes2 = document.getElementById("yes2");
var no2 = document.getElementById("no2");
var yes3 = document.getElementById("yes3");
var no3 = document.getElementById("no3");
var yes4 = document.getElementById("yes4");
var no4 = document.getElementById("no4");
var yes5 = document.getElementById("yes5");
var no5 = document.getElementById("no5");
var yes6 = document.getElementById("yes6");
var no6 = document.getElementById("no6");
var err = document.getElementById("error1");
var fault = document.getElementById("fault1");
//Field to display current score
var scoreBoard = document.getElementById("scoreboard");
var total = document.getElementById("end");
//Display correct answers when answered incorrectly
var correct1 = document.getElementById("correctAns1");
var correct2 = document.getElementById("correctAns2");
var correct3 = document.getElementById("correctAns3");
var correct4 = document.getElementById("correctAns4");
var correct5 = document.getElementById("correctAns5");
var correct6 = document.getElementById("correctAns6");


for (var i = 0; i < obj.length; i++) {
    if (obj[i].verb[5] == q) { 
        if (obj[i]["verb"][0] == ans1) { 
            no1.style.display = "none";
            yes1.style.display = "block";
            score += 1;
        } else yes1.style.display = "none", 
          no1.style.display = "block";
          correct1.style.display = "block";
          correct1.innerHTML = "The correct answer is " + "'" + obj[i]["verb"][0] + "'";
        if (obj[i]["verb"][1] == ans2) { 
            no2.style.display = "none";
            yes2.style.display = "block";
            score += 1;
        } else yes2.style.display = "none",
          no2.style.display = "block";
          correct2.style.display = "block";
          correct2.innerHTML = "The correct answer is " + "'" + obj[i]["verb"][1] + "'";
        if (obj[i]["verb"][2] == ans3) { 
            no3.style.display = "none";
            yes3.style.display = "block";
            score += 1;
        } else yes3.style.display = "none",
          no3.style.display = "block";
          correct3.style.display = "block";
          correct3.innerHTML = "The correct answer is " + "'" + obj[i]["verb"][2] + "'";
        if (obj[i]["verb"][3] == ans4) { 
            no4.style.display = "none";
            yes4.style.display = "block";
            score += 1;
        } else yes4.style.display = "none",
          no4.style.display = "block";
          correct4.style.display = "block";
          correct4.innerHTML = "The correct answer is " + "'" + obj[i]["verb"][3] + "'";
        if (obj[i]["verb"][4] == ans5) { 
            no5.style.display = "none";
            yes5.style.display = "block";
            score += 1;
        } else yes5.style.display = "none",
          no5.style.display = "block";
          correct5.style.display = "block";
          correct5.innerHTML = "The correct answer is " + "'" + obj[i]["verb"][4] + "'";
        if (obj[i]["verb"][5] == ans6) { 
            no6.style.display = "none";
            yes6.style.display = "block";
            score += 1;
        } else yes6.style.display = "none",
          no6.style.display = "block";
          correct6.style.display = "block";
          correct6.innerHTML = "The correct answer is " + "'" + obj[i]["verb"][5] + "'";
    } 
    scoreBoard.innerText = score + " / " + obj[i]["verb"].length;
    verbScore + score;
    total.innerText = "Total Running Score: " + verbScore;
} 
score = 0;
if (current == obj.length - 1) {
  scoreBoard.innerText = "Congratulations your total score is " + verbScore + " / " + (obj.length - 1) * obj[1]["verb"].length; //first 'verb' is empty
}
} 

//declared outside "Next Question" function so current doesn't reset to 0
var current = 0;

function nextQ() {

  var next = document.getElementById("next");
  var q = document.getElementById("question");
  var note = document.getElementById("notes");

/*if (q !== ""){
   for (var i = 0; i < objNotes.length; i++) {
    if (q.innerHTML == objNotes[i]["notes"][0]) {
      note.innerText = "eep";
    } else note.innerText = objNotes[4]["notes"][1];
  } //note.innerText = objNotes[0].notes[1];
    }*/

  if (current == obj.length - 1) {
    current = 0;
  }
  else { 
      current++;
      next.value="Next";
  }
  q.innerHTML = obj[current]["verb"][5];
  note.innerText = objNotes[current]["notes"][1];


if (current == obj.length - 1) {
    next.style.display = "none";
  }
}

function searchVD () {

var x = document.getElementById("question");

  window.open("https://www.vandale.nl/gratis-woordenboek/nederlands-engels/vertaling/" + x.innerHTML);
}