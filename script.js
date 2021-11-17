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
    for (let i = 0; i < leftImgs.length; i += 1) {
        rightImgs[i].style.animation = "showingright 4s";
        rightImgs[i].style.transform = "translateX(0%)";
    }
});

paperBtn.addEventListener("click", function () {
    // display animation
    leftImgs[0].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftNotSelected 4s forwards";
    for (let i = 0; i < leftImgs.length; i += 1) {
        rightImgs[i].style.animation = "showingright 4s";
        rightImgs[i].style.transform = "translateX(0%)";
    }
});

scissorsBtn.addEventListener("click", function () {
    // display animation
    leftImgs[0].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[1].style.animation = "showingleftNotSelected 4s forwards";
    leftImgs[2].style.animation = "showingleftSelected 4s forwards";
    for (let i = 0; i < leftImgs.length; i += 1) {
        rightImgs[i].style.animation = "showingright 4s";
        rightImgs[i].style.transform = "translateX(0%)";
    }
});

console.log(leftImgs);
console.log(rightImgs);