/* Promise
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World!");
    }, 3000);
});

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World 2!");
    }, 2000);
})

const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World 3!");
    }, 4000);
})

Promise.all([pr, pr2, pr3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.error(error);
    });

    */

// Call , Apply and Bind

/*

let fullName = function(hometown, state) {
    return this.firstName + " " + this.lastName + " from " + hometown + ", " + state;
}

const person2 = {
    firstName: "Jane",
    lastName: "Smith"
}

console.log(fullName.call(person2, "gorakhpur", "UP")); // Jane Smith
console.log(fullName.apply(person2, ["deoria", "UP"])); // Jane Smith
const fullNameBind = fullName.bind(person2, "maharajganj", "UP");
console.log(fullNameBind()); // Jane Smith from maharajganj, UP

*/

// Ployfill for bind method

/*
let name = {
    firstName: "John",
    lastName: "Doe"
}

function fullName(hometown, state) {
    return this.firstName + " " + this.lastName + " from " + hometown + ", " + state;
}

let boundFunction = fullName.bind(name, "gorakhpur", "UP");
console.log(boundFunction()); // John Doe from gorakhpur, UP

Function.prototype.myBind = function(thisArgs, ...args) {
    const fn = this;
    return function(...newArgs) {
        return fn.apply(thisArgs, [...args, ...newArgs]);
    }
}

let boundFunction2 = fullName.myBind(name, "gorakhpur", "UP");

console.log(boundFunction2()); // John Doe from gorakhpur, UP

*/

// Debouncing

/*
let counter = 0;

const getData = () => {
    console.log("Fetching data from server", counter++);
}

const debounce = (fn, delay) => {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(args);
        }, delay);
    }
}

const handleChange = debounce(getData, 2000);

*/

// Throttling

/*

const throttle = (fn, delay) => {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    }
}

const getData = () => {
    console.log("Fetching data from server");
}

const throttledFunction = throttle(getData, 2000);

*/

// Currying

/*

let multiply = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

let result = multiply(2)(3)(4);

*/

// Loopint in Object

/*
const user = {
    name: "John",
    age: 30,
    city: "New York"
}

for (let key in user) {
    console.log( user[key]);
}

*/

// Object in Javscript Questions

/*

// Question 1

const obj = {
    a: "one",
    b: "two",
    c: "three",
}

console.log(obj) // { a: 'one', b: 'two', c: 'three' }

// Question 2:- Create a function multiplyByTwo(obj) that multiply all numeric values in the object by 2 and return the new object.

let obj2 = {
    a: 1,
    b: 2,
    c: "3",
}

const multiplyByTwo = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2;
        } else {
            obj[key] = obj[key];
        }
    }
    return obj;
}

console.log(multiplyByTwo(obj2)); // { a: 2, b: 4, c: '3' }

// Question 3:- Whats the output of the following code?

const a = {}

const b = { key: "b" }

const c = { key: "c" }

a[b] = 123; // object to string conversion happens here a[b] = a["[object Object]"] = 123
a[c] = 456; // object to string conversion happens here a[c] = a["[object Object]"] = 456

console.log(a[b]); // 456

// Question 4:- Whats is json.stringify() and json.parse()?

// JSON.stringify() is a method that converts a JavaScript object into a JSON string.
// JSON.parse() is a method that converts a JSON string into a JavaScript object.

const user = {
    name: "John",
    age: 30,
    city: "New York"
}

const strObj = JSON.stringify(user);

console.log(strObj); // {"name":"John","age":30,"city":"New York"}

const obj3 = JSON.parse(strObj);

console.log(obj3); // { name: 'John', age: 30, city: 'New York' }

// usage of JSON.stringify() and JSON.parse() in API calls

// Question 5:- Whats the output of the following code?

console.log([..."Lydia"]) // ['L', 'y', 'd', 'i', 'a']

// Question 6:- Whats the output of the following code?

const obj6 = {
    name: "John",
    age: 30,
    city: "New York"
}

const obj62 = {
    admin: true,
    ...obj6,
}

console.log(obj62); // { admin: true, name: 'John', age: 30, city: 'New York' }

// Question 7:- Whats the output of the following code?

const strObj2 = JSON.stringify(obj6, ["name", "age"]);
console.log(strObj2); // {"name":"John","age":30}

// Question 8:- Whats the output of the following code?

const shape = {
    radius: 10,
    diameter: function() {
        return this.radius * 2;
    },
    perimiter: () => {
        return this.radius * 2;
    }
}

console.log(shape.diameter()); // 20
console.log(shape.perimiter()); // NaN

*/


