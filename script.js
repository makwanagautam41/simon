let gameSequence = [];
let userSequence = [];
let h2 = document.querySelector('h2');
let start = document.getElementById('start');
let btns = ['yellow','red','purple','green'];
let body = document.querySelector('body');

let started  = false;
let level = 0;

start.addEventListener('click', function(){
    if(started == false){
        console.log('game started');
        started = true;

        levelUp();
    }
});

function GameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },250);
}

function levelUp(){
    start.innerText = "Start";
    start.style.backgroundColor = "green";
    userSequence = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSequence.push(randColor);
    console.log(gameSequence);

    GameFlash(randBtn);
}

function checkAns(idx){
    if(userSequence[idx] === gameSequence[idx]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `game over! Your Score was <b>${level}</b>  Press reset to start new game`;
        body.style.backgroundColor = "red";
        setTimeout(function(){
            body.style.backgroundColor = "white";
        },150);
        start.innerText = "reset";
        start.style.backgroundColor = "red";
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSequence.push(userColor);
    console.log(userSequence);

    checkAns(userSequence.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}


function reset(){
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}