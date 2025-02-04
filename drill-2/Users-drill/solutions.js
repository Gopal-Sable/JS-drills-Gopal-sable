// Q1 Find all users who are interested in playing video games.
function findInterested(users, hobby) {
  if (typeof users != "object") {
    return "Please provide a object";
  }
  if (hobby == null) {
    return "Provide hobby";
  }
  let userWithInterset = [];
  for (let key in users) {
    users[key].interests.forEach((interest) => {
      if (interest.includes(hobby)) {
        userWithInterset[key] = users[key];
      }
    });
  }
  return userWithInterset;
}

// Q2 Find all users staying in Germany.
function findByNationality(users, nation) {
  if (typeof users != "object") {
    return "Please provide a object";
  }
  if (nation == null) {
    return "Provide nationality";
  }

  let data = [];
  for (const user in users) {
    if (users[user].nationality == nation) {
      data[user] = users[user];
    }
  }
  return data;
}

// Q3 Find all users with masters Degree.
function findByQualification(users, qualification) {
  if (typeof users != "object") {
    return "Please provide a object";
  }

  if (qualification == null) {
    return "Provide qualification";
  }
  let data = [];
  for (const user in users) {
    if (users[user].qualification == qualification) {
      data[user] = users[user];
    }
  }
  return data;
}

// Q4 Group users based on their Programming language mentioned in their designation.
function getGroupsByProgram(users) {
  if (typeof users != "object" || Object.keys(users).length == 0) {
    return "Please provide a object";
  }

  let data = {}; //[["Golang"],["JavaScript"], ["Python"]];
  for (const user in users) {
    users[user].desgination.split(" ").map((language) => {
      if (["Golang", "Javascript", "Python"].includes(language)) {
        if (!data[language]) {
          data[language] = [];
        }
        data[language].push(users[user]);
      }
    });
  }
  return data;
}

export {
  findInterested,
  findByNationality,
  findByQualification,
  getGroupsByProgram,
};
