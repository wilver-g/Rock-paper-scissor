const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorBtn = document.querySelector('.scissor-btn');

let winCount=0;
let loseCount=0;
let gameCount=0;
   
function playGame(userChoice) {
    
    const rps=["rock","paper", "scissors"];
    const computerChoice= rps[(Math.floor(Math.random()*rps.length))];
    console.log(computerChoice);

    if (userChoice === computerChoice) {
        alert(`${userChoice} is tied with ${computerChoice}`)
    }
    else if (userChoice === 'rock' && computerChoice=== 'scissors' ||
             userChoice === 'paper' && computerChoice === 'rock' ||
             userChoice === 'scissors' && computerChoice === 'paper') {
                alert(`${userChoice} beats ${computerChoice}. You Win!`); winCount++
             }
    else {
        alert (`${computerChoice} beats ${userChoice}. You lose`) ; loseCount++ }
    gameCount++
    
    if (gameCount === 5) {
        // Display the win and lose counts
        alert(`Game Over!\nWins: ${winCount}\nLoses: ${loseCount}`);
    
        // Reset win and lose counters to zero
        winCount = 0;
        loseCount = 0;
    
        // Reset the game count to zero
        gameCount = 0;
      }
};

function animateButtonClick(button) {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 1000); // Adjust the time (in milliseconds) to control the animation duration
  }





rockBtn.addEventListener('click', ()=>{
    playGame('rock');
})

paperBtn.addEventListener('click', ()=>{
    playGame('paper');
})

scissorBtn.addEventListener('click', ()=>{
    playGame('scissor');
})

window.addEventListener('keydown', e =>{
    console.log(e);
    if (e.key === 'r') {
        animateButtonClick(rockBtn)
        playGame('rock');
    }
})

window.addEventListener('keydown', e =>{
    console.log(e);
    if (e.key === 'p') {
        animateButtonClick(paperBtn)
        playGame('paper');
    }
})

window.addEventListener('keydown', e =>{
    console.log(e);
    if (e.key === 's') {
        animateButtonClick(scissorBtn)
        playGame('scissor');
    }
})

    