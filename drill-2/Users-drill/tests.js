import users from "./users.js";
import {
  findInterested,
  findByQualification,
  findByNationality,
  getGroupsByProgram,
} from "./solutions.js";

// Q1 Find all users who are interested in playing video games.
console.log(
  "\n\n\n============================ Problem 1 ============================"
);

console.log(findInterested(users, "Video Games"));
console.log(findInterested());
console.log(findInterested("sda"));
console.log(findInterested(users));

// // // Q2 Find all users staying in Germany.

console.log(
  "\n\n\n============================ Problem 2 ============================"
);
console.log(findByNationality(users, "Germany"));
console.log(findByNationality(users));
console.log(findByNationality());
console.log(findByNationality("sda"));
console.log(findByNationality(users, 123));

// // Q3 Find all users with masters Degree.

console.log(
  "\n\n\n============================ Problem 3 ============================"
);
console.log(findByQualification(users, "Masters"));
console.log(findByQualification(users));
console.log(findByQualification());
console.log(findByQualification("sda"));
console.log(findByQualification(users, 123));

// // Q4 Group users based on their Programming language mentioned in their designation.

console.log(
  "\n\n\n============================ Problem 4 ============================"
);
console.log(getGroupsByProgram(users));
console.log(getGroupsByProgram());
console.log(getGroupsByProgram("sda"));
