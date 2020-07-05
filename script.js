let selections = document.querySelectorAll('.choices');
let score = document.querySelector('.score');
let restartBtn = document.querySelector('.restart');
let result = document.querySelector('.modal-content')
let modal = document.querySelector('.modal')

let scoreBoard = {
    player: 0,
    computer: 0
}
function getEmoji(computerChoice) {
    if (computerChoice === 'paper') {
        return '✋'
    } else if (computerChoice === 'rock') {
        return '✊'
    } else return '✌'
}

function showWinner(winner, computerChoice){
    if(winner === "You") {
        scoreBoard.player++;
        result.innerHTML = `
        <h1 class="win">You Win!</h1>
        <p class="rock-modal">${getEmoji(computerChoice)}</p> 
        <p>Computer chose ${computerChoice}</p>
        `
    } else if (winner === "Computer") {
        scoreBoard.computer++;
        result.innerHTML = `
        <h1 class="win">You Lose!</h1>
        <p class="rock-modal">${getEmoji(computerChoice)}</p> 
        <p>Computer chose ${computerChoice}</p>
        `
    } else {
        scoreBoard.computer++;
        result.innerHTML = `
        <h1 class="win">It's a Draw!</h1>
        <p class="rock-modal">${getEmoji(computerChoice)}</p> 
        <p>Computer chose ${computerChoice}</p>
        `
    }
    score.innerHTML = `
    <p>Player: ${scoreBoard.player}</p>
    <p>Comp: ${scoreBoard.computer}</p>
    `
    modal.style.display = 'block'
}


function generateComputerChoice(){
    let random = Math.floor(Math.random()*3)
    if (random === 0) {
        return 'rock';
    } else if (random === 1){
        return 'paper';
    } else if (random === 2) {
        return "scissors"
    }
}
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
        return "Draw"
    } else if (playerChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'Computer'
        } else {
            return "You"
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors'){
            return 'Computer'
        } else {
            return "You"
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock'){
            return 'Computer'
        } else {
            return "You"
        }
    }
}

function play(e) {
    let playerChoice = e.target.id;
    let computerChoice = generateComputerChoice();
    let winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice)
}
selections.forEach(selection => {
    selection.addEventListener('click', play)
})

function clearModal(e){
    if (e.target === modal) {
        modal.style.display = 'none'
    }
}
function restartGame() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Comp: 0</p>
    `
}
window.addEventListener('click', clearModal)

restartBtn.addEventListener('click', restartGame)