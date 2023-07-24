"use strict";

const check = document.querySelector(".check");
const num = Math.floor(Math.random() * 20) + 1;
let score = 20;
const again = document.querySelector(".again");
const msg = document.querySelector(".message");
let highscore = 0;

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(num);
  // when there is no input
  if (!guess) {
    msg.textContent = "⛔ No Number";
  } else if (!(guess >= 1 && guess <= 20)) {
    msg.textContent = "⚠️ Enter a valid number between 1 and 20";
  } else {
    // when guess is crct
    if (guess === num) {
      msg.textContent = "🎉 Correct Number";
      document.querySelector(".question span").textContent = num;
      document.querySelector(".question span").style.padding = "1rem 2rem";
      document.body.style.backgroundColor = "#60b347";
      document.querySelector(".guess").style.backgroundColor = "#60b347";
      document.querySelector(".highscore").textContent =
        score > highscore ? score : highscore;
      // when guess is not crct
    } else {
      // if score == 0 then
      if (score <= 1) {
        msg.textContent = "You lost the game☹️";
        document.querySelector(".score").textContent = 0;
        // when score > 1
      } else {
        // when guess is too high
        if (guess >= num) {
          msg.textContent = "📈 Too high";
          // when guess is too low
        } else {
          msg.textContent = "📉 Too low";
        }
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  }
});

// on click agian reset
again.addEventListener("click", function () {
  score = 20;
  document.querySelector(".question span").textContent = "?";
  document.querySelector(".question span").style.padding = "1rem";
  document.querySelector(".score").textContent = score;
  document.body.style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  msg.textContent = "Start guessing...";
});
