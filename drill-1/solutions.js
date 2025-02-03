
function isValidArr(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length == 0){
    return false;
  } 
  return true;
}

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getEmails(arr) {
  try {
    if (!isValidArr(arr)) return "Array not found";

    const emails = arr.map((ele) => {
      return ele.email;
    });
    return emails;
  } catch (e) {
    return e.name;
  }
}

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function hobbiesOfAge(arr, age) {
  try {
    if (!isValidArr(arr)) {
      return "Empty array or not an array";
    }
  
    if (isNaN(age) || age==null) {
      return "Invalid Age";
    }
    
    const hobbies = arr
      .filter((hobby) => hobby.age == age)
      .map((hobby) => hobby.hobbies);

    if (hobbies.empty) {
      return "No data found"
    }
    return hobbies;
  } catch (error) {
    return error.name;
  }
}

//  Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function isStudentLivesIn(arr, country) {
  if (!isValidArr(arr)) {
    return "Empty array or not an array";
  }
  if (country == undefined || country==null) {
    return "Provide a country name";
  }

  const persons = arr
    .filter((person) => person.isStudent && person.country == country)
    .map((person) => person.name);
  return persons;
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function objectAt(arr, index) {
  if (!isValidArr(arr)) {
    return "Empty array or not an array";
  }

  if (!Number.isInteger(index)  || index==-1 || index>=arr.length) {
    return "Invalid index";
  }

  const result = arr
    .filter((element, idx) => idx == index)
    .map((element) => ({ name: element.name, city: element.city }));
  return result;
}

//    Implement a loop to access and print the ages of all individuals in the dataset.
function getAges(arr) {
  if (!isValidArr(arr)) {
    return "Empty array or not an array";
  }
  const result= arr.map((person) => person.age);
  if (result.length==0) {
    return "No result found"
  }
  return result;
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.
function firstHobby(arr) {
  if (!isValidArr(arr)) {
    return "Empty array or not an array";
  }

  const hobbies = arr.map((person) => {
    return person.hobbies[0];
  });
  return hobbies;
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function getNameAndEmail(arr, age) {
  if (!isValidArr(arr)) {
    return "Empty array or not an array";
  }
  if (!Number.isInteger(age)) {
    return "Invalid Age";
  }
  
  const result = arr
    .filter((element) => element.age == age)
    .map((element) => ({ name: element.name, email: element.email }));
  return result;
}

//    Implement a loop to access and log the city and country of each individual in the dataset.
function getAddress(arr) {
  if (!isValidArr(arr)) {
    return "Empty array or not an array";
  }
  return arr.map((address) => ({
    city: address.city,
    country: address.country,
  }));
}

export {
  getEmails,
  hobbiesOfAge,
  isStudentLivesIn,
  objectAt,
  getAges,
  firstHobby,
  getNameAndEmail,
  getAddress,
};
