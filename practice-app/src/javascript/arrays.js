const myPracticeArray = [1, 2, 3, 4];

myPracticeArray.push(5);

console.log(myPracticeArray);

console.log(myPracticeArray[2]);

const val = myPracticeArray.findIndex((val) => val === 2);

console.log(val);

// this will return edited values of array but source array will not be changed. 
const editedValues = myPracticeArray.map((item) => item + 5);

const valuesToObject = myPracticeArray.map((item) => ({ arrayItem: item}));

console.log(editedValues);

console.log(valuesToObject);


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
