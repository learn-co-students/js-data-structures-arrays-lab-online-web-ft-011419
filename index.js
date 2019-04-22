// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

// destructivly append Driver(name)
function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

// destructively prepend drivers
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

// destructively remove drivers 
function destructivelyRemoveLastDriver() {
  drivers.pop();
}

// destructively remove first driver 
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

// append Driver
function appendDriver(name) {
  return newDrivers = [...drivers, name];
}

// prepend Driver
function prependDriver(name) {
  return newDrivers  = [name, ...drivers];
}

// remove last driver in drivers array and return a new array
function removeFirstDriver() {
  return drivers.slice(1);
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}