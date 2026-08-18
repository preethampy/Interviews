# Javascript fundamentals

## Links

1. https://www.geeksforgeeks.org/javascript-output-based-interview-questions/
2. https://rowdycoders.com/top-50-most-asked-javascript-logical-output-interview-qa
3.

## Pre vs Post Increments

1. Both are used to increment a variable value with 1
2. Both will change the value in-place (modifies the original variable)
3. But pre-increment returns new incremented value and post-increment returns original value (not incremented value)
4. **Example:**

   ```
   let x = 5;
   let y = 5;

    // post-increment
   console.log(x++); // 5

   // pre-increment
   console.log(++y); // 6
   ```

## Copy vs Shallow Copy vs Deep Copy

```
const obj1 = {a:1,b:2, c:{d:0}}
const obj2 = obj1;
const obj3 = {...obj1}
// obj2.c.d=5
// obj1.c.d=5
// obj2.a=5
obj1.b=9
console.log(obj1);
console.log(obj2);
console.log(obj3);
/**
Changing original object will change only direct copy variables (but not shadow copy variable object)
Changing direct copy variable of object will change the original object as well (but not shadow copy variable object)

Changing original nested object will change both direct copy and shadow copy variables
Changing direct copy variable of object will change the original object as well as shadow copy variable object

Changing shadow copy variable will only change that object but not original or direct copy objects
Changing shadow copy nested object varaible will change shadow copy, direct copy, original objects too
 */
```

## Types

1. `typeof` anything that starts with new keyword is object
2. `typeof` anything that is derived from a String/Number object are string/number
3. `typeof` anything that is declared directly(without any String, Number) are string/number

```
const str = new String("pree");
const strr = String("pree");
const strrr = "pree";
```

## Operator

1. console.log(1 && 0) // && operator always picks 0(falsy) if exists or second operand
2. console.log(10 || 0) // || operator always picks 1(truthy) if exists or the highest number

## Comparision

1. **String vs String**
   - JavaScript uses the so-called “dictionary” or “lexicographical” order.
   - In other words, strings are compared letter-by-letter
   ```
    alert( 'Z' > 'A' ); // true
    alert( '9' > '11' ); // true (9 > 1)
   ```
   - But lower case are greater than upper case `"a">"A" (true)`
2. **String vs Other types**
   - When comparing with different types, javascript converts the vlaues to numbers.
   - `alert( '2' > 1 ); // true, string '2' becomes a number 2`
   - For boolean values, true becomes 1 and false becomes 0 `alert( true == 1 ); // true alert( false == 0 ); // true`
3. **Other comparision operators** work same like **==, >=, <=, != etc**
4. **undefined** only equals `null, undefined` and everything else is `false`

## Sorting

- By default, the sort() method sorts the elements as strings, so the array [31, 2, 8] will be sorted as [“2”, “31”, “8”]
- Sorts in-place (modifies the original variable)

## Parentheses

When we write anything inside parentheses (), they are treated as expressions. Only the last expression result will be returned. So the output of below is 20

```
let a = 10;
let b = (a, a + 10);

console.log(b);
// OUTPUT: 20
```

# Javascript

## About

Javascript is a high-level, interpreted programming language used in both front-end and back-end applications.

JavaScript is also interpreted (in browsers), but modern engines (like Google’s V8) use JIT (Just-In-Time compilation) → converts frequently used code into machine code at runtime for speed

1. **High-level**
   - The syntax is closer to human language, making it easier to learn, write, and understand compared to low-level languages like assembly.
   - You write code that focuses on the logic and problem you're solving, not the nitty-gritty details of the computer's hardware.
   - JavaScript comes with a large set of built-in functions and objects that provide ready-to-use solutions for common tasks.
   - In summary, as a high-level language, JavaScript simplifies the programming process, allowing you to focus on building applications rather than dealing with low-level complexities.
2. **Interpreted**
   - An interpreted language is one that does not require compiling into machine language
   - You write JavaScript code in a plain text file, usually with a .js extension.
   - When you want to run the code, you pass it to an interpreter (like the Google v8 engine in a web browser)
   - The interpreter reads each line of code, translates it into machine-readable instructions, and then executes those instructions immediately.
   - Unlike compiled languages, there's no need to create a separate executable file before running.

