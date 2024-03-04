let gameSeq = [];
let userSeq = [];
let started = false;
let btns = ["yellow", "red", "green", "blue"]
let level = 0;
let h3 = document.querySelector("h3")
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true
        levelup();
    }
})



function levelup() {
    userSeq = []
    level++;
    h3.innerText = `level ${level} `
    //random btn choose
    let ranidx = Math.floor(Math.random() * 3)
    let randcolor = btns[ranidx]
    let randbtn = document.querySelector(`.${randcolor}`)
    // console.log(randbtn);
    // console.log(ranidx);
    // console.log(randcolor);
    gameSeq.push(randcolor)
    console.log(gameSeq);
    gameFlash(randbtn)
}


function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250)
}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250)
}
function checkAns(idx) {
    // console.log("Current level",level);
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000)
        }
        console.log("same value");

    } else {
        h3.innerHTML = `Game Over!Your score was <b>${level}<b><b> 
        Press any key to strat`;
document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset()
        
    }

}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id")
    console.log(userColor);
    userSeq.push(userColor)
    checkAns(userSeq.length - 1)


}
let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}
function reset() {
     gameSeq = [];
     userSeq = [];
     started = false;
    level = 0;
}