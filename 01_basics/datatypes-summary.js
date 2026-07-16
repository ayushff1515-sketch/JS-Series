// Primitive 

// 7 types : String, Number, Boolean, Null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 347837438178719893n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj={
    name: "ayuhs",
    age: 20
}

const MyFunction = function(){
    console.log("Hello World")
}
console.log(typeof anotherId)


// Type of val	Result
// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"