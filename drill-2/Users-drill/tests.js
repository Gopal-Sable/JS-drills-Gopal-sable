import users from "./users.js";
import { findInterested, findByQualification, findByNationality } from "./solutions.js";

// Q1 Find all users who are interested in playing video games.
findInterested(users,"Playing Video Games");



// Q2 Find all users staying in Germany.
console.log(findByNationality(users,"Germany"));

  
// Q3 Find all users with masters Degree.

console.log(findByQualification(users,"Masters"));


// Q4 Group users based on their Programming language mentioned in their designation.
console.log(getGroupsByProgram(users));