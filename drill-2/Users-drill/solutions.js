// Q1 Find all users who are interested in playing video games.
function findInterested(users, hobby) {
  let userWithInterset = [];
  for (let key in users) {
    users[key].interests.forEach((interest) => {
      if (interest.includes(hobby)) {
        userWithInterset.push(users[key]);
      }
    });
  }
  console.log(userWithInterset);
}

// Q2 Find all users staying in Germany.
function findByNationality(users, nation) {
  let data = [];
  for (const user in users) {
    if (users[user].nationality == nation) {
      data.push(users[user]);
    }
  }
  return data;
}


// Q3 Find all users with masters Degree.
function findByQualification(users,qualification) {
    let data = [];
    for (const user in users) {
      if (users[user].qualification == qualification) {
        data.push(users[user]);
      }
    }
    return data;
  }
  
// Q4 Group users based on their Programming language mentioned in their designation.
function getGroupsByProgram(users) {
    let data = {} //[["Golang"],["JavaScript"], ["Python"]];
    for (const user in users) {
      users[user].desgination.split(" ").map(language=>{
        if (["Golang","Javascript", "Python"].includes(language)) {
            if (!data[language]) {
              data[language]=[]
            }
            data[language].push(users[user])
        }
      }) 
    }
    return data;
  }

export { findInterested, findByNationality, findByQualification, getGroupsByProgram };
