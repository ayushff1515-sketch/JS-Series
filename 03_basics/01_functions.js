// console.log("A");
// console.log("Y");
// console.log("U");
// console.log("S");
// console.log("H");

function sayMyName(){
    console.log("A");
console.log("Y");
console.log("U");
console.log("S");
console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//      console.log(number1+number2)
// }


function addTwoNumbers(number1,number2){
    //  let result = number1 + number2
    //  return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
console.log("Result: ",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ayush"))
// console.log(loginUserMessage())

function calculateCartPrice(val1 , val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 1000, 2000))

const user = {
    username: "Ayush",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,399,400,500]))