## Features of javascript

1. Lightweight
2. Cross platform
3. Interpreted
4. Dynamic typing (Variables in JavaScript are not bound to a specific data type)
5. Object Oriented
6. DOM manipulaton
7. Supports Asynchronus Programming
8. Server Side Scripting

## Advantages and Disadvantages

1. **Advantages**
   - Each and every browser and OS supports Javascript
   - Can be used in both front-end and back-end
   - Easy to learn
   - Huge community and lot of packages available for swift development
   - Needless of code compilation
2. **Disadvantages**
   - Can become complex as projects grow, especially with asynchronous code
   - JavaScript code can be exposed to users, making it vulnerable to malicious attacks
   - Might not be suitable for CPU intensive tasks

## JavaScript's event loop

1. Event loop is a part of **Javascript runtime** (A JavaScript runtime is an environment where JavaScript code is executed. It provides everything needed to run JavaScript like Engine(v8), web API's, callback queue (Task queue), microtask queue, event loop)
2. (Call stack) Consider a simple synchronous code as below:
   ```
   console.log("Start");
   for(let i=0; i<5; i++){
       console.log("Logging");
   }
   console.log("End");
   ```
   - Paste the code on http://latentflip.com/loupe and notice
   - `console.log("Start");` will be added to call stack and executes it and shows the output
   - Next, Each loop will go into call stack and executes `console.log("Logging");`
   - Finally it executes `console.log("End");`
   - This is a very simple example that actually doesnt make use of event loop yet
3. (Call stack) Consider another example below:

   ```
   function third() { }

   function second() { third() }

   function first() { second() }

   first();
   ```

   - Paste the code on http://latentflip.com/loupe and notice
   - First `first();` function will be called, which inturn calls `second()` function, which calls `third()` function and it end there. Here `first()` is added first and `third()` is added last in call stack
   - Now the call stack is full of nested calls, now, callstack starts executing them in LIFO(Last In, First Out) order, means which has been added last to stack, will execute first.
   - This is another very simple example that actually doesnt make use of event loop yet

4. (Call stack, Web API's, Task queue or Callback queue, Event loop) Consider another example below:

   ```
   setTimeout(function a() {}, 1000);

   setTimeout(function b() {}, 500);

   setTimeout(function c() {}, 0);

   function d() {}

   d();
   ```

   - Paste the code on http://latentflip.com/loupe and notice
   - `setTimeout(function a() {}, 1000);` is sent to call stack, then call stack moves it to web API's as setTimeout is a web API and it has to take care of it and after completion of executing it, it then passes the `function a()` callback function to **Task/Callback queue**, Then, event loop will keep checking the call stack while this `function a()` callback just sits and wait till call stack is empty and event loop take it and pushes to call stack later
   - Next, `setTimeout(function b() {}, 500);` is sent to call stack, then call stack moves it to web API's as setTimeout is a web API and it has to take care of it and after completion of executing it, it then passes the `function b()` callback function to **Task/Callback queue**, Then, event loop will keep checking the call stack while this `function b()` callback just sits and wait till call stack is empty and event loop take it and pushes to call stack later
   - Next, `setTimeout(function c() {}, 0);` is sent to call stack, then call stack moves it to web API's as setTimeout is a web API and it has to take care of it and after completion of executing it, it then passes the `function c()` callback function to **Task/Callback queue**, Then, event loop will keep checking the call stack while this `function c()` callback just sits and wait till call stack is empty and event loop take it and pushes to call stack later
   - Next, now the call-stack runs `d()` and then the call stack will be empty and ready to take new functions to execute.
   - Event loop notices that the call-stack is empty and it has some Tasks waiting in **Task/Callback queue** to be executed
   - So event loop pushes the first callback function that was added to the Task/callback queue into call stack (FIFO (First-In, First-Out))
   - Then each and every callback is executed as they are added one by one to the call stack

5. (Call stack, Web API's, Task queue or Callback queue, Microtask queue, Event loop) Consider another example below:

   ```
   setTimeout(function a() {}, 0);

   Promise.resolve().then(function b() {});
   ```

   - Paste the code on http://latentflip.com/loupe and notice
   - `setTimeout(function a() {}, 0);` is sent to call stack, then call stack moves it to web API's as setTimeout is a web API and it has to take care of it and after completion of executing it, it then passes the `function a()` callback function to **Task/Callback queue**, Then, event loop will keep checking the call stack while this `function a()` callback just sits and wait till call stack is empty and event loop take it and pushes to call stack later
   - Next, `Promise.resolve()` is added to call-stack, which is responsible for creating a promise object which has an initial state as pending and result as undefined
   - Next, we have `then(function b() {})` handler, which will be listening for the outcomes/result of `Promise.resolve()` creates a promiseReaction record in webApis inside the above promise.
   - Obviously `Promise.resolve()` resolves immediatly and the state of it will be turned to fullfilled and result will be passed to our then() handler we attached to that promise.
   - Now the function inside then handler will be pushed into microtask queue
   - After the call-stack is empty, as we have a task in task queue now and also a microtask in microtask queue, event loop prioritize the microtasks first and sends them into call stack one by one until the microtask queue is empty and then it comes to the tasks queue and push them one by one to call stack until its empty

6. **Summary**
   - JS event loop is a part of javascript engine
   - When we run the code, the synchronus code will be executed by call-stack itself and the order of execution of call-stack is always LIFO
   - Call-stack will always take a line of code in > execute it > then takes the next (unless there are nested functions, then it stacks one function on top of other in the order of how a function is calling other function (In LIFO order))
   - If there is any asynchronus code, it will be added to call stack first, then it will be assigned to webapis by call stack, which inturn will push the callbacks of that asynchronus tasks to task/callback/message queue or microtask queue based on below
   - If there are callback functions, they will be sent to task/message/callback queue and if there are Promises, then/catch/finally, async/await (functions after await) will be sent to microtask queue
   - Event loop prioritize microtask queue over task/callback/message queue. Means it first pushes everything from task/callback/message queue to call-stack and after empting the microtask, then it will start pushing task/callback/message queue functions to call-stack to exeute.
7. References for future:

- https://www.jsv9000.app/ (Event loop visualizer)
- https://www.youtube.com/watch?v=eiC58R16hb8&t=24s (Javascript event loop visualized)

## functions vs methods in javascript

In JavaScript, both functions and methods are blocks of code that perform specific tasks. However, there is a key difference:

- **Functions:** are standalone and can be called independently.
- **Methods**: are functions associated with an object and are called on that object.

```
// Function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice"); // Output: Hello, Alice!

// Method
const person = {
  name: "Bob",
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

person.sayHello(); // Output: Hello, my name is Bob.
```

## What is difference between named and arrow functions?

1. Syntax
2. Hoisting
   - Named functions can be called before function declarations
   - Arrow functions cannot be called before function declarations
3. This key word

   - this keyword in named functions refers to the object that called the function (can vary depending on how the function is called).
   - this keyword In arrow functions refers to the this value of the enclosing lexical scope (where the arrow function is defined).

   ```
   const myObj = {
       name: "Alice",
       sayHello: function() {
           console.log(this.name); OUTPUT: Alice
       },
       sayGoodbye: () => {
       this.naam="preetham"
       console.log(this.name); OUTPUT: undefined
       console.log(this.naam); OUTPUT: preetham
       }
   };

   myObj.sayHello();
   myObj.sayGoodbye();
   ```

4. Implicit return
   - Named function: Requires an explicit return statement to return a value.
   - Arrow function: Can have an implicit return, where the value of the expression is automatically returned if there is only a single expression in the function body.
     `const add = (a, b) => a + b; // Implicit return`
5. Constructor functions
   - Named function: Can be used as constructor functions to create objects.
   - Arrow function: Cannot be used as constructor functions.

## What is difference between function declaration and function expression?

    - Function syntax
    - Hoisting
    - Function declaration
    ```
    hello(); OUTPUT: Hello

    function hello(){
        console.log("Hello")
    }
    ```
    - Function expression
    ```
    hello(); OUTPUT: Error

    const hello = function (){
        console.log("Hello")
    }
    ```

## What is scope chaining?

When a variable is referenced inside a function, javascript first looks for it within that function's own scope. If it doesnt find the variable there, it will look in parent functions scope, then grandparents and so on. This hierarchical lookup chain is called the scope chain.

```
let x = 10;

function outer(){
    let y = 20;

    function inner(){
        let z = 30;

        console.log(x);
        console.log(y);
        console.log(z);

        OUTPUT: 10,20,30 (Accessable global scope)
    }

    inner();
}
```

## what is **this** object in js functions

This keyword refers to the context in which a function is executed. And the context of this depends on how the function is called.

1. In a Method:
   When a function is a property of an object (i.e., a method), this refers to the object that owns the method.

   ```
   const person = {
   firstName: "John",
   lastName: "Doe",
   fullName: function() {
       return this.firstName + " " + this.lastName;
   }
   };

   console.log(person.fullName()); // Output: "John Doe"
   In this example, this inside the fullName method refers to the person object.
   ```

2. In a Function (Global Scope):
   When a function is called in the global scope (not as a method of an object), this refers to the global object, which is window in a browser environment and global in Node.js.

   ```
   function sayHello() {
        console.log(this === window); // Output: true
    }

    sayHello();
   ```

3. In a Constructor Function:
   When a function is used as a constructor with the new keyword, this refers to the newly created object instance.

   ```
   function Car(brand) {
   this.brand = brand;
   console.log(this) // OUTPUT: Car{brand:"Toyota"} but without new keyword, we get global object along with brand: "Toyota" but cannot be accessed from its instance like we did with new keyword
   }

   const myCar = new Car("Toyota"); // this here means "Car {brand:"Toyota"} and myCar.brand will output "Toyota"
   const myCar = Car("Toyota"); // this here means "global obj + brand:"Toyota" and myCar.brand will output undefined
   console.log(myCar.brand); // Output: "Toyota"
   ```

## How to shallow copy and deep copy one object to another object?

    We can use spread operator "..." or `Object.assign({},obj)` to make a shallow copy. Original object will get affected if there are any nested objects when there is an update in shallow copy. To make a deep copy, use `JSON.parse(JSON.stringify(obj))`

    ```
    SHALOW COPY

    const obj = {a:1, b:2, c:3};
    const arr = [1,2,3];

    console.log({...obj}) OUTPUT: { a: 1, b: 2, c: 3 }
    console.log([...arr]) OUTPUT: [ 1, 2, 3 ]

    console.log(Object.assign({},obj)); OUTPUT: { a: 1, b: 2, c: 3 }
    console.log(Object.assign({},arr)); OUTPUT: { '0': 1, '1': 2, '2': 3 }
    console.log(Object.assign([],arr)); OUTPUT: [ 1, 2, 3 ]

    PROBLEM WITH SHALOW COPY

    const originalObject = { a: 1, b: { c: 2 } };
    const shallowCopy = { ...originalObject };
    shallowCopy.b.c = 3; // Changes the original object too
    console.log(originalObject);  // Output: { a: 1, b: { c: 3 } }

    SO WHEN WE HAVE NESTED OBJECTS, WE CAN USE DEEP COPY USING JSON LIKE BELOW

    const originalObject = { a: 1, b: { c: 2 } };
    const deepCopy = JSON.parse(JSON.stringify(originalObject));
    deepCopy.b.c = 3; // Doesn't affect the original object
    console.log(originalObject);  // Output: { a: 1, b: { c: 2 } }

    ```

## What is vanilla javascript

    Vanilla JavaScript refers to using plain JavaScript without any additional libraries or frameworks.

## Explain JavaScript cookies.

JavaScript cookies are small text files stored on a user's computer by a web browser. They are used to store information about the user, such as login details, preferences, and shopping cart contents.

**Uses**

1. User authentication: Storing login information so users don't have to re-enter it every time they visit a website.
2. Personalization: Remembering user preferences, such as language, theme, or font size.
3. Tracking: Monitoring user behavior across a website or multiple websites for analytics or advertising purposes.
   ![](https://res.cloudinary.com/practicaldev/image/fetch/s--UcdjcWFO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/95ialyrlxjnprg2btnva.png)

## Explain the difference between Object.freeze() vs const.

- const: Prevents variable reassignment but not modification of the value in an object.
- Object.freeze(): Makes the entire object immutable, preventing changes to properties.

```
const myObj = { name: "Alice", age: 30, address: { city: "New York" } };

// Using const
const myObjCopy = myObj;
myObjCopy.age = 31; // This modifies the original object because myObjCopy references the same object.
console.log(myObj); // Output: { name: "Alice", age: 31, address: { city: "New York" } }

// Using Object.freeze()
const myFrozenObj = Object.freeze({ name: "Alice", age: 30, address: { city: "New York" } });
myFrozenObj.name = "Bob"; // This has no effect because myFrozenObj is frozen.
myFrozenObj.address.city = "London"; // This changes the nested object because Object.freeze() doesn't freeze nested objects.
console.log(myFrozenObj); // Output: { name: "Alice", age: 30, address: { city: "London" } }
```

## What is the difference between document and window?

1. Window Object:
   - Represents the entire browser window or tab.
   - The global object in the browser, meaning all global variables and functions are actually properties of the window object.
   - Provides access to features like:
     1. Window dimensions (innerWidth, innerHeight)
     2. Location (href, pathname)
     3. History (back(), forward())
     4. Timers (setTimeout(), setInterval())
     5. Browser features (alert(), prompt(), confirm())
2. Document Object:
   - Represents the HTML document loaded within the browser window.
   - Provides access to the DOM (Document Object Model), allowing you to manipulate the structure, content, and styling of the HTML elements.
   - Provides methods for:
     1. Selecting elements (getElementById(), querySelector())
     2. Creating elements (createElement())
     3. Adding/removing elements (appendChild(), removeChild())
     4. Modifying element content (textContent, innerHTML)
     5. Handling events (addEventListener())

## What are string literals?

In JavaScript, string literals are simply a sequence of characters enclosed within single (' ') or double (" ") quotes or template literals with backticks (``) where js expressions can be added.

## What is the difference between forEach and map?

    - `forEach` doesnt return anything but just applies the function to each and every element in that array.
    - `map` returns a new array after applying the function to each and every element in that array.

## What is a Promise?

Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
It has 3 states:

1. Pending
2. Fulfilled
3. Rejected

## Pair Programming.

In pair programming, two programmers share only one machine and work together. During the development process, one programmer will be the driver who codes and another will act as the observer (navigator) who will make sure the code is written correctly, proofread and spell-check it, while also deciding where to go next. Roles can be swapped at any time: the driver becomes the observer and vice versa. You can also call it "pairing", "paired programming", or "programming in pairs".

## Sync vs Async

Sync means blocking, runs code in sequence and blocks the execution of next line until current line of code is executed
Async means non-blocking, runs code in sequence and doesnt blocks the execution of next line. Async line of code will return data when ever it is done with execution.

## Closures

A closure is a function having access to the parent scope or parent variables, even after the parent function is executed. Where a closure function can also modify the parent scope variables. Consider example below:

```
function gamingCard(){
    var points = 100;

    function swipeCardForgame(charges){
        if(charges <= points){
            points =  points - charges;
            return `You have used ${charges} points and have ${points} points left in balance.`
        }
        else{
            return "You have exhausted points. Please recharge."
        }
    }

    return swipeCardForgame
}

const personOne = gamingCard();
const personTwo = gamingCard();

// Utilized for first game
console.log(personOne(10));
// We can also write it as gamingCard()(10) where first gamingCard() returns a function (swipeCardForgame), so second (10) will be passed to that function (swipeCardForgame).
console.log(personTwo(50));

// Utilized for second game
console.log(personOne(50));
console.log(personTwo(60));
```

1. We have a parent function `gamingCard` which assign's value 100 to a variable on every instance it is called/created.
2. We also have a child function inside parent function called `swipeCardForGame` which takes `charges` as an argument which basically mimics to charge for playing a game by subtracting `charges` from `points` variable
3. Then the parent function returns the child function
4. We then create two persons instances (`personOne`, `personTwo`). Now two persons variables have their `points` variable set to 100 by default.
5. When a person wants to play a game, he has to swipe his card and charges will be applied for playing that game, we will do `points - charges`. To do this, we will call the personOne and personTwo instances with the chargable amount, like `personOne(10)` `personTwo(20)`
6. Here, parent function gamingCard returns a swipeCardForgame function when we initiated person (`const personOne = gamingCard();`), then we charge person by passing a number to the instance (`personOne(10)`). This works because the instances created are different and isolated for both the persons.

## Generator functions

1. Generator functions are functions that return a generator object
2. These objects are used by calling the next method on the generator object
3. A generator function uses the yield keyword to generate values, pause the execution and return the value to the user.
4. It remembers the last state and resumes execution on calling it again.
5. Example code is below:

   ```
   function* gen(){
       yield 10;
       yield 20;
   }

   const mygen = gen();
   console.log(mygen.next().value); OUTPUT: 10
   console.log(mygen.next().value); OUTPUT: 20
   ```

## Hoisting in javascript

Hoisting is the default behaviour of javascript where all the variable and function declarations are moved to top.

## Data Types

### Primitive

Primitive data types are the basic data types that store a single value, such as a number, string, or boolean.

1. String `typeof(String) is function`
2. Number `typeof(Number) is function`
3. Bigint `typeof(Bigint) is function`
4. Boolean `typeof(Boolean) is function`
5. Symbol `typeof(Symbol) is function`
6. Object `typeof(Object) is function`
7. Undefined `typeof(undefined) is undefined`
8. Null `typeof(null) is object`

### Non-Primitive

The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types.

1. Array object `typeof(Array) is function`
2. Date object `typeof(Date) is function`

## Callback Functions

A callback is a function passed as an argument to another function.

```
    function add(a,b,cb){
	    const sum = a + b;
	    cb(sum);
    }
    function print(data){
	    console.log("The sum is: ",data);
    }
    add(1,2,print);
```

## Is there a way to decrease the load time of a web application?

Here are some ways to reduce load times for web applications:

- Image Optimization: The file size of an image can be dramatically reduced by switching to a different file format. For example, GIFs work well for images with few colors, such as logos, JPEG is ideal for images with lots of colors and details, such as photographs, and PNG format is ideal for transparent images with high quality.
- Keep JavaScript and CSS in external files: Embedding JavaScript and CSS in HTML documents forces them to be downloaded every time the HTML document is loaded. In this case, browser caching is not utilized, and the HTML document becomes larger. This is why you should always place CSS and JavaScript in external files; it is a best practice and simplifies maintenance.
- Reducing redirects: Too many redirects will delay the loading time of a website. HTTP requests and responses are delayed each time a page redirects. Getting rid of unnecessary redirects on your site will reduce the load time of your site significantly.
- Load CSS and JavaScript files asynchronously: Your website contains CSS and JavaScript files that can be loaded either synchronously or asynchronously. As part of synchronous loading, each file is loaded sequentially, in the order it appears on your site. As opposed to synchronous loading, asynchronous loading allows multiple files to be loaded simultaneously, boosting the performance of a website.
- Minify HTML, CSS, and JavaScript: If you optimize the way your files load, your pages will load more quickly. You can do the same when it comes to HTML, CSS, and JavaScript code. By eliminating unnecessary spaces, characters, and comments, you can reduce the size of your files. This will make your web pages load faster.

## Callback Hell

Callback hell is a term used to describe the situation where multiple asynchronous operations are performed sequentially, resulting in a series of nested callback functions. This can make the code difficult to read, maintain, and debug.

```
function fetch("google.com", function(data){
    decode(data,function(decodedData){
        encode(decodedData, function(output){
            process(output,function(final){
                console.log(final);
            })
        })
    })
})
```

## Function arguments vs Function parameters

```
function add(a, b) {
	    return a + b;
	}

add(1,2);
```

In this example, `a` and `b` are the function parameters. When the function is called, the values passed to `a` and `b` are the function arguments

## Higher Order Function

A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
Some built-in HOF's are:

- `map()`
- `reduce()`
- `filter()`
- `sort()`
- Custom:

  ```
  function operate(x, y, operation) {
  return operation(x, y);
  }

  function add(a, b) {
  return a + b;
  }

  console.log(operate(1,2,add)) //OUTPUT: 3
  ```

## Factory Functions

A JavaScript function that returns an object is known as a factory function. Factory functions often accept parameters in order to customize the returned object.

```
function createRobot(name) {
    return {
        name: name,
        talk: function () {
            console.log('My name is '
                + name + ', the robot.');
        }
    };
}

//Create a robot with name Chitti
const robo1 = createRobot('Chitti');

robo1.talk(); // OUTPUT: My name is Chitti the robot.
```

## Array Methods

https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769

## What is execution context?

In JavaScript, an execution context is an environment in which JavaScript code is executed. It defines the scope of variables, functions, and the this keyword.
Think of it as a container that holds all the necessary information for executing a piece of code.

## What is lexical scoping?

It means that the scope of a variable is determined by its position in the code, specifically where it's declared. In other words, a variable's scope is defined by its lexical (textual) location within the code.

## call(), apply(), and bind():

In JavaScript, call(), apply(), and bind() are methods available on all functions. They allow you to control the context (this value) of the function and how it is invoked.

1. **call()**

   - Purpose: Invokes a function immediately, setting the this value to the first argument passed.
   - Arguments:
     - First argument: The object to be used as this within the function.
     - Subsequent arguments: The arguments of the function, passed individually.
   - Example:

   ```
   const person = {
   name: "Alice",
   greet: function(greeting) {
       console.log(greeting + ", " + this.name);
   }
   };

   const anotherPerson = {
   name: "Bob"
   };

   person.greet.call(anotherPerson, "Hello"); // Output: Hello, Bob
   ```

2. **apply()**

   - Purpose: Invokes a function immediately, setting the this value to the first argument passed.
   - Arguments:
     - First argument: The object to be used as this within the function.
     - Second argument: An array-like object (or array) containing the arguments of the function.
   - Example:

   ```
   const numbers = [1, 2, 3];

   function sum(a, b, c) {
   return a + b + c;
   }

   console.log(sum.apply(null, numbers)); // Output: 6
   ```

3. **bind()**

   - Purpose: Creates a new function that, when called, has its this value set to the provided value. It also allows you to partially apply arguments.
   - Arguments:
     - First argument: The object to be used as this within the new function.
     - Subsequent arguments (optional): Arguments to be pre-filled when the new function is called.
   - Example:

   ```
   const greet = {
   greet: function(a,b){
       console.log(`Hello ${this.name}, ${a}, ${b}`)
   }
   };

   var greetPreetham = greet.greet.bind({name:"Preetham"});
   var greetKushal = greet.greet.bind({name:"Kushal"},11, 22);
   var greetRavi = greet.greet.bind({name:"Ravi"});

   greetPreetham();
   // Hello Preetham undefined undefined

   greetKushal();
   // Hello Kushal 11 22

    greetRavi();
   // Hello Ravi undefined undefined

   greetRavi(44,55);
   // Hello Ravi 44 55
   ```

## What are Prototypes and Prototypal Inheritance?

In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is called the prototype. In short, objects can inherit properties from other objects — the prototypes.

- When we try to access a property of an object, the property is not only searched in the object itself. It's also searched in the prototype of the object, in the prototype of the prototype, and so on – until a property is found that matches the name or the end of the prototype chain is reached.
- If the property or method isn’t found anywhere in the prototype chain, only then will JavaScript return `undefined`.
- Every object in JavaScript has an internal property called `[[Prototype]]`.
- To find the `[[Prototype]]` of an object, we will use the `Object.getPrototypeOf()` method.
- Each object has a private property (referred to as its [[Prototype]]) that maintains a link to another object called its prototype. That prototype object has its own prototype, and so on until an object whose prototype is null is reached.
- Reference https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/ and https://www.w3schools.com/js/js_object_prototypes.asp
- Example:

  ```
  function Person(first, last, age, eyecolor) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eyecolor;
      }

  Person.prototype.nationality = "English";

  const preetham = new Person("Enjamuri","Preetham","27","brown");
  console.log(Object.getPrototypeOf(preetham));
  // OUTPUT: Person { nationality: 'English' }


  // Define the new method on the Array prototype
  Array.prototype.myCustomMethod = function(arg) {
  // 'this' refers to the array the method is called on
  console.log("Array:", this);
  console.log("Argument:", arg);
  // Perform your desired operations here
  };

  // Create an array
  const myArray = [1, 2, 3];

  // Use the custom method
  myArray.myCustomMethod("Hello");

  // OUTPUT: Array: [ 1, 2, 3 ]
             Argument: Hello
  ```

## What is Currying?

Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, with each function taking a single argument and returning another function.

Example:

    function add(a, b, c) {
        return a + b + c;
    }

    With currying, the above function can be written as:

    function curryAdd(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
                };
            };
        }

Currying allows you to reuse partial implementations of a function. In case you do not have all the arguments available, you can fix some arguments of the function initially and return a reusable function.

```
// Reusable function
const addTwo = curryAdd(2);
console.log(addTwo); // prints the function

// Calling final result
const result1 = addTwo(5)(10);
console.log(result1); // 17

const result2 = addTwo(3)(5);
console.log(result2); // 10
```

addTwo is a reusable function that can be used later, when additional arguments become available.

Thus, currying enhances code modularity and flexibility with partial function application. It also allows you to create functions that are tailored to specific needs as seen in the example above.

Currying simplifies complex functions by breaking them down into simpler, more manageable parts. This leads to cleaner and readable code.

## What are polyfills ?

Polyfills are pieces of code that provide modern functionality to older browsers that don't support it. This ensures that your code runs seemlessly on different browsers and versions. Check below example:

**Array.map**

This method takes a callback function as a parameter, executes it on each array element and returns a new, modified array.
The callback function takes three arguments: the array element, index and the array itself. The last two arguments are optional.

```
Array.prototype.map = function(callback) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
```

The logic is simple. Call the function for each element of the array and append each value to the new array. The this keyword is the object on which you are calling the function, in this case, the array.

## Debouncing and Throttling in javascript

1. **Throttling**
   - Throttling is a technique used to limit the rate at which a function is called. Throttling transforms a function such that it can only be called once in a specific interval of time.
   - Example: Once a button is clicked which makes a request to server, to restrict user from making multiple requests at once, we can use throttling to add restrictions to that function from calling for an interval of time
   - https://replit.com/@preethamweb3/Nodejs#index.js
2. **Debouncing**
   - Debouncing is a technique in programming that delays the execution of your code until the user stops performing a certain action for a specified amount of time.
   - Example: we want to show results for a search query, but only after the user stops typing for a second. A user could keep typing something but we only take input when he stops for a second. So we dont need to send a search query request to backend for each letter the user types, instead we can send the whole input at a time when user types and stops for a specific amount of time.
   - https://replit.com/@preethamweb3/Debounce#script.js

## Threads

A thread is an execution context, which is all the information a CPU needs to execute a stream of instructions.

- Javascript is singlethreaded
- Whenever multiple threads execute in a process at the same time, we call this "multithreading".
- Multi threading is useful for CPU intensive tasks

## Exports in react and node

**React**

1.  Uses ES Modules (ESM) syntax
2.  We use `import * from *;` to import modules
3.  **Named exports**

    ```
    // MyComponent.js
    export const message = "Hello from MyComponent!";

    export function greet(name) {
      return `Hi, ${name}!`;
    }

    // SomeOther.js
    import {message, greet} from "./MyComponent.js"
    ```

4.  **Default exports**

    ````
    // MyComponent.js
    const MyComponent = () => {
    return <div>Hello, World!</div>;
    };

        export default MyComponent;

        // SomeOther.js
        import MyComponent from './MyComponent';

        // Use MyComponent directly in your JSX
        ```

    **Nodejs**

    ````

5.  Uses CommonJs module system
6.  We use `require` to import modules
7.  **Named exports**

    ```
    // module.js
    function add(a, b) {
      return a + b;
    }
    const subtract = (a, b) => a - b;

    exports.add = add;
    exports.subtract = subtract;

    // SomeOther.js
    const { add, subtract } = require('./module.js');

    console.log(add(2, 3)); // Output: 5
    ```

8.  **Default exports**

    ```
    // module.js
    const calculator = {
      add(a, b) {
        return a + b;
      },
      subtract(a, b) {
        return a - b;
      }
    };

    module.exports = calculator;

    // SomeOther.js
    const calculator = require('./module.js');

    console.log(calculator.add(2, 3)); // Output: 5
    ```

## Miscellaneous

1. JavaScript Objects are Mutable
2. JavaScript for...in loop can be used to iterate over the keys of an object.
3. JavaScript for...of loop can be used to iterate over an array.

## Interview

1. Remove duplicate items from an array.
2. Shuffle items in an array
