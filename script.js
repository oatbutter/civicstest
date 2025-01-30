document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded");

  let currentCard = 0;
  let isFlipped = false;

  function updateDisplay() {
      console.log("Updating display");
      const q = questions[currentCard];

      const cardFront = document.querySelector(".card-front");
      const cardBack = document.querySelector(".card-back");

      // Ensure front shows only the question
      cardFront.innerHTML = `<h2>${q.question}</h2>`;

      // Ensure back shows only the answer
      cardBack.innerHTML = `<h3>Correct Answer:</h3> ${
          Array.isArray(q.correct_answers)
              ? q.correct_answers.map((a) => `<p>${a}</p>`).join("")
              : `<p>${q.correct_answers}</p>`
      }`;

      // Reset flipped state when switching questions
      isFlipped = false;
      document.querySelector(".card").classList.remove("flipped");

      // Update progress bar
      const progressBar = document.querySelector(".progress-bar");
      progressBar.style.width = `${((currentCard + 1) / questions.length) * 100}%`;

      // Update question count
      document.getElementById("current").textContent = currentCard + 1;
      document.getElementById("total").textContent = questions.length;
  }

  function toggleFlip() {
      const card = document.querySelector(".card");
      isFlipped = !isFlipped;
      card.classList.toggle("flipped", isFlipped);
      console.log("Flip button clicked");
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
  document.getElementById("flipBtn").addEventListener("click", toggleFlip);

  // Initialize the display
  updateDisplay();
});
