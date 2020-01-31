document.addEventListener("DOMContentLoaded", function() {
  loadEvents();
  // load every event in the page
  let guessCount = 0;
  let numberMax = 100;
  let randomNumber = Math.ceil(Math.random() * numberMax);

  function checkStatus(guessedNumber) {
    if (isNaN(guessedNumber)) {
      return `you must guess a number!`;
    } else if (guessedNumber < 1 || guessedNumber > numberMax) {
      return `you must guess a number between 1 and 100!`;
    } else if (randomNumber > guessedNumber) {
      return `the number you seek is greater than ${guessedNumber}`;
    } else if (randomNumber < guessedNumber) {
      return `the number you seek is less than ${guessedNumber}`;
    } else if (guessedNumber === randomNumber) {
      return `you win! ${guessedNumber} is the right number!`;
    }
  }

  function loadEvents() {
    document.querySelector("form").addEventListener("submit", submit);
    document.getElementById("clear").addEventListener("click", clearList);
  }

  // NUMBER INPUT
  function submit(event) {
    event.preventDefault();
    let guessedNumber = document.querySelector("input");
    let value = parseInt(guessedNumber.value);
    let check = checkStatus(value);
    guessCount++;
    if (guessCount === 7 && guessedNumber != randomNumber) {
      // show the you lose
      addNumber("too many guesses. you lose!");
    } else if (value != "") addNumber(check);

    guessedNumber.value = "";

    console.log(guessCount);
  }

  // ADD
  function addNumber(text) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = text;
    ul.appendChild(li);
    document.querySelector(".guesses").style.display = "block";
  }

  // CLEAR ALL
  function clearList(event) {
    document.querySelector("ul").innerHTML = "";
  }
});
