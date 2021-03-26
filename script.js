// const jonas = {
//   year: 1980,
//   calcAge: function() {
//     return 2021 - this.year
//   }
// }

// console.log(jonas.calcAge())

// const gary = {
//   year: 1998
// }

// gary.calcAge = jonas.calcAge

// console.log(gary.calcAge())

// // Note: only var variable gets added as property to the window object 
// var year = 2030

// const calcAgeGlobal = jonas.calcAge

// console.log(calcAgeGlobal())

// arguments is not accessible in arrow functions
const addExpr = function(a, b) {
  console.log(arguments)
  return a + b
}

addExpr(1, 2, 3, 4, 5, 6)

// It's a misconception that all values declared with const are immutable.
// It's only true for primitive types and not for reference types.
// This is because while changing the object, we are not changing the heap reference.

// Reference types ==> Objects can be very large, hence they are stored in heap memory
// While primitive types are stored directly in the variable environment.

// Primitive values example
let age = 30
oldAge = age
age = 31
console.log(age, oldAge)

const me = {
  name: 'Gagandeep',
  age: 22,
  family: ['A', 'B', 'C']
}

const friend = me
friend.age = 24

console.log({ friend, me })

/*

Identifier          Address             Value
age, oldAge         0001                30
------
Later
------
Identifier          Address             Value
oldAge              0001                30
age                 0002                20
me, friend          0003                D30F(Reference to memory address in heap)


Heap
Address         Value
D30F            { name: 'Gagandeep', age = 24 }

*/


/* 
  Prototypal Inheritance
  Event Loop
  How DOM really works
*/

const meCopy = Object.assign({}, me)

meCopy.age = 35
// Note: It's important that while using Object.assign we use empty object as the
// target to ensure that a new object is created.
// Object.assign only does a shallow copy 
meCopy.family.push('Z')
console.log({ me, meCopy, friend })