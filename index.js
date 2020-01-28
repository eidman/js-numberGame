document.addEventListener("DOMContentLoaded", function() {
  loadEvents();
  // load every event in the page
  let numberMax = 100;
  let randomNumber = Math.ceil(Math.random() * 100);

  function checkStatus(guessedNumber) {
    if (isNaN(guessedNumber)) {
      return `you must guess a number you fool!`;
    } else if (guessedNumber < 1 || guessedNumber > numberMax) {
      return `you must guess a number between 1 and 100!`;
    } else if (randomNumber > guessedNumber) {
      return `the number you seek is greater than ${guessedNumber}`;
    } else if (randomNumber < guessedNumber) {
      return `the number you seek is less than ${guessedNumber}`;
    } else if (guessedNumber == randomNumber) {
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
    if (guessedNumber.value != "") addNumber(guessedNumber.value);
    guessedNumber.value = "";
  }

  // ADD
  function addNumber(number) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = checkStatus(number);
    ul.appendChild(li);
    document.querySelector(".guesses").style.display = "block";
  }

  // CLEAR ALL
  function clearList(event) {
    document.querySelector("ul").innerHTML = "";
  }
});
