document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  let currentCard = 0;
  let isFlipped = false;

  const cardElement = document.querySelector(".card");
  const progressBar = document.querySelector(".progress-bar");
  const flipButton = document.getElementById("flipBtn");

  function updateDisplay() {
      console.log("Updating display");

      const q = questions[currentCard];
      const cardFront = document.querySelector(".card-front");
      const cardBack = document.querySelector(".card-back");

      // Front: Show the question
      cardFront.innerHTML = `<h2>${q.question}</h2>`;

      // Back: Show the correct answer(s)
      cardBack.innerHTML = `<h3>Correct Answer:</h3> ${
          Array.isArray(q.correct_answers)
              ? q.correct_answers.map((a) => `<p>${a}</p>`).join("")
              : `<p>${q.correct_answers}</p>`
      }`;

      // Reset flip state when switching questions
      isFlipped = false;
      cardElement.classList.remove("flipped");

      // Update progress bar
      progressBar.style.width = `${((currentCard + 1) / questions.length) * 100}%`;

      // Update question counter
      document.getElementById("current").textContent = currentCard + 1;
      document.getElementById("total").textContent = questions.length;
  }

  function toggleFlip() {
      isFlipped = !isFlipped;
      cardElement.classList.toggle("flipped", isFlipped);
      console.log("Flip triggered");
  }

  function prevCard() {
      currentCard = (currentCard - 1 + questions.length) % questions.length;
      updateDisplay();
  }

  function nextCard() {
      currentCard = (currentCard + 1) % questions.length;
      updateDisplay();
  }

  // Attach event listeners
  document.getElementById("prevBtn").addEventListener("click", prevCard);
  document.getElementById("nextBtn").addEventListener("click", nextCard);
  cardElement.addEventListener("click", toggleFlip); // Click anywhere on the card to flip
  if (flipButton) {
      flipButton.addEventListener("click", toggleFlip); // Flip button should still work
  }

  // Initialize the display
  updateDisplay();
});