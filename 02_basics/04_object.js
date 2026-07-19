// const tinderUnser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "someone@gmail.com",
    fullname:{
        userfullname : {
            firstname : "Ayush",
            lastname : "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {4: "e", 5: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

const users =[
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))
// console.log(tinderUser.hasOwnProperty("isLogged"))


const course = {
    coursename: "JS-Series",
    price: "666",
    courseInstructor: "Ayush"
}
// course.courseInstructor

const{courseInstructor : instructor} = course
console.log(instructor)

// {
//     "name": "Ayush",
//     "coursename":"JS Series"
//     "price":"free"
// }

[
    {},
    {},
    {}
]
