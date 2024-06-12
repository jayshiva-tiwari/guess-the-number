let ram = parseInt(Math.random()*100 + 1);
// console.log(ram);
const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt');
const GuessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let playGame = true;

let numGuess = 1;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validDataGuess(guess);
    })
}

function validDataGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if (guess < 1){
        alert('please enter more than 1 number')
    }else if (guess > 100){
        alert('please enter less then 100 number')
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over, random number was ${ram}`)
            endGame();
        }else{
            displayGuess (guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === ram){
        displayMessage(`you guessed the right number`)
        endGame()
    } else{
        if (guess < ram){
            displayMessage(`number is Too low`);
        }else if(guess > ram){
            displayMessage(`number is Too High`);
        }
    }
}

function displayGuess(guess) {    
    userInput.value = '';
    GuessSlot.innerHTML += `${guess }, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(guess) {
    userInput.value='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<button id="newGame">start new Game</button>';
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e){
        e.preventDefault();
        // userInput.value = '';
        ram = parseInt(Math.random()*100 +1);
        prevGuess =[]
        numGuess = 1;
        GuessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.style.display = 'block';
        playGame = true;
    });
}

