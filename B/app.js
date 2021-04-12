import * as model from "./model.js";
const main = document.querySelector(".main");

const dataRender = async () => {
  await model.getData();
  console.log(model.state.results);

  model.state.results.map((data) => {
    const markup = `
   <h2>Questions ${data.id}</h2>
   <p>Category: ${data.category}</p>
   <p>Type: ${data.type}</p>
   <p>Difficulty: ${data.difficulty}</p>
   <p>Question: ${data.question}</p>
   <form class="choose">
    ${data.incorrectAnswer.map((each) => {
      return `
     <input class="btn-quiz" type="radio" name="question_01" value="false"> ${each}<br>
     `;
    })}
    <input class="btn-quiz" type="radio" name="question_01" value="true"> ${
      data.correctAnswer
    }<br>
   </form>
   <p>Correct Answer: ${data.correctAnswer}</p>
   <p>Incorect Answer: ${data.incorrectAnswer}</p>
   `;
    main.insertAdjacentHTML("afterbegin", markup);
  });

  const controlQuiz = () => {
    main.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-quiz");
      console.log(btn);
      if (!btn) return;
      if (btn.value === "false") {
        alert("wrong");
      }
      if (btn.value === "true") {
        alert("bingo, +10");
      }
    });
    controlQuiz();
  };
};

const init = () => {
  dataRender();
};
init();
