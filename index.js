let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function incrHomeScore1() {
    homeScore += 1
    console.log(homeScore)
    homeScoreEl.textContent = homeScore
}
function incrHomeScore2() {
    homeScore += 2
    console.log(homeScore)
    homeScoreEl.textContent = homeScore
}
function incrHomeScore3() {
    homeScore += 3
    console.log(homeScore)
    homeScoreEl.textContent = homeScore
}
function incrGuestScore1() {
    guestScore += 1
    console.log(guestScore)
    guestScoreEl.textContent = guestScore
}
function incrGuestScore2() {
    guestScore += 2
    console.log(guestScore)
    guestScoreEl.textContent = guestScore
}
function incrGuestScore3() {
    guestScore += 3
    console.log(guestScore)
    guestScoreEl.textContent = guestScore
}