const myPracticeArray = [1, 2, 3, 4];

const myPracticeArray1 = [1, 2, 3, 4];

const mergedArrays = [...myPracticeArray,...myPracticeArray1]; //this will merge values from both arrays as a single array


let customObj = {
    name:"KK",
    age:25
}

let extendedObj = {
    designation: "developer",
    ...customObj
}