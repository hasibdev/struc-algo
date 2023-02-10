interface User {
  name: string
  role: string
  property: number
}

interface Admin {
  name: string
  role: string
  forAdmin: number
}

type Unknow = User | Admin

function showInfo(u: Unknow) {
  if ('property' in u) {
    console.log(u.property)
  }
  if ('forAdmin' in u) {
    console.log(u.forAdmin)
  }
}

class Car {
  drive() {
    console.log('Driving Car')
  }
}

class Truck {
  drive() {
    console.log('Driving Truck...')
  }

  loadCargo() {
    console.log('Loading cargo...')
  }
}

type Vehicle = Car | Truck

const car: Car = new Car()
const truck: Truck = new Truck()

function runVehicle(c: Vehicle) {
  if (c instanceof Truck) {
    c.loadCargo()
  }
}

export { }