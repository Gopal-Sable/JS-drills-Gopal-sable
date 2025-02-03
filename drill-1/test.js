import {
  getEmails,
  hobbiesOfAge,
  isIndividualLivesIn,
  objectAt,
  getAges,
  firstHobby,
  getNameAndEmail,
  getAddress,
} from "solution";
import arrayOfObjects from "persons.js";


//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
 console.log(getEmails(arrayOfObjects));
    
// console.log(getEmails(arrayOfObjects));
//  console.log(getEmails());
//  console.log();
 
 //    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

 
 console.log(hobbiesOfAge(arrayOfObjects,30));


// console.log(hobbiesOfAge(arrayOfObjects,30));
// console.log(hobbiesOfAge());
// console.log(hobbiesOfAge(30,arrayOfObjects));
// console.log(hobbiesOfAge(arrayOfObjects));
// console.log(hobbiesOfAge(30));

 
 //    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

 
 console.log(isIndividualLivesIn(arrayOfObjects,true,"India"));
 //  console.log(isIndividualLivesIn(arrayOfObjects,true,"Australia"));

 
 //    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
       
      console.log(objectAt(arrayOfObjects,3));
 
 //    Implement a loop to access and print the ages of all individuals in the dataset.
       
console.log(getAges(arrayOfObjects));
 
 //    Create a function to retrieve and display the first hobby of each individual in the dataset.
 
console.log(firstHobby(arrayOfObjects));
 //    Write a function that accesses and prints the names and email addresses of individuals aged 25.
 
console.log(getNameAndEmail(arrayOfObjects, 25));
 //    Implement a loop to access and log the city and country of each individual in the dataset.
 
console.log(getAddress(arrayOfObjects));