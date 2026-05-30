document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  quiz.addEventListener("submit", (event) => {
    event.preventDefault();

    let correct = 0;
    const questions = [...quiz.querySelectorAll(".quiz-question")];

    questions.forEach((question) => {
      const answer = question.dataset.answer;
      const selected = question.querySelector("input:checked");
      const isCorrect = selected?.value === answer;

      question.classList.remove("correct", "incorrect");
      question.classList.add(isCorrect ? "correct" : "incorrect");

      if (isCorrect) correct += 1;
    });

    const result = quiz.querySelector(".quiz-result");
    result.textContent = `${correct} из ${questions.length}. ${
      correct === questions.length ? "Отлично, можно идти дальше." : "Проверь красные ответы и попробуй еще раз."
    }`;
  });
});
