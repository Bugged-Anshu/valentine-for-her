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
    "You just made me the happiest person alive 😭❤️";
}

function moveButton(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "vh";
  btn.style.left = Math.random() * 80 + "vw";
}
