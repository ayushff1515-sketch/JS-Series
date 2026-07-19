//singleton 
// Object.create
// objeect literals



const mySym = Symbol("key1")

const JsUser = {
    name: "Ayush",
    [mySym]: "mykey1",
    age: 20,
    loaction: "Ranchi",
    email: "ayushff1515@gmail.com",
    isloggedIn: false,
    LastLoginDays: ["monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email = "ayush@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@chatgpt@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());