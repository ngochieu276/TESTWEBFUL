export const state = {
  results: [],
};

export const getData = async () => {
  try {
    const getData = await fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    );
    const data = await getData.json();
    state.results = data.results.map((dat, i) => {
      return {
        id: i + 1,
        category: dat.category,
        type: dat.type,
        difficulty: dat.difficulty,
        question: dat.question,
        correctAnswer: dat.correct_answer,
        incorrectAnswer: dat.incorrect_answers,
      };
    });
  } catch (err) {
    console.log(err);
  }

  console.log(state.results);
};
