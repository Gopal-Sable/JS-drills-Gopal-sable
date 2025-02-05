function counterFactory() {
  let count=0;
  this.increment= function(){
    console.log(++count);
    
  }
  this.decrement=function(){
    console.log(--count);
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
}
let counter= new counterFactory();
counter.increment();
counter.decrement();

function sayHello(name) {
  return `Hello ${name}`;
  
}




function limitFunctionCallCount(cb, n) {
  let count = 0;
  return (...args) => {
    if(count<n){
      count++;
     return cb(...args);
    }else {
      return null;
    }
  }
}

let fn = limitFunctionCallCount(sayHello, 2)
console.log(fn("gopal"));
 console.log(fn("mount"));
 console.log(fn("blue"));

function cacheFunction(cb) {
  let mem={};
  return (...args) => {
    let key=JSON.stringify(...args);
    if(mem[key]!=null){
     return mem[key];
    }
    return mem[key]=cb(...args);   
  }
}

function add(a,b) {
  return a+b;
}
let fn1 = cacheFunction(add);
console.log(fn1(1,2));
console.log(fn1(1,2));


