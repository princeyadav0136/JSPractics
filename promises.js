// Promises in Javascript
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

// Synchronous code vs Asynchronous code

// Synchronous code is executed line by line, blocking the execution of the next line until the current line is completed.
// Asynchronous code is executed in the background, allowing the program to continue executing other code while waiting for the asynchronous operation to complete.

// Example of synchronous code
console.log("Start");
console.log("Middle");
console.log("End");
// Output:
// Start
// Middle
// End

// Example of asynchronous code
console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 1000);
console.log("End");

// Output:
// Start
// End
// Middle (after 1 second)

// Callbacks

// A callback is a function that is passed as an argument to another function and is executed after the completion of that function.

// Example of a callback

function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched";
        callback(data);
    }, 1000);
}

function processData(data) {
    setTimeout(() => {
        console.log(data);
    }, 500);
}

console.log("Start");

fetchData((data) => {
    console.log(data);
    processData("Processing data");
});

console.log("End");

// Output:
// Start
// End

// Data fetched (after 1 second)
// Processing data (after 500ms)
// The above code demonstrates how callbacks can lead to "callback hell" or "pyramid of doom" when there are multiple nested callbacks.

// This can make the code difficult to read and maintain. Promises were introduced to solve this problem by providing a cleaner way to handle asynchronous operations.


// Promises
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const myPromise = new Promise((resolve, reject) => {
    const success = false; // Simulate success or failure
    if (success) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
})

myPromise.then((result) => {
    console.log("promise", result); // Output: Promise resolved
})
.catch((error) => {
    console.error("promise", error); // Output: Promise rejected
})
// The above code creates a new promise that resolves if the success variable is true and rejects if it is false.
// The then() method is used to handle the resolved value, and the catch() method is used to handle the rejected value.
// The then() method returns a new promise, which allows for chaining multiple then() calls together.
// This is useful for performing multiple asynchronous operations in sequence.

// Example of chaining promises
const fetchDataPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
};

const processDataPromise = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + " processed");
        }, 500);
    });
}

console.log("Start");
fetchDataPromise()
    .then((data) => {
        console.log(data);
        return processDataPromise(data);
    })
    .then((processedData) => {
        console.log(processedData);
    })
    .catch((error) => {
        console.error(error);
    });

// Output:
// Start
// Data fetched (after 1 second)
// Data fetched processed (after 500ms)
// The above code demonstrates how to chain multiple promises together.
// Each then() method returns a new promise, allowing for further chaining.
// This makes the code more readable and easier to maintain compared to using nested callbacks.

// Promise.all
// Promise.all() is a method that takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000);
}
);

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 resolved");
    }, 1500);
}
);

console.log("Start");
Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises resolved");
        console.log(results);
    })
    .catch((error) => {
        console.error("One or more promises rejected");
        console.error(error);
    });

// Output:
// Start
// All promises resolved
// [ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]

// The above code demonstrates how to use Promise.all() to wait for multiple promises to resolve.
// The results array contains the resolved values of all the promises.
// If any of the promises reject, the catch() method will be called with the error.
// This is useful for performing multiple asynchronous operations in parallel and waiting for all of them to complete before proceeding.

// Promise.race
// Promise.race() is a method that takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log("First promise resolved");
        console.log(result);
    })
    .catch((error) => {
        console.error("One or more promises rejected");
        console.error(error);
    });

// Output:
// First promise resolved
// Promise 1 resolved

// Promise.allSettled
// Promise.allSettled() is a method that takes an array of promises and returns a single promise that resolves after all of the promises in the array have settled (either resolved or rejected).

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises settled");
        console.log(results);
    })
    .catch((error) => {
        console.error("One or more promises rejected");
        console.error(error);
    });

// Output:
// All promises settled
// [
//   { status: 'fulfilled', value: 'Promise 1 resolved' },
//   { status: 'fulfilled', value: 'Promise 2 resolved' },
//   { status: 'fulfilled', value: 'Promise 3 resolved' }
// ]

// The results array contains an object for each promise, indicating whether it was fulfilled or rejected.
// This is useful for handling multiple asynchronous operations and knowing the status of each one, regardless of whether they succeeded or failed.

