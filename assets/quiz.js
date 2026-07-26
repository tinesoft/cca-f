// Shared quiz widget for CCA-F lessons.
// Usage: <div class="quiz" data-quiz data-correct="1">
//          <div class="quiz-question">...</div>
//          <div class="quiz-options">
//            <button class="quiz-option">...</button>  (index 0)
//            <button class="quiz-option">...</button>  (index 1, correct)
//          </div>
//          <div class="quiz-feedback" data-correct-text="..." data-incorrect-text="..."></div>
//        </div>
// Call initQuizzes() once after DOMContentLoaded.

function initQuizzes() {
  document.querySelectorAll("[data-quiz]").forEach((quiz) => {
    const correctIndex = parseInt(quiz.dataset.correct, 10);
    const options = Array.from(quiz.querySelectorAll(".quiz-option"));
    const feedback = quiz.querySelector(".quiz-feedback");

    options.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        if (quiz.dataset.answered) return;
        quiz.dataset.answered = "true";

        options.forEach((b, j) => {
          b.disabled = true;
          if (j === correctIndex) b.classList.add("correct");
          else if (j === i) b.classList.add("incorrect");
        });

        if (feedback) {
          const isCorrect = i === correctIndex;
          feedback.textContent = isCorrect
            ? feedback.dataset.correctText || "Correct."
            : feedback.dataset.incorrectText || "Not quite.";
          feedback.classList.add("shown", isCorrect ? "correct-text" : "incorrect-text");
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", initQuizzes);
