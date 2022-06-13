const hide = document.getElementById('game-container');
const newGameBtn = document.getElementById('newgame-btn');
const howToPlayBtn = document.getElementById('howtoplay-btn');
const show = document.querySelectorAll('.cell');
const score = document.getElementById('score');
const instructions = document.getElementById('instructions');

let counter = 0;
let gameCounter = 0;
let choiceOne;
let choiceOneTarget;
let choiceTwo;
let choiceTwoTarget;
let gameValueArray = [1, 2, 3, 4, 5, 6, 7, 8, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1];
let max = gameValueArray.length;



updateGameCounter();
randomizeNumbers();

show.forEach((el) => {
    if (el.style.color === "black") {
        el.style.pointerEvents = "none";
    }
})

function generateRandomNum() {
    let num = Math.floor(Math.random() * (max - 0) ) + 0;
    let result = gameValueArray[num];
    console.log(gameValueArray);
    gameValueArray = gameValueArray.filter((e) => {
        console.log(e);
        return e !== result;
    });
    max--;
    console.log(Math.floor(result));
    return Math.floor(result);
}
function randomizeNumbers() {
    show.forEach((el) => {
        el.style.pointerEvents = "none";
        el.innerHTML = generateRandomNum();
    })
}

function hideText() {
    show.forEach((el) => {
        el.style.color = "white";
        el.style.pointerEvents = "auto";
    })
}

newGameBtn.addEventListener("click", (el) => {
    show.forEach((el) => {
        if (el.style.color === "black") {
            el.style.pointerEvents = "none";
        }
    })
    counter = 0;
    gameCounter = 0;
    gameValueArray = [1, 2, 3, 4, 5, 6, 7, 8, 1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1];
    max = gameValueArray.length;
    updateGameCounter();
    randomizeNumbers();
    instructions.style.display = "none";
    show.forEach((el) => {
        el.style.color = "black";
    })
    clearTimeout(setTimeout(hideText, 3000));
    setTimeout(hideText, 3000);
    show.forEach((el) => {
        el.style.pointerEvents = "auto";
    })
})
function updateGameCounter() {
    score.innerHTML = gameCounter;
}
hide.addEventListener("click", (e) => {
    show.forEach((el) => {
        if (el.style.color === "black") {
            el.style.pointerEvents = "none";
        }
    })
    counter++;
    if (e.target) {
        e.target.style.color = "black";
        if (!choiceOne) {
            choiceOne = e.target.innerText;
            choiceOneTarget = e.target;
            choiceOneTarget.style.pointerEvents = "none";
        } else {
            choiceTwo = e.target.innerText;
            choiceTwoTarget = e.target;
            choiceTwoTarget.style.pointerEvents = "none";
            choiceOneTarget.style.pointerEvents = "auto";
        }
        if (choiceOne === choiceTwo) {
            gameCounter += 10;
            updateGameCounter();
        } else {
            choiceTwoTarget.style.pointerEvents = "auto";
            if (counter >= 2) {
                clearTimeout(setTimeout(() => {
                    choiceOneTarget.style.color = "white";
                    choiceTwoTarget.style.color = "white";
                }, 100));
                if (gameCounter > 0) {
                    gameCounter -= 2;
                    updateGameCounter();
                }
                setTimeout(() => {
                    choiceOneTarget.style.color = "white";
                    choiceTwoTarget.style.color = "white";
                }, 100);
            }
        }
    }
    if (counter >= 2) {
        function reset() {
            counter = 0;
            choiceOne = undefined;
            choiceTwo = undefined;
        }
        reset();
    }
})
howToPlayBtn.addEventListener("click", () => {
    if (instructions.style.display === "inline-block") {
        instructions.style.display = "none";
    } else {
        instructions.style.display = "inline-block";
    }
})
clearTimeout(setTimeout(hideText, 3000));
setTimeout(hideText, 3000);