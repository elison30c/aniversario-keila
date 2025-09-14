<script src="script.js"></script>
const card = document.getElementById("birthdayCard");
const confettiCanvas = document.getElementById('confetti-canvas');

// Configuração do canvas para confetti
confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

card.addEventListener("click", () => {
  card.classList.toggle("open");
  if (card.classList.contains("open")) {
    startConfetti();
  }
});

function startConfetti(){
  const duration = 5000;
  const end = Date.now() + duration;

  (function frame(){
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.5 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.5 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Redimensionar canvas quando a janela for redimensionada
window.addEventListener('resize', function() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

// Adicione esta parte para facilitar o toque em dispositivos móveis
card.addEventListener('touchstart', function() {
  this.classList.toggle("open");
  if (this.classList.contains("open")) {
    startConfetti();
  }
});