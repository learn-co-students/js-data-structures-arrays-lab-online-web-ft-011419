const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return newDrivers = [...drivers, name];
}

function prependDriver(name) {
  return newDrivers  = [name, ...drivers];
}

function removeFirstDriver() {
  return drivers.slice(1);
}

 function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}
