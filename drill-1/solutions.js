//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getEmails(arr) {
  // let emails=[]
  try {
    if (!arr) return "Array not found";
    const emails = arr.map((ele) => {ele.email});
    return emails;
  } catch (e) {
    return e.name;
  }
}


//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function hobbiesOfAge(arr, age) {
  try {
    if (arr.length == 0) return "Empty array";
    if (age == NaN) return "Invalid Age";
    const hobbies = arr
      .filter((hobby) => hobby.age === age)
      .map((hobby) => hobby.hobbies);
    return hobbies;
  } catch (error) {
    return error.name;
  }
}

//  Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function isIndividualLivesIn(arr, isStudent, country) {
  const persons = arr
    .filter((person) => person.isStudent && person.country == country)
    .map((person) => person.name);
  // let persons=[];
  // arr.forEach(ele => {
  //    if (ele.isStudent==isStudent && ele.country==country) {
  //       persons.push([ele.id,ele.name])
  //    }
  // });
  return persons;
}


//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function objectAt(arr, index) {
  const result = arr
    .filter((element, idx) => idx == index)
    .map((element) => ({ name: element.name, city: element.city }));
  // console.log(result);

  // return [arr[index].name,arr[index].city];
  return result;
}

//    Implement a loop to access and print the ages of all individuals in the dataset.
function getAges(arr) {
  return arr.map((person) => person.age);
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.
function firstHobby(arr) {
  const hobbies = arr.map((person) => {
    return person.hobbies[0];
  });
  return hobbies;
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function getNameAndEmail(arr, age) {
  const result = arr
    .filter((element) => element.age == age)
    .map((element) => ({ name: element.name, email: element.email }));
  return result;
}

//    Implement a loop to access and log the city and country of each individual in the dataset.
function getAddress(arr) {
  return arr.map((address) => ({
    city: address.city,
    country: address.country,
  }));
}

export {
  getEmails,
  hobbiesOfAge,
  isIndividualLivesIn,
  objectAt,
  getAges,
  firstHobby,
  getNameAndEmail,
  getAddress,
};
