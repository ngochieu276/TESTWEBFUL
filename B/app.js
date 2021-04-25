import { state, getData } from "./helpFunc.js";
const main = document.querySelector(".main");

const showData = async () => {
  await getData();

  state.results.map((rel) => {
    const markup = `
    <div class="Question>
   <h2 class="Question-title">Questions ${rel.id}</h2>
   <p class="Category">Category: ${rel.category}</p>
   <p class="Type">Type: ${rel.type}</p>
   <p>Difficulty: ${rel.difficulty}</p>
   <p>Question: ${rel.question}</p>
   <form class="choose">
    ${rel.incorrectAnswer.map((each) => {
      return `
     <input class="btn-quiz" type="radio" name="question_01" value="false"> ${each}<br>
     `;
    })}
    <input class="btn-quiz" type="radio" name="question_01" value="true"> ${
      rel.correctAnswer
    }<br>
   </form>
   <p>Correct Answer: ${rel.correctAnswer}</p>
   <p>Incorect Answer: ${rel.incorrectAnswer}</p>
   </div>
   `;
    main.insertAdjacentHTML("afterbegin", markup);
  });
};

showData();
