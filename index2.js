
alert("Do not reload the page until you finish the whole test and your final value is calculated")
// FIRSTTEST
function testYourself1() {
    var question1 = prompt("How many days of tahajjud do you pray in a week");
    if (question1 <= 7 ) {
        var  answer1 = (question1 * 100) / 7; 
        document.getElementById("answerDisplay1").innerText = " Your percentage for number 1 is " + answer1;
        document.getElementById("answerDisplay1").textContent = " Your percentage for number 1 is " + answer1;
        }
    else  if (question1 > 7 ) {
        document.getElementById("answerDisplay1").innerText = "Your input number is more than the days of a week.....you're a scam";
        document.getElementById("answerDisplay1").textContent = "Your input number is more than the days of a week.....you're a scam";
    }
    else if (question1 ) {

    }
    else {
        document.getElementById("answerDisplay1").innerText = "Error.....that's not a valid number";
        document.getElementById("answerDisplay1").textContent = "Error.....that's not a valid number";
    }
}

// SECONDTEST
function testYourself2() {
    var question2 = prompt("How many days of duhaa do you pray in a week");
if (question2 <= 7 ) {
    var answer2 = (question2 * 100) / 7; 
    document.getElementById("answerDisplay2").innerText =  "Your percentage for number 2 is " + answer2;
    document.getElementById("answerDisplay2").textContent =  "Your percentage for number 2 is " + answer2;
}
else if (question2 > 7 ) {
    document.getElementById("answerDisplay2").innerText =  "Your input number is more than the days of a week.....you're a scam";
    document.getElementById("answerDisplay2").textContent =  "Your input number is more than the days of a week.....you're a scam";
}
else {
    document.getElementById("answerDisplay2").innerText =  "Error.....that's not a valid number " ;
    document.getElementById("answerDisplay2").textContent =  "Error.....that's not a valid number " ;
}
}

// THIRDTEST
function testYourself3() {
    alert("How often do you do your morning and evening adhkaar..... 2 in a day with a total of 14 possible")
var question3 = prompt("How many times do you do adhkaar in a week")
if (question3 <= 14 ) {
    var answer3 = (question3 * 100) / 14; 
    document.getElementById("answerDisplay3").innerText = "Your percentage for number 3 is " + answer3;
    document.getElementById("answerDisplay3").textContent = "Your percentage for number 3 is " + answer3;
}
else if (question3 > 14 )  {
    document.getElementById("answerDisplay3").innerText = "Your input number is more than the possible days of a week, you can only have two in a day and 14 times in a week.....you're a goddamn liar";
    document.getElementById("answerDisplay3").textContent = "Your input number is more than the possible days of a week, you can only have two in a day and 14 times in a week.....you're a goddamn liar";
}
else {
    document.getElementById("answerDisplay3").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay3").textContent = "Error.....that's not a valid number";
}

}
//  FOURTHTEST
function testYourself4() {
    alert("Have you started observing  'Sunnan Rawaatib' ")
var question4 = prompt("How many do you observe in a day")
if (question4 <= 12 ) {
    var answer4 = (question4 * 100) / 12; 
    document.getElementById("answerDisplay4").innerText = "Your percentage for number 4 is " + answer4;
    document.getElementById("answerDisplay4").textContent = "Your percentage for number 4 is " + answer4;
}
else if (question4 > 12 ) {
    document.getElementById("answerDisplay4").innerText = "Your input number is more than the days of a week.....you're a scam"
    document.getElementById("answerDisplay4").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay4").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay4").textContent = "Error.....that's not a valid number";
}
}

//FIFTHTEST
function testYourself5() {
    alert("Have you started doing muraaja'a(revision) of the Qur'an");
var minorquestion5 = prompt("How many juz have you memorised")
var question5 = prompt("How many pages have you been revising averagely in a day")
if (minorquestion5 <= 30 && question5 <= (20 * minorquestion5) ) {
    var answer5 = (question5 * 100) / minorquestion5; 
    document.getElementById("answerDisplay5").innerText = "Your percentage for number 5 is " + answer5;
    document.getElementById("answerDisplay5").textContent = "Your percentage for number 5 is " + answer5;
}
else if (question5 > (20 * minorquestion5) || minorquestion5 > 30) {
    document.getElementById("answerDisplay5").innerText = "Your input number is more than the numbers of Rawaatib";
    document.getElementById("answerDisplay5").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay5").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay5").textContent = "Error.....that's not a valid number";
}  
}