// Map
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map((item) => {
    return item * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Polyfill for map method



Array.prototype.myMap = function(callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        if(this[i] !== undefined) {
            newArray.push(callback(this[i]));
        }
    }
    return newArray;
}

const newArrayPollyfill = arr.myMap((item) => {
    return item * 2;
})

console.log(newArrayPollyfill); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

*/

// Filter

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.filter((item) => {
    return item > 5;
});

console.log(newArr); // [6, 7, 8, 9, 10]

// Polyfill for filter method

Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for(let i = 0; i < this.length; i++){
        if(this[i] !== undefined) {
            if(callback(this[i])){
                newArray.push(this[i]);
            }
        }
    }
    return newArray;
}

const newArrayPollyfill = arr.myFilter((item) => {
    return item > 5;
})

console.log(newArrayPollyfill); // [6, 7, 8, 9, 10]

*/

// Reduce

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.reduce((acc, item, index, arr) => {
    return acc + item;
}, (0));

console.log(newArr); // 55

// Polyfill for reduce method

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    for(let i = 0; i < this.length; i++){
       accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

const newArrayPollyfill = arr.myReduce((acc, item, index, arr) => {
    return acc + item;
}, 0);

console.log(newArrayPollyfill); // 55

*/

// Map vs ForEach

/*

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map((item) => {
    return item * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const newArr2 = arr.forEach((item) => {
    return item * 2;
});

console.log(newArr2); //  undefined

// map method returns a new array with the results of calling a provided function on every element in the calling array. It does not execute the function for empty elements.

*/

// Closure in Javascript
/*

// Closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows a function to have private variables and methods. Closures are created every time a function is created.

const outerFunction = () => {
    let outerVariable = "I am an outer variable";

    const innerFunction = () => {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closure = outerFunction();
closure(); // I am an outer variable
outerFunction()(); // I am an outer variable

// Closure with setTimeout

const outerFunction2 = () => {
    let outerVariable = "I am an outer variable";

    for(let i = 0; i < 5; i++){
        setTimeout(() => {
            console.log(outerVariable + " " + i);
        }, 1000);
    }
}

outerFunction2(); // I am an outer variable i(1,2,3,4,5) 5 times with 1 second delay

// Closure with setTimeout and var
const outerFunction3 = () => {
    var outerVariable = "I am an outer variable";

    for(var i = 0; i < 5; i++){
        setTimeout(() => {
            console.log(outerVariable + " " + i);
        }, 1000);
    }
}

outerFunction3(); // I am an outer variable 5 times with 1 second delay and i = 5

// How do you create a private counter using closure?

const createCounter = () => {
    let count = 0;

    return {
        increment: () => {
            count++;
            return count;
        },
        decrement: () => {
            count--;
            return count;
        },
        getCount: () => {
            return count;
        }
    }
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
console.log(counter.decrement()); // 2
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined

*/

// Currying

// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows for partial application of functions and can lead to more reusable and composable code.

/*
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(1)(2)(3)); // 6

// WHy should we use currying?

// 1. Reusability: Currying allows you to create more reusable functions by breaking down a function into smaller, more focused functions.
// 2. Partial application: Currying allows you to create functions with fewer arguments by partially applying some of the arguments.
// 3. Function composition: Currying allows you to compose functions together more easily by creating smaller functions that can be combined to create more complex functions.
// 4. Improved readability: Currying can make your code more readable by breaking down complex functions into smaller, more focused functions.
// 5. Improved testability: Currying can make your code more testable by allowing you to test smaller, more focused functions.


// Infinite Currying

const sum = (a) => {
    return function(b) {
        if (b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
}

console.log(sum(1)(2)(3)(4)()); // 10

*/


