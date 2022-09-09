const homeText = document.getElementById("home_score");
const guestText = document.getElementById("guest_score");

var homeScore = 0;
var guestScore = 0;

function homePlusOne() {
    homeText.textContent = ++homeScore;
}

function homePlusTwo() {
    homeText.textContent = (homeScore += 2);
}

function homePlusThree() {
    homeText.textContent = (homeScore += 3);
}

function guestPlusOne() {
    guestText.textContent = ++guestScore;
}

function guestPlusTwo() {
    guestText.textContent = (guestScore += 2);
}

function guestPlusThree() {
    guestText.textContent = (guestScore += 3);
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeText.textContent = homeScore;
    guestText.textContent = guestScore;
}