//SIXTHTEST
function testYourself6() {
    alert("Have you started your tilaawatul Qur'an?");
var minorquestion6 = prompt("How many are you planning to read during this Ramadan")
var question6 = prompt("How many pages do you read in a day");
if (minorquestion6 <= 30 && question6 <= 600) {
    var answer6 = (question6 * 100) / (minorquestion6 * 20); 
    document.getElementById("answerDisplay6").innerText = "Your percentage for number 6 is " + answer6;
    document.getElementById("answerDisplay6").textContent = " Your percentage for number 6 is " + answer6;
}
else if (question5 > 600  || minorquestion5 > 30 ) {
    document.getElementById("answerDisplay6").innerText = "Your input number is more than the numbers of Rawaatib";
    document.getElementById("answerDisplay6").textContent ="Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay6").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay6").textContent = "Error.....that's not a valid number";
}  
}


//  SEVENTHTEST
function testYourself7() {
    alert("Let's talk of Sadaqah, it can even be give away oo....even if it's once in a day")
var question7 = prompt("How many days in a week do you give away something (do sadaqah)")
if (question7 <= 7 ) {
    var answer7 = (question7 * 100) / 7; 
    document.getElementById("answerDisplay7").innerText = "Your percentage for number 7 is " + answer7;
    document.getElementById("answerDisplay7").textContent = "Your percentage for number 7 is " + answer7;
}
else if (question7 > 7 ) {
    document.getElementById("answerDisplay7").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay7").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay7").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay7").textContent = "Error.....that's not a valid number";
}
}

//  EIGHTHTEST
function testYourself8() {
    alert("Do you know the beauty of this statement 'subhaanallah wa bi hamdi'i subhaanallahil adhim ' ")
var question8 = prompt("How many times do you complete the daily 100 in a week")
if (question8 <= 7 ) {
    var answer8 = (question8 * 100) / 7; 
    document.getElementById("answerDisplay8").innerText = "Your percentage for number 8 is " + answer8;
    document.getElementById("answerDisplay8").textContent = "Your percentage for number 8 is " + answer8;
}
else if (question8 > 7 ) {
    document.getElementById("answerDisplay8").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay8").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay8").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay8").textContent = "Error.....that's not a valid number";
}
}

//  NINTHTEST
function testYourself9() {
    alert("Do you know the beauty of this statement 'Laa ilaa illa llah wahdahu laa shariikalah lahul mulk wa lahul hamd wahuwa a'alaa kulli shay'in qadiir' ")
var question9 = prompt("How many times do you complete the daily 100 in a week")
if (question9 <= 7 ) {
    var answer9 = (question9 * 100) / 7; 
    document.getElementById("answerDisplay9").innerText = "Your percentage for number 9 is " + answer9;
    document.getElementById("answerDisplay9").textContent = "Your percentage for number 9 is " + answer9;
}
else if (question9 > 7 ) {
    document.getElementById("answerDisplay9").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay9").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay8").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay8").textContent = "Error.....that's not a valid number";
}
}

//  TENTHTEST
function testYourself10() {
    alert("Do you know the beauty of this statement 'subhaanallah wa bi hamdi'i subhaanallahil adhim' ")
var question10 = prompt("How many times do you complete the daily 100 in a week")
if (question10 <= 7 ) {
    var answer10 = (question10 * 100) / 7; 
    document.getElementById("answerDisplay10").innerText = "Your percentage for number 10 is " + answer10;
    document.getElementById("answerDisplay10").textContent = "Your percentage for number 10 is " + answer10;
}
else if (question10 > 7 ) {
    document.getElementById("answerDisplay10").innerText = "Your input number is more than the numbers of Rawaatib"
    document.getElementById("answerDisplay10").textContent = "Your input number is more than the numbers of Rawaatib";
}
else {
    document.getElementById("answerDisplay10").innerText = "Error.....that's not a valid number";
    document.getElementById("answerDisplay10").textContent = "Error.....that's not a valid number";
}
}


// function that makes my answer display
function displayAnswer() {
    var change = document.getElementById("answerDisplay");
    change.style.visibility = "visible";
}
   

// this is what made my prompt  not to refresh
window.addEventListener("beforeunload", function(event) {
    event.preventDefault(); //returnValue = "\o/";
});
window.addEventListener("beforeunload", function(e) {
    var confirmationMessage = "\o/";
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});