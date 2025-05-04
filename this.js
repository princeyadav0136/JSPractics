// 'this' keyword in JavaScript (implicit binding)
// Explain this keyword

// 'this' refers to the object that is executing the current function
// In a method, this refers to the owner object
// In a function, this refers to the global object
// In a constructor, this refers to the newly created object
// In an event, this refers to the element that triggered the event
// In strict mode, this is undefined in functions
// In arrow functions, this refers to the enclosing lexical context
// In setTimeout, this refers to the global object
// In setInterval, this refers to the global object
// In setImmediate, this refers to the global object
// In Promise, this refers to the global object
// In async functions, this refers to the global object
// In class methods, this refers to the instance of the class
// In class static methods, this refers to the class itself

console.log(this); // global object (window in browser, global in Node.js)

function showThis() {
  console.log(this); // global object (window in browser, global in Node.js)
}
showThis();

const obj = {
  name: 'John',
  showThis: function () {
    console.log(this); // obj
  },
};

obj.showThis();