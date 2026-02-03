function nextSection() {
  document.querySelector('.card').style.display = "none";
  document.getElementById('memories').style.display = "block";
}

function goToQuestion() {
  document.getElementById('memories').style.display = "none";
  document.getElementById('question').style.display = "block";
}

function yesClicked() {
  document.getElementById("response").innerHTML =
    "I knew it 😌❤️ Happy Valentine’s Day, Mo Geluu 💕";

  for (let i = 0; i < 40; i++) {
    createHeart();
  }
}


function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}


function moveButton(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "vh";
  btn.style.left = Math.random() * 80 + "vw";
}

let isPlaying = false;

function toggleMusic() {
  const music = document.getElementById("bg-music");

  if (!isPlaying) {
    music.play();
    isPlaying = true;
  } else {
    music.pause();
    isPlaying = false;
  }
}





