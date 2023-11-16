// Iteration 1: Make the Play button functional.

// Description: When the Play button is clicked the game page should be displayed.

let playbutton = document.getElementById("play-button")
playbutton.onclick = play

function play(){
    location.href='./game.html'
}
