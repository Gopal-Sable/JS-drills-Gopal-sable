import inventory from "./cars.js";
import cars from "./cars.js";
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

function carOfId(cars, id) {
  if (cars == null) {
    console.log("provide non empty array");
    return;
  }
  if (!Array.isArray(cars)) {
    console.log("Provide a array.");
    return;
  }
  if (!Number.isInteger(id)) {
    console.log("Invalid id");
    return;
  }
  const data = cars.filter((car) => {
    return car.id == id;
  });
  if (data.length == 0) {
    console.log("Data not found");
    return;
  }

  data.forEach((car) => {
    console.log(
      `Car ${car.id} is a ${car.car_year} ${car.car_make} ${car.car_model} `
    );
  });
}

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");
function lastCar(cars) {
  if (cars == null) {
    console.log("provide non empty array");
    return;
  }
  if (!Array.isArray(cars)) {
    console.log("Provide a array.");
    return;
  }

  let lastIndex = cars.length - 1;
  if (lastIndex < 0) {
    console.log("Empty array");
    return;
  }
  const data = cars[lastIndex];
  console.log(`Last car is a ${data.car_make} ${data.car_model}`);
}

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function sortCarsAlphabetically(cars) {
  if (!Array.isArray(cars)) {
    console.log("Provide a array.");
    return;
  }
  // if () {

  // }
  // cars.hasOwnsProperty("")
  let data = cars.sort((a, b) => {
    // if (a.car_model b.car_model) return a.year - b.year;
    if (a.hasOwnProperty("car_model") && b.hasOwnProperty("car_model")) {
      return a.car_model.localeCompare(b.car_model);
    }
  });

  console.log(data);
}

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function carYears(cars) {
  if (!Array.isArray(cars)) {
    return "Provide a array.";
  }
  const data = cars.map((car) => {
    return car.car_year;
  });
  return data;
}

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function carsOlderthan(years, old) {
  const data = years.filter((year) => {
    return year < old;
  }); 
  console.log(data, data.length);
}
// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
function carsOfBrands(arr, brand1, brand2) {
  const brands = arr.filter((car) => {
    return car.car_make == brand1 || car.car_make == brand2;
  });
  console.log(JSON.stringify(brands));
}

carsOfBrands(inventory, "Audi", "BMW");

export { carOfId, lastCar, sortCarsAlphabetically, carYears, carsOlderthan };
