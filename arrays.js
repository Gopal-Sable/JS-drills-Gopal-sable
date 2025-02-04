const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/
// ==================== each =========================

function each(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
}


each(items, (num) => {
  console.log(num);
});

// ===================== map ==========================
function map(elements, cb) {
  let data = [];
  for (let i = 0; i < elements.length; i++) {
    data.push(cb(elements[i], i));
  }
  return data;
}



console.log(map(items, (num) => num * num));

// =================== reduce =========================
function reduce(elements, cb, startingValue) {
  let accuater = elements[0];
  if (startingValue != undefined) {
    accuater = startingValue;
    for (let i = 0; i < elements.length; i++) {
      accuater = cb(elements[i], accuater);
    }
    return accuater;
  }
  for (let i = 1; i < elements.length; i++) {
    accuater = cb(elements[i], accuater);
  }
  return accuater;
}




console.log(
  reduce(items, (n, sum) => {
    return (sum += n);
  })
);

// ========================= find =========================

function find(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return undefined;
}



console.log(find(items, (x) => x == 5));

// ========================= find =========================

function filter(elements, cb) {
  let arr = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      arr.push(elements[i]);
    }
  }
  return arr;
}



console.log(
  filter(items, (n) => {
    return n % 2 == 0;
  })
);


// ========================= flatten array=============================
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
  

  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
}
