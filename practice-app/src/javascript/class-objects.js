class MyPracticeClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName()
  {
    console.log(this.firstName+this.lastName)
    return this.firstName+this.lastName;
  }
}

let obj1 = new MyPracticeClass("kk","Siripuram");

console.log(obj1);

obj1.getFullName();

let customObj = {
    name:"KK",
    age:25
}

console.log(customObj);