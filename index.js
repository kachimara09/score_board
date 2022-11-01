let homeScoring = document.getElementById("home-score")
let homeScore = 0

function incrementHomeOne() {
    homeScore += 1
    homeScoring.textContent = homeScore
}

function incrementHomeTwo() {
    homeScore += 2
    homeScoring.textContent = homeScore
}

function incrementHomeThree() {
    homeScore += 3
    homeScoring.textContent = homeScore
}

let guestScoring = document.getElementById("guest-score")
let guestScore = 0

function incrementGuestOne() {
    guestScore += 1
    guestScoring.textContent = guestScore
}

function incrementGuestTwo() {
    guestScore += 2
    guestScoring.textContent = guestScore
}

function incrementGuestThree() {
    guestScore += 3
    guestScoring.textContent = guestScore
}

function resetGame() {
    homeScoring.textContent = 0
    guestScoring.textContent = 0
}
