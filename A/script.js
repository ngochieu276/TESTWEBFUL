const A1 = [1, 2, "a"];
const A2 = [1, 3, "b"];

const ghepMang = (array1, array2) => {
  for (let i = 0; i < array1.length - 1; i++) {
    for (let j = 0; j < array2.length - 2; j++) {
      if (array1[i] === array2[j]) {
        array1.splice(i, 1);
        array1.splice(j, 1);
      }
    }
  }
  const array = array1.concat(array2);
  console.log(array);
};
ghepMang(A1, A2);

const array = [
  {
    name: "Arsenal",
    points: 99,
    GD: 45,
  },
  {
    name: "MU",
    points: 98,
    GD: 43,
  },
  {
    name: "MCT",
    points: 98,
    GD: 45,
  },
  {
    name: "Dortmun",
    points: 100,
    GD: 47,
  },
];

const rank = (array) => {
  array.sort((a, b) => {
    return b.points - a.points;
  });

  const array1 = array.map((arr, i) => {
    return {
      ...arr,
      position: i + 1,
    };
  });
  console.log(array1);
};
rank(array);
