const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  // Restart semua variabel game dan elemen UI
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
  keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
  wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
  gameModal.classList.remove("show");
}

const getRandomWord = () => {
  // Memilih soal dan hint dari word-list.js
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
}

const gameOver = (isVictory) => {
  // Setelah 600ms game selesai, menampilkan modalbox yang sesuai dengan hasil
  setTimeout(() => {
    const modalText = isVictory ? `You found the word:` : `The correct word was:`;
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' :  'lost'}.gif`;
    gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!' :  'Game Over!'}`;
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
}

const initGame = (button, clickedLetter) => {
  // Mengecek apakah clickedLetter ada di dalam currentWord
  if(currentWord.includes(clickedLetter)) {
    // Menampilkan semua kata yang benar pada worddisplay
    [...currentWord].forEach((letter, index) => {
      if(letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
    // console.log(clickedLetter, "is exist in the word"); // Apabla jawaban yang ditekan ada
  } else {
    // Jika huruf yang diklik tidak ada, maka update wrongguesscount dan gambar hangman
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    // console.log(clickedLetter, "is not exist in the word"); // Apabila jawaban yang ditekan tidak ada
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

  // Memanggil gameover function jika kondisi ini ketemu
  if(wrongGuessCount === maxGuesses) return gameOver(false);
  if(correctLetters.length ===currentWord.length) return gameOver(true);
}

// Membuat tombol keyboard dan menambah event listener
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);