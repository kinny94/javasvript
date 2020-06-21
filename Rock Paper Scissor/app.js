const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner = [0,0];

console.log(buttons);

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {

    let playerSelection = e.target.innerText;

    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }

    let result = checkWinner(playerSelection, computerSelection);
    if (result === "Player") {
        result += " wins!";
        winner[0]++;
    } else if (result === "Computer") {
        result += " wins!";
        winner[1]++;
    }

    score.innerHTML = `Player 1 ${winner[0]} :  Player 2 ${winner[1]}`;
}

function checkWinner(player, computer) {
    
    if (player === computer) {
        return "Draw";
    }
    
    if (player === "Rock") {
        if (computer === "Paper") {
            return "Computer"; 
        } else {
            return "Player";
        }
    }

    if (player === "Paper") {
        if (computer === "Scissors") {
            return "Computer";
        } else {
            return "Player";
        }
    }
}