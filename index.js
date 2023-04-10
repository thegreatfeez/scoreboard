// KONOHAGAKURE SCORE

let homeCount = 0;
let homeEl = document.getElementById("home-score");

function homePlusOne(){
  homeCount += 1
  homeEl.textContent = homeCount;
}

function homePlusTwo(){
  homeCount += 2
  homeEl.textContent = homeCount;
}

function homePlusThree(){
  homeCount += 3
  homeEl.textContent = homeCount;
}

// SUNAGAKURE SCORE

let guestCount = 0;
let guestEl = document.getElementById('guest-score')

function guestPlusOne(){
  guestCount += 1;
  guestEl.textContent = guestCount;
}

function guestPlusTwo(){
  guestCount += 2;
  guestEl.textContent = guestCount;
}

function guestPlusThree(){
  guestCount += 3;
  guestEl.textContent = guestCount;
}

// SAVE BUTTON
let saveHome = homeCount;
let saveGuest = guestCount;
domHome = document.getElementById("save-home");
domGuest = document.getElementById("save-guest");

function saveScores(){
  saveHome = homeCount + "--"
  domHome.textContent +=saveHome;

  saveGuest = guestCount + "--"
  domGuest.textContent +=saveGuest;

  homeEl.textContent = 0;
  homeCount = 0;

  guestEl.textContent = 0;
  guestCount = 0;
}