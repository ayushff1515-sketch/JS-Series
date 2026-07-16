const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.456
// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ***************** Maths ************************

console.log(Math);
console.log(Math.abs(-7.5))
console.log(Math.round(7.5))
console.log(Math.ceil(7.5))
console.log(Math.floor(7.5))
console.log(Math.min(0, 150, 30, 20, -8, -200))
console.log(Math.max(0, 150, 30, 20, -8, -200))
console.log(Math.random())
console.log(Math.floor(Math.random() * 10)) // 0 to 9
console.log(Math.floor(Math.random() * 10) + 1) // 1 to 10
console.log(Math.floor(Math.random() * 10) + 1) // 1 to 10

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)