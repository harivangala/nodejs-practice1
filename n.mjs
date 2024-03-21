// let a = 5
// exports.a = a
// let b = 10
// exports.b = b

// export let a = 20
// export let str = 'Hello'

// function sum(n1, n2) {
//   return n1 + n2
// }

// function sub(n1, n2) {
//   return n1 - n2
// }

// export {sum, sub}

class StudentDetails {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class CarDetails {
  constructor(carName, model) {
    this.name = carName
    this.model = model
  }
}

export {StudentDetails, CarDetails}
