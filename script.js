const jonas = {
  year: 1980,
  calcAge: function() {
    return 2021 - this.year
  }
}

console.log(jonas.calcAge())

const gary = {
  year: 1998
}

gary.calcAge = jonas.calcAge

console.log(gary.calcAge())

// Note: only var variable gets added as property to the window object 
var year = 2030

const calcAgeGlobal = jonas.calcAge

console.log(calcAgeGlobal())