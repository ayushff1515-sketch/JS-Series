const name = "Ayush"
const repocount = 5

// console.log(name + repocount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gamename = new String("GTASanAndreas")

// console.log(gamename[0])
// console.log(gamename.__proto__)

// console.log(gamename.length)
// console.log(gamename.toUpperCase())
// console.log(gamename.charAt(2))
// console.log(gamename.indexOf("A"))

// const newString = gamename.substring(0,4)
// console.log(newString)

const anotherString = gamename.slice(-1,4)
console.log(anotherString)

const myString = "    Hello World    "
console.log(myString)
console.log(myString.trim())

const url = "https://www.google.com"
console.log(url.replace('https','http'))

console.log(url.includes('google'))

console.log(gamename.split('A'))