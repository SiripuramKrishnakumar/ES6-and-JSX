

const [a,b,c] = [1,2,3];

console.log(a);
console.log(b);
console.log(c);

const {name:userName,age} = {
    name:"kk",
    age:25
}

console.log(userName);
console.log(age);


function storeOrder({id, currency}) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
  }