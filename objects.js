const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions
console.log("original object:", testObject);

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

function keys(obj) {
  const result=[];
  for (const key in obj) {
    result.push(key)
  } 

  return result;
}



console.log(keys(testObject));


// =======================================================

function values(obj) {
  const result=[];
  for (const key in obj) {
    result.push(obj[key])
  } 

  return result;
}


console.log(values(testObject));



// ======================================================================
function mapObject(obj, cb) {

  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
}
// =============================================================================
function pairs(obj) {
  const key=keys(obj);
  const result=[]
  for (let i = 0; i < key.length; i++) {
    
    result.push([key[i], obj[key[i]]])

  }
  return result;
}
console.log(pairs(testObject));

// ===================================================================================
/* STRETCH PROBLEMS */

function invert(obj) {
  const key= keys(obj);
  let results={}
  for (let i = 0; i < key.length; i++) {
    results[obj[key[i]]]= key[i];
  }
  return results;
}

console.log(invert(testObject));


// ======================================================================================
function defaults(obj, defaultProps) {

  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
}


console.log(defaults(testObject,0));