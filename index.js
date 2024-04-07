import { prompt } from "./prompt.js";

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const setTargetNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log(`Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between ${MIN_VALUE} and ${MAX_VALUE}.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
`);

const game = () => {
  const targetNumber = setTargetNumber(MIN_VALUE, MAX_VALUE);
  let attemptsAccount = 0;

  const gameProcess = () => {
    const attempt = Number(prompt("Enter a number: "));
    attemptsAccount++;
    if (!isNaN(attempt) && (attempt < MIN_VALUE || attempt > MAX_VALUE)) {
      console.log(
        `🚫 Please enter a number between ${MIN_VALUE} and ${MAX_VALUE}.`
      );
      gameProcess();
      return;
    }
    if (attempt > targetNumber) {
      console.log("📈 The entered number is too big.");
      gameProcess();
      return;
    }
    if (attempt < targetNumber) {
      console.log("📉 The entered number is too small.");
      gameProcess();
      return;
    }
    console.log(
      `Congratulations ! The random number was indeed ${targetNumber}. You found it within ${attemptsAccount} attempts.`
    );
    const playAgain = prompt("Do you want to play again? (Y/N): ");
    if (playAgain.toLowerCase() === "y") {
      game();
      return;
    }
  };

  gameProcess();
};
game();
