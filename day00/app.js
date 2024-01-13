// variables
// most used variable-const

let fname="hello"
fname="hk"
// difference between let and var
// you cannot redeclare let variable with same name

// block scope vs function scope
// var is function scope
// let is block scope
// const is block scope

// const
// const variable cannot be reassigned
// const variable must be assigned a value when declared

const pi=3.14
// pi=3.15
console.log(pi)
console.log(a) //const and let variables are not hoisted
var a=10
console.log(add(2,3))
function add(a,b){ // function declaration
    return a+b;
}
// console.log(add1(2,3))
const add1=function(a,b){ // function expression 
    return a+b;
}
console.log(add1(2,3))