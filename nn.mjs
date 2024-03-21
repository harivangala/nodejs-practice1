// let {a, b} = require('./n.js')
// console.log(a + b)

// import {str, a} from './n.mjs'
// console.log(str)
// console.log(a)

// import {sum, sub} from './n.mjs'
// console.log(sum(1, 2))
// console.log(sub(3, 2))

import {StudentDetails, CarDetails} from './n.mjs'

const std1 = new StudentDetails('ABC', 30)
console.log(std1)
const car1 = new CarDetails('Dezire', 'Top-end')
console.log(car1)
