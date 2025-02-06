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
function mapObject(obj, cb){ 
    var _keys = keys(obj),
        length = _keys.length,
        results = {};
    for (var index = 0; index < length; index++) {
      var currentKey = _keys[index];
      results[currentKey] = cb(obj[currentKey],currentKey);
    }
    return results;
}

console.log(mapObject(testObject,(x,y)=>x+y));

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
  const _keys=keys(defaultProps);
  for (let i = 0; i < _keys.length; i++) {  
    if (obj[_keys[i]]==undefined) {
      obj[_keys[i]]=defaultProps[_keys[i]]
    }
   ;
  }
 
  return obj;
}
console.log(defaults({'name':"gopal", 'company':"mountblue"},testObject));
