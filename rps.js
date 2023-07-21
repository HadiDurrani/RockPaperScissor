let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    ties: 0
}
updateScore();
let result = '';
function pickUserMove(Move){
let compMove = pickCompMove();
if(Move === 'Rock'){
    if(compMove === 'Rock'){
    result = 'Tie';
    }
    else if(compMove === 'Paper'){
        result = 'Lose';
    }
    else{
        result = 'Win';
    }
}
else if(Move === 'Paper'){
    if(compMove === 'Rock'){
    result = 'Win';
    }
    else if(compMove === 'Paper'){
        result = 'Tie';
    }
    else{
        result = 'Lose';
    }
}
else if(Move === 'Scissors') {
    if(compMove === 'Rock'){
    result = 'Lose';
    }
    else if(compMove === 'Paper'){
        result = 'Win';
    }
    else{
        result = 'Tie';
    }
}
if (result === 'Win'){
    score.wins++;
}
else if(result=== 'Lose'){
    score.lose++;
}
else if(result === 'Tie'){
    score.ties++;
}

localStorage.setItem('score', JSON.stringify(score))

updateScore();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-move')
    .innerHTML = `You
<img src="rps-imgs/${Move.toLowerCase()}-emoji.png" class="move-icon">
<img src="rps-imgs/${compMove.toLowerCase()}-emoji.png" class="move-icon">
Computer`;
}

function updateScore(){
document.querySelector('.js-score').innerHTML = `win: ${score.wins}, losses: ${score.lose}, Ties: ${score.ties}`;
}

function pickCompMove(){
let compMove = '';
const randomNum = Math.random();

if(randomNum >=0 && randomNum < (1/3)){
compMove = 'Rock';
}
else if(randomNum >=(1/3) && randomNum < (2/3)){
    compMove = 'Paper';
}
else{
    compMove = 'Scissors';
}
return compMove;

}