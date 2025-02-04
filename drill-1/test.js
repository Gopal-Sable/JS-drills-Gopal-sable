import arrayOfObjects from "./persons.js";
import {
  getEmails,
  hobbiesOfAge,
  isStudentLivesIn,
  objectAt,
  getAges,
  firstHobby,
  getNameAndEmail,
  getAddress,
} from "./solutions.js";

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
console.log("\n\n\n________________problem one _______________");

console.log("Answer with correct argument:", getEmails(arrayOfObjects));
console.log("with empty array as parameter: ", getEmails([]));
console.log("without passing arguments", getEmails());
console.log("with passing different parameter", getEmails(123));
console.log("with passing different parameter", getEmails("abc"));

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
console.log("\n\n\n_____________problem two ______________");
console.log("With correct arguments:", hobbiesOfAge(arrayOfObjects, 30));
console.log(
  "Providng different parameter type:",
  hobbiesOfAge(arrayOfObjects, "abc")
);
console.log("without parameter:", hobbiesOfAge());
console.log("Providing different data type:", hobbiesOfAge(30, arrayOfObjects));
console.log("only first argument:", hobbiesOfAge(arrayOfObjects));

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
console.log("\n\n\n__________problem three ____________");
console.log(
  "Answer with correct argument:",
  isStudentLivesIn(arrayOfObjects, "India")
);
console.log("with empty array as parameter: ", isStudentLivesIn([]));
console.log("without passing arguments:", isStudentLivesIn());
console.log("with passing different parameter:", isStudentLivesIn(123));
console.log("with passing different parameter:", isStudentLivesIn("abc"));

//  //    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
console.log("\n\n\n__________problem Four ____________");
console.log("Answer with correct argument:", objectAt(arrayOfObjects, 3));
console.log("with empty array as parameter: ", objectAt([]));
console.log("without passing arguments:", objectAt());
console.log("with passing different parameter:", objectAt(123));
console.log(
  "with passing different parameter:",
  objectAt(arrayOfObjects, "abc")
);

//    Implement a loop to access and print the ages of all individuals in the dataset.
console.log("\n\n\n__________problem Five ____________");
console.log("Answer with correct argument:", getAges(arrayOfObjects));
console.log("with empty array as parameter: ", getAges([]));
console.log("without passing arguments:", getAges());
console.log("with passing different parameter:", getAges(123));

//    Create a function to retrieve and display the first hobby of each individual in the dataset.
console.log("\n\n\n__________problem Six ____________");
console.log("Answer with correct argument:", firstHobby(arrayOfObjects));
console.log("with empty array as parameter: ", firstHobby([]));
console.log("without passing arguments:", firstHobby());
console.log("with passing different parameter:", firstHobby(123));

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

console.log("\n\n\n__________problem Seven ____________");
console.log(
  "Answer with correct argument:",
  getNameAndEmail(arrayOfObjects, 25)
);
console.log("with empty array as parameter: ", getNameAndEmail([]));
console.log("without passing arguments:", getNameAndEmail());
console.log(
  "with passing different parameter:",
  getNameAndEmail(arrayOfObjects, "abc")
);

// //    Implement a loop to access and log the city and country of each individual in the dataset.

console.log("\n\n\n__________problem eight ____________");
console.log("Answer with correct argument:", getAddress(arrayOfObjects));
console.log("with empty array as parameter: ", getAddress([]));
console.log("without passing arguments:", getAddress());
console.log("with passing different parameter:", getAddress("abc"));
