# Projects related to DOM 

## project link
[Click here](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazVobWdLSFJPX25MVnNUOHRoOHE0dXZnVDd6d3xBQ3Jtc0tudVVwZTNCU2IyUEJzZU9MdXJCOVpESm5lMnFKaFFRZGtsSDN0aHRfUTJaTEdxQmJMSFEya0p5dDlPa1pxRVRLdjExZ0MydlZDSTVvdU9fd2hmVUJUNy1KR1FNcUZCRDFwR1lYa1BReFljWWw4aGpMZw&q=https%3A%2F%2Fgithub.com%2Fhiteshchoudhary%2F&v=EGqHVjU-fas)

# Solution Code

## project1
 ```javascript
 const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(button);
button.forEach(function (button) {
  console.log(button);
  button.addEventListener('mouseover', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target) {
      case grey:
        body.style.backgroundColor = e.target.id;
        break;
      case yellow:
        body.style.backgroundColor = e.target.id;
        break;
      case blue:
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

 ```

 ## project 2
 ```javascript
 const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height <= 0 || height == 'Nan') {
    result.innerHTML = `enter a valid height, you have entered ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `enter a valid weight, you have entered ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = '';
    if (bmi < 18.6) category = 'Under Weight';
    else if (bmi >= 18.6 && bmi <= 24.9) category = 'Normal Range';
    else category = 'Overweight';
    result.innerHTML = `<span>${bmi}<br>${category} </span`;
  }
});
 ```

 ## project 3
 ```javascript
 const clock = document.querySelector('#clock')
// we need this time to be changing every second, thus use a method called "setInterval()". Don't think of using something so huge as "cron job" for such a small task. It takes a function and the interval(always in milliseconds)
setInterval(function(){
  let date= new Date();
  clock.innerText= date.toLocaleTimeString(); 
}, 1000)
 ```
 ## project 4

 ``` javascript
 let randomNum= parseInt(Math.random()*10+1);

const submit= document.querySelector('#subt')
const input= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowHigh= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');
const p= document.createElement('p');

let prevGuess= [];
let chances=0;

let playGame= true;
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    let guess= parseInt(input.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Enter a valid number");
  }
  else if(guess<1){
    alert("Entered value is less than 1")
  }
  else if(guess>100){
    alert("Entered value is more than 100")
  }
  else{
    prevGuess.push(guess);
    if(chances===10){
      displayGuesses(guess);
      displayMessage("Game is over and the random number was: ",randomNum);
    }else{
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  if(guess==randomNum){
    displayMessage("You guessed it right")
    endGame();
  }
  else if(guess<randomNum) displayMessage("Guess is too low")
  else displayMessage("Guess is too high")
}
function displayGuesses(guess){
  input.value= '';
  guessSlot.innerHTML+= `${guess}, `;
  chances++;
  remaining.innerHTML= `${10-chances}`;
}
function displayMessage(message){
  lowHigh.innerHTML= `<h2>${message}</h2>`
}
function endGame(){
  input.value= '';
  input.setAttribute('disabled', '');
  p.classList.add('button')
  p.innerHTML= `<h2 id="newGame"> Start Over </h2>`;
  startOver.appendChild(p);
  playGame=false;
  newGame()
}
function newGame(){
  const button = document.querySelector('#newGame');
  button.addEventListener('click', function(e){
    randomNum= parseInt(Math.random()*10+1);
    prevGuess= [];
    chances= 0;
    guessSlot.innerHTML='';
    remaining.innerHTML= `${10-chances}`;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame= true;


  })
}

 ```
 ## project 5
 ```javascript
 window.addEventListener('keydown', function(e){
  insert.innerHTML= `
  <div>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key==' '? 'space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div
  `
})

 ```

 ## project 6
 ```javascript
 let hex = '123456789ABCDEFG';
const randomColour = function () {
  let colour = '#';
  for (let i = 0; i < 6; i++) {
    colour += hex[Math.ceil(Math.random() * 10)];
  }
  return colour;
};
let startColor;
const changeColor = function () {
  document.body.style.backgroundColor = randomColour();
};
document.getElementById('start').addEventListener('click', function () {
  if (!startColor)
    //in case the startColor is null, then we can't get reference to it. it's a practice for making industry level project
    startColor = setInterval(changeColor, 1000);
});

document.getElementById('stop').addEventListener('click', () => {
  clearInterval(startColor);
  startColor = null; //in order to flush out extra overwritten stuff
});

 ```