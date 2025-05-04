// Call Apply and Bind in Javascript (Explicit Binding)
// Call, Apply and Bind are methods in JavaScript that allow you to set the value of 'this' in a function.

// What is Call ?
// The call() method calls a function with a given 'this' value and arguments provided individually.

// Syntax:
// function.call(thisArg, arg1, arg2, ...)

var obj = {
    name: 'John',
}

function greet(greeting, age) {
    console.log(greeting + ', ' + this.name + '. You are ' + age + ' years old.');
}

greet.call(obj, 'Hello', 30); // Hello, John

// What is Apply ?

// The apply() method calls a function with a given 'this' value and arguments provided as an array (or an array-like object).

// Syntax:
// function.apply(thisArg, [argsArray])

greet.apply(obj, ['Hi', 25]); // Hi, John. You are 25 years old.

// What is Bind ?

// The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// Syntax:
// function.bind(thisArg, arg1, arg2, ...)

var boundGreet = greet.bind(obj, 'Hey');
boundGreet(35); // Hey, John. You are 35 years old.

// Call with function inside object

var person = {
    name: 'Alice',
    getAge: function() {
        return this.age;
    },
}

// Call with function inside object using call
var person2 = {
    age: 30,
}

console.log(person.getAge.call(person2)); // 30