// Promise.any
// Promise.any() is a method that takes an array of promises and returns a single promise that resolves as soon as one of the promises in the array fulfills, or rejects if all of the promises in the array reject.

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 4 rejected");
    }, 1000);
});

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 5 resolved");
    }, 2000);
});

const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 6 rejected");
    }, 3000);
});

console.log("Start");

Promise.any([promise4, promise5, promise6])
    .then((result) => {
        console.log("First promise fulfilled");
        console.log(result);
    })
    .catch((error) => {
        console.error("All promises rejected");
        console.error(error);
    });

// Output:
// Start
// First promise fulfilled
// Promise 5 resolved
// The above code demonstrates how to use Promise.any() to wait for the first promise that fulfills.
// If all of the promises reject, the catch() method will be called with an AggregateError containing all of the rejection reasons.
// This is useful for performing multiple asynchronous operations and proceeding as soon as one of them succeeds, regardless of the others.

// Async/Await
// Async/await is a syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous manner.
// It makes the code easier to read and understand by eliminating the need for chaining promises with then() and catch() methods.
// The async keyword is used to declare an asynchronous function, and the await keyword is used to wait for a promise to resolve or reject.
// An async function always returns a promise, and the await keyword can only be used inside an async function.

async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

async function processDataAsync(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + " processed");
        }, 500);
    });
}

console.log("Start");
(async () => {
    try {
        const data = await fetchDataAsync();
        console.log(data);
        const processedData = await processDataAsync(data);
        console.log(processedData);
    } catch (error) {
        console.error(error);
    }
})();

// Output:
// Start
// Data fetched (after 1 second)
// Data fetched processed (after 500ms)
// The above code demonstrates how to use async/await to write asynchronous code in a more synchronous manner.
// The await keyword is used to wait for the promise to resolve, and the result is assigned to a variable.
// This makes the code easier to read and understand compared to using then() and catch() methods.
// It also allows for better error handling using try/catch blocks.
// The async/await syntax is widely used in modern JavaScript development and is supported in most modern browsers and Node.js versions.


// Promise Polyfill

// A polyfill is a piece of code that provides the functionality of a newer feature in older environments that do not support it.
// Polyfills are used to ensure that the code works across different browsers and environments.
// The following is a simple polyfill for the Promise constructor:

if (typeof Promise === "undefined") {
    window.Promise = class {
        constructor(executor) {
            this.state = "pending";
            this.value = undefined;
            this.callbacks = [];

            const resolve = (value) => {
                if (this.state === "pending") {
                    this.state = "fulfilled";
                    this.value = value;
                    this.callbacks.forEach((callback) => callback.onFulfilled(value));
                }
            };

            const reject = (reason) => {
                if (this.state === "pending") {
                    this.state = "rejected";
                    this.value = reason;
                    this.callbacks.forEach((callback) => callback.onRejected(reason));
                }
            };

            executor(resolve, reject);
        }

        then(onFulfilled, onRejected) {
            return new Promise((resolve, reject) => {
                const handleCallback = () => {
                    try {
                        if (this.state === "fulfilled") {
                            const result = onFulfilled(this.value);
                            resolve(result);
                        } else if (this.state === "rejected") {
                            const result = onRejected(this.value);
                            reject(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                };

                if (this.state === "pending") {
                    this.callbacks.push({ onFulfilled: handleCallback, onRejected: handleCallback });
                } else {
                    handleCallback();
                }
            });
        }

        catch(onRejected) {
            return this.then(null, onRejected);
        }
    };
}

// The above code defines a simple Promise polyfill that implements the basic functionality of the Promise constructor.
// It includes the constructor, then() method, and catch() method.
// The polyfill uses the executor function to resolve or reject the promise and stores the callbacks in an array.
// When the promise is resolved or rejected, it calls the appropriate callback function.
// This polyfill can be used in environments that do not support the Promise constructor, such as older browsers.
// However, it is important to note that this polyfill does not cover all edge cases and may not be as performant as the native implementation.
// In modern JavaScript development, it is recommended to use the native Promise implementation provided by the environment.

