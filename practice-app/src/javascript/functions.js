
function myPracticeFunction()
{
    let myString = "text value";
    let myInt = 1;
    let myDecimal = 1.56;
    let myBoolean = true;
    let myConst = "this is constant value which can not be modified.;"

    console.log(myString);
    console.log(myInt);
    console.log(myDecimal);
    console.log(myBoolean);
    console.log(myConst);
}

function myOptionalParameterFunction(userName,message = "Hello")
{
    console.log(userName);
    console.log(message);

}

function myValReturnFunction()
{
    return "This is returned value";
}

myPracticeFunction();

myOptionalParameterFunction("KK");

myOptionalParameterFunction("KK","custom message");

let returnedVal = myValReturnFunction();

console.log(returnedVal);



// anonymous functions

// only one default will be there

// export default function(){
//     console.log("abc");
// }

// export default ()=>{
//     console.log("abc");
// }

// export default (userName)=>{
//     console.log("abc"+userName);
//     return "ab";
// }