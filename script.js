// Getting the buttons
const rockBtn = document.querySelectorAll(".opt-img")[0];
const paperBtn = document.querySelectorAll(".opt-img")[1];
const scissorsBtn = document.querySelectorAll(".opt-img")[2];

// Getting left images and right images
const leftImgs = document.querySelectorAll(".opt-img-left");
const rightImgs = document.querySelectorAll(".opt-img-right");

// Setting functions to all buttons
rockBtn.addEventListener("click", function () {
    // display animation
    leftImgs[0].style.animation = "showingleftSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftNotSelected 4s forwards";
    enemySelect();
});

paperBtn.addEventListener("click", function () {
    // display animation
    leftImgs[0].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftNotSelected 4s forwards";
    enemySelect();
});

scissorsBtn.addEventListener("click", function () {
    // display animation
    leftImgs[0].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftSelected 4s forwards";
    enemySelect();
});

// Setting random animation for the right
function enemySelect () {
    const enemySelectedOption = Math.floor(Math.random() * (3 - 1 + 1) + 1); // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    console.log(enemySelectedOption);

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
}


// Setting function to display the result