const hiragana = [
  { romanji: "a", hiragana: "あ" },
  { romanji: "i", hiragana: "い" },
  { romanji: "u", hiragana: "う" },
  { romanji: "e", hiragana: "え" },
  { romanji: "o", hiragana: "お" },
  { romanji: "ka", hiragana: "か" },
  { romanji: "ki", hiragana: "き" },
  { romanji: "ku", hiragana: "く" },
  { romanji: "ke", hiragana: "け" },
  { romanji: "ko", hiragana: "こ" },
  { romanji: "sa", hiragana: "さ" },
  { romanji: "shi", hiragana: "し" },
  { romanji: "su", hiragana: "す" },
  { romanji: "se", hiragana: "せ" },
  { romanji: "so", hiragana: "そ" },
  { romanji: "ta", hiragana: "た" },
  { romanji: "chi", hiragana: "ち" },
  { romanji: "tsu", hiragana: "つ" },
  { romanji: "te", hiragana: "て" },
  { romanji: "to", hiragana: "と" },
  { romanji: "na", hiragana: "な" },
  { romanji: "ni", hiragana: "に" },
  { romanji: "nu", hiragana: "ぬ" },
  { romanji: "ne", hiragana: "ね" },
  { romanji: "no", hiragana: "の" },
  { romanji: "ha", hiragana: "は" },
  { romanji: "hi", hiragana: "ひ" },
  { romanji: "fu", hiragana: "ふ" },
  { romanji: "he", hiragana: "へ" },
  { romanji: "ho", hiragana: "ほ" },
  { romanji: "ma", hiragana: "ま" },
  { romanji: "mi", hiragana: "み" },
  { romanji: "mu", hiragana: "む" },
  { romanji: "me", hiragana: "め" },
  { romanji: "mo", hiragana: "も" },
  { romanji: "ya", hiragana: "や" },
  { romanji: "yu", hiragana: "ゆ" },
  { romanji: "yo", hiragana: "よ" },
  { romanji: "ra", hiragana: "ら" },
  { romanji: "ri", hiragana: "り" },
  { romanji: "ru", hiragana: "る" },
  { romanji: "re", hiragana: "れ" },
  { romanji: "ro", hiragana: "ろ" },
  { romanji: "wa", hiragana: "わ" },
  { romanji: "wo", hiragana: "を" },
  { romanji: "n", hiragana: "ん" },
];

let current = 0;
let streak = 0;
let maxStreak = 0;

const setRandomHiragana = () => {
  const randomIndex = Math.floor(Math.random() * hiragana.length);
  current = randomIndex;
  document.getElementById("hiragana").textContent = hiragana[current].hiragana;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const input = document.getElementById("quiz-input").value;

  if (input.toLowerCase() === hiragana[current].romanji) {
    streak++;
    maxStreak = streak > maxStreak ? streak : maxStreak;
    document.getElementById("error").style.display = "none";

    localStorage.setItem("streak", streak);
    localStorage.setItem("maxStreak", maxStreak);
  } else {
    const h = hiragana[current].hiragana;
    const r = hiragana[current].romanji;
    document.getElementById(
      "error"
    ).textContent = `Incorrect! The correct answer for "${h}" is "${r}"`;
    document.getElementById("error").style.display = "block";
    streak = 0;
    localStorage.setItem("streak", 0);
  }

  document.getElementById("quiz-input").value = "";
  setRandomHiragana();
  document.getElementById(
    "streak"
  ).textContent = `Streak: ${streak} / Max streak: ${maxStreak}`;
};

const init = () => {
  setRandomHiragana();
  streak = parseInt(localStorage.getItem("streak")) || 0;
  maxStreak = parseInt(localStorage.getItem("maxStreak")) || 0;
  document.getElementById(
    "streak"
  ).textContent = `Streak: ${streak} / Max streak: ${maxStreak}`;
  document.getElementById("quiz-form").addEventListener("submit", handleSubmit);
};

init();
