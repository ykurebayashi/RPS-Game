// Setting variables
let playerScore = 0;
let botScore = 0;

let playerSelected = 0;
let botSelected = 0;

// Getting scores on screen
const playerScoreText = document.querySelector(".player");
const botScoreText = document.querySelector(".bot");

// Getting the buttons
const rockBtn = document.querySelectorAll(".opt-img")[0];
const paperBtn = document.querySelectorAll(".opt-img")[1];
const scissorsBtn = document.querySelectorAll(".opt-img")[2];
const playAgainBtn = document.querySelector(".play-again-btn");

// Getting left images and right images
const leftImgs = document.querySelectorAll(".opt-img-left");
const rightImgs = document.querySelectorAll(".opt-img-right");


// Setting random animation for the right
function enemySelect () {
    const enemySelectedOption = Math.floor(Math.random() * (3 - 1 + 1) + 1); // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

    if (enemySelectedOption === 1) {
        rightImgs[0].style.animation = "showingrightSelected 4s forwards";
        rightImgs[1].style.animation = "showingrightNotSelected 4s forwards";
        rightImgs[2].style.animation = "showingrightNotSelected 4s forwards";
    }

    if (enemySelectedOption === 2) {
        rightImgs[0].style.animation = "showingrightNotSelected 4s forwards";
        rightImgs[1].style.animation = "showingrightSelected 4s forwards";
        rightImgs[2].style.animation = "showingrightNotSelected 4s forwards";
    }

    if (enemySelectedOption === 3) {
        rightImgs[0].style.animation = "showingrightNotSelected 4s forwards";
        rightImgs[1].style.animation = "showingrightNotSelected 4s forwards";
        rightImgs[2].style.animation = "showingrightSelected 4s forwards";
    }

    botSelected = enemySelectedOption;
}

// Setting function to display the result
function getResult() {
    if (playerSelected === botSelected) {
        setTimeout(() => {
            alert("Draw!");
        }, 4000);
    }

    if(playerSelected === 1) {
        if(botSelected === 2) {
            botScore += 1;
        }
        if(botSelected === 3) {
            playerScore += 1;
        }
    }

    if(playerSelected === 2) {
        if(botSelected === 3) {
            botScore += 1;
        }
        if(botSelected === 1) {
            playerScore += 1;
        }
    }

    if(playerSelected === 3) {
        if(botSelected === 1) {
            botScore += 1;
        }
        if(botSelected === 2) {
            playerScore += 1;
        }
    }

    setTimeout(() => {
        playerScoreText.innerHTML = `You :${playerScore}`;
        botScoreText.innerHTML = `${botScore}: Bot`;
    }, 3000);
}

// Remove functions
function removeFunctions() {
    rockBtn.removeEventListener("click", rockFunction);
    paperBtn.removeEventListener("click", paperFunction);
    scissorsBtn.removeEventListener("click", scissorsFunction);
}

// Setting Rock, paper, etc Function
function rockFunction() {
    // display animation
    leftImgs[0].style.animation = "showingleftSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftNotSelected 4s forwards";
    enemySelect();
    playerSelected = 1;
    getResult();
    playAgainBtn.style.transform = "translateY(0%)";
    removeFunctions();
}

function paperFunction() {
    // display animation
    leftImgs[0].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftNotSelected 4s forwards";
    enemySelect();
    playerSelected = 2;
    getResult();
    playAgainBtn.style.transform = "translateY(0%)";
    removeFunctions();
}

function scissorsFunction() {
    // display animation
    leftImgs[0].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftSelected 4s forwards";
    enemySelect();
    playerSelected = 3;
    getResult();
    playAgainBtn.style.transform = "translateY(0%)";
    removeFunctions();
}

// Adding functions
function addFunctions() {
    rockBtn.addEventListener("click", rockFunction);
    paperBtn.addEventListener("click", paperFunction);
    scissorsBtn.addEventListener("click", scissorsFunction);
}

playAgainBtn.addEventListener("click", function() {
    leftImgs[0].style.animation = "";
    leftImgs[1].style.animation = "";
    leftImgs[2].style.animation = "";
    leftImgs[0].style.transform = "translateX(-400%)";
    leftImgs[1].style.transform = "translateX(-400%)";
    leftImgs[2].style.transform = "translateX(-400%)";
    rightImgs[0].style.animation = "";
    rightImgs[1].style.animation = "";
    rightImgs[2].style.animation = "";
    rightImgs[0].style.transform = "translateX(400%)";
    rightImgs[1].style.transform = "translateX(400%)";
    rightImgs[2].style.transform = "translateX(400%)";
    addFunctions();
})

addFunctions();