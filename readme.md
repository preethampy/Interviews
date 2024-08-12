# Table
1. [HTML](#html)
2. [Javascript](#Javascript)
3. [React](#Reactjs)
4. [Node](#NodeJs)
5. [Mongodb](#Database)

# HTML
1. Stands for Hyper Text Markup Language
2. It is a standard text formatting language used for developing web pages

## Tags and Attributes
1. Tags are primary component of HTML that defines how the content will be structured or formatted. Below is a `<p>` tag example.
    `<p> My paragraph </p>`
2. Attributes are used along with HTML tags to define characteristics.
    `<p class="i am an attribute"> My paragraph </p>`

## Void elements
Which do not have any closing tags are known as void elements
`<img/> <br/> <hr/>`

## Collapsing whitespace
Whitespace collapsing is a feature in HTML that allows browsers to display multiple spaces as one, and ignore spaces before and after elements. 

## HTML entities
In HTML some characters are reserved like `<`, `>`, `/`, etc. To use these characters in our webpage we need to use the character entities called HTML Entities.
```
< use &lt;
> use &gt;
& use &amp;
```

## Types of lists
1. Ordered lists
2. Unordered lists
3. Defination/Description list
```
Ordered list
<ol>
    <li> Item 1 </li>
    <li> Item 2 </li>
</ol>

Unordered list
<ul>
    <li> Item 1 </li>
    <li> Item 2 </li>
</ul>

Defination/Description list
<dl>
    <dt>Heading</dt>
    <dd>- body </dd>
    <dt>Heading</dt>
    <dd>- body </dd>
</dl>
```

## Class attribute
The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.

## HTML layout structure
1. <header>
2. <nav>
3. <main>
4. <section>
5. <article>
6. <aside>
7. <footer>

## What is DOCTYPE in html ?
We define DOCTYPE to tell the browser what version of HTML the page is written in. `<!DOCTYPE html>`
1. Strict Doctype 
2. Transitional Doctype
3. Frameset Doctype

## Default, Defer, Async attributes
1. **Default**: parsing of HTML is blocked until the javascript file is fetched and execute, leading to slower page load times.
2. **Async**: parsing of HTML, javascript files happen asynchronously. Once javascript files are downloaded, will be executed asynchronously.
3. **Defer**: parsing of HTML, javascript files happen asynchronously. But the execution of javascript file happens only after HTML is fully parsed.

# Javascript fundamentals
## Links
1. https://www.geeksforgeeks.org/javascript-output-based-interview-questions/
2. https://rowdycoders.com/top-50-most-asked-javascript-logical-output-interview-qa
3. 

## Pre vs Post Increments
1. Both are used to increment a variable value with 1
2. Both will change the value in-place (modifies the original variable)
2. But pre-increment returns new incremented value and post-increment returns original value (not incremented value)
3. **Example:**
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
    -  JavaScript uses the so-called “dictionary” or “lexicographical” order.
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
    - The global object in the browser, meaning all global variables and functions are actually     properties of the window object.
    - Provides access to features like:
        1. Window dimensions (innerWidth, innerHeight)
        2. Location (href, pathname)
        3. History (back(), forward())
        4. Timers (setTimeout(), setInterval())
        5. Browser features (alert(), prompt(), confirm())
2. Document Object:
    - Represents the HTML document loaded within the browser window.
    - Provides access to the DOM (Document Object Model), allowing you to manipulate the structure,     content, and styling of the HTML elements.
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
1) We have a parent function `gamingCard` which assign's value 100 to a variable on every instance it is called/created.
2) We also have a child function inside parent function called `swipeCardForGame` which takes `charges` as an argument which basically mimics to charge for playing a game by subtracting `charges` from `points` variable
3) Then the parent function returns the child function
4) We then create two persons instances (`personOne`, `personTwo`). Now two persons variables have their `points` variable set to 100 by default.
5) When a person wants to play a game, he has to swipe his card and charges will be applied for playing that game, we will do `points - charges`. To do this, we will call the personOne and personTwo instances with the chargable amount, like `personOne(10)` `personTwo(20)`
6) Here, parent function gamingCard returns a swipeCardForgame function when we initiated person (`const personOne = gamingCard();`), then we charge person by passing a number to the instance (`personOne(10)`). This works because the instances created are different and isolated for both the persons.

## Generator functions
1) Generator functions are functions that return a generator object
2) These objects are used by calling the next method on the generator object
3) A generator function uses the yield keyword to generate values, pause the execution and return the value to the user.
4) It remembers the last state and resumes execution on calling it again.
5) Example code is below:
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
###  Primitive
Primitive data types are the basic data types that store a single value, such as a number, string, or boolean.
1. String `typeof(String) is function`
2. Number  `typeof(Number) is function`
3. Bigint  `typeof(Bigint) is function`
4. Boolean  `typeof(Boolean) is function`
5. Symbol `typeof(Symbol) is function`
6. Object `typeof(Object) is function`
7. Undefined  `typeof(undefined) is undefined`
8. Null  `typeof(null) is object`

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
In this example,  `a`  and  `b`  are the function parameters. When the function is called, the values passed to  `a`  and  `b`  are the function arguments

## Higher Order Function
A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
Some built-in HOF's are:

 - `map()`
 - `reduce()`
 -  `filter()`
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
1. Uses ES Modules (ESM) syntax
2. We use `import * from *;` to import modules
3. **Named exports**
    ```
    // MyComponent.js
    export const message = "Hello from MyComponent!";

    export function greet(name) {
      return `Hi, ${name}!`;
    }

    // SomeOther.js
    import {message, greet} from "./MyComponent.js"
    ```
4. **Default exports**
    ```
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
1. Uses CommonJs module system
2. We use `require` to import modules
3. **Named exports**
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
4. **Default exports**
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
1) JavaScript Objects are Mutable
2) JavaScript for...in loop can be used to iterate over the keys of an object.
3) JavaScript for...of loop can be used to iterate over an array.

## Interview
1) Remove duplicate items from an array.
2) Shuffle items in an array

# Reactjs

## React life cycle
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
The three phases are: **Mounting**, **Updating**, and **Unmounting**. Also, the components in react are of two types 1) Function Based 2) Class Based
| Class Based | Function Based |
| ----------- | ----------- |
| Also known as `stateFull` component as we can initialize state in it | Also known as `stateLess` component as we cannot initialize state in it.(But we have `useState` hook to make it a stateFull component like class component) |
| Here we use `lifecycle methods` | Here we **can't use** `lifecycle methods` but we use **React hooks** |
![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bsk4y_rRxmX_Qtol3H3caw.png)
### Class Based
**Mount**
React has four built-in methods that gets called, in this order, when mounting a component.
1. **constructor()**
- The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
2. **getDerivedStateFromProps()** 
- This method is called right before rendering the element(s) This is the natural place to set the state object based on the initial props.
3. **render()** 
- render() method is required, and is the method that actually outputs the HTML to the DOM
4. **componentDidMount()**
- The componentDidMount() method is called after the component is rendered. This is where you run statements that requires that the component is already placed in the DOM

**Update**
A component is updated whenever there is a change in the component's state or props.
1. **getDerivedStateFromProps()**
- This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props
2. **shouldComponentUpdate()**
- In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.
3. **render()**
- The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.
4. **getSnapshotBeforeUpdate()**
- In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
5. **componentDidUpdate()**
- The componentDidUpdate method is called after the component is updated in the DOM.

**Unmounting**
when a component is removed from the DOM
1. **componentWillUnmount**
- The componentWillUnmount method is called when the component is about to be removed from the DOM

### Function Based
There are no lifecycle methods in function based, instead we have react hooks.
We can use below hooks instead of class based lifecycle methods in function based.
1. Instead of `componentDidMount` use `useEffect`
    ```
    useEffect(()=>{
        
    },[]);
    ```
2. Instead of `componentDidUpdate` use `useEffect`
    ```
    useEffect(()=>{
        // called everytime there is a dependency update
    },[dependencies]);
    
    useEffect(()=>{
        // called everytime there is any kind of changes or updates in component
    });
    ```
3. Instead of `componentWillUnMount` use `useEffect`
    ```
    useEffect(()=>{
        // below return function will be called before unmounting
        return (()=>{
          // code here will be called while unmounting
        });
    },[]);
    ```
4. Instead of `shouldComponentUpdate` use `useMemo`
## How does React work?
1) React works by creating a virtual DOM (Document Object Model) in memory, which is a lightweight representation of the actual DOM.
2) When a component's state (data) changes, React creates a new virtual DOM representation of that component.
3) React then compares this new virtual DOM with the previous one to identify the differences. This process is called "diffing." (Diffing algorithm)
4) Once React knows what has changed, it updates only the necessary parts of the actual DOM. This process is called "reconciliation" and is much more efficient than updating the entire DOM every time something changes.

## Features of reactjs
1. JSX syntax - By using JSX, we can write HTML structures in the same file that contains JavaScript code.
2. Components - Components in react are building blocks which can be reused through out the application instead of re-writing code for the same component.
3. Virtual DOM - It is a lightweight representation of the actual DOM.
4. High performance - React updates only those components that have changed

## What is an event in React?
An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.
An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc.

React events are named using camelCase, rather than lowercase in HTML.
With JSX, you pass a function as the event handler, rather than a string in HTML.

`<Button onPress={lightItUp} />`

## What are the components in React?
Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.

There are two types of components in React:

**Functional Components**: These types of components have no state of their own and only contain render methods, and therefore are also called stateless components. They may derive data from other components as props (properties).

**Class Components**: These types of components can hold and manage their own state and have a separate render method to return JSX on the screen. They are also called Stateful components as they can have a state.

## What is a state in React?
The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.
The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.

## What is a higher-order component in React?
In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component. A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic. 

## What are even emitters in react js ?
React event emitters simplify communication between components by providing a channel for them to send and receive messages. This pattern is especially beneficial when the components are not directly related, such as siblings or deeply nested child components.

## What are custom hooks in reactjs ?
Custom hooks in React are JavaScript functions that start with the word use and allow you to extract and reuse stateful logic from components. They enable you to share component logic that is used by multiple components.

## How many types of DOM and how many levels are in DOM?
The W3C DOM standard is divided into three types: Core DOM, XML DOM, and HTML DOM. Each type represents a standard model for a specific document type:
- Core DOM: The standard model for all types of documents
- XML DOM: The standard model for XML documents
- HTML DOM: The standard model for HTML documents
There are 4 levels in DOM. DOM level 1...... DOM level 4

## What is Babel and Webpack?
1. Babel is a JavaScript compiler. It takes modern JavaScript code (ES6+, also known as ECMAScript 2015 and beyond) and transforms it into a version that can be understood by older browsers or environments that don't fully support all the latest features.
2. Webpack is a module bundler. It takes your JavaScript code (and other assets like CSS, images, etc.) and combines them into one or more bundles that can be loaded by a web browser.
   
## What is the lifecycle of React?
A React component goes through three main phases during its lifecycle:
1. Mounting - This phase occurs when a component is created and inserted into the DOM.
2. Updating - This phase occurs when a component's props or state change.
3. Unmounting - This phase occurs when a component is removed from the DOM.

## What is the difference between useLayoutEffect and useEffect?
- useLayoutEffect
    Runs synchronously after all DOM changes, but before the browser updates the screen. This makes it ideal for tasks that need immediate access to the DOM, like measuring element size or position, or preventing visual flickers. However, because it's synchronous, useLayoutEffect can block the browser from painting the DOM until it's finished executing, which can lead to performance issues and make debugging harder.
- useEffect
    Runs asynchronously after the browser has finished painting changes. This makes it ideal for non-blocking tasks, such as fetching data or subscribing to events. Because it's asynchronous, the user doesn't have to wait for useEffect to finish before they can see the results. 


## Controlled and Uncontrolled Component
1. Controlled Components:
    When the values and inputs of a form component or any other component are handled by react state, they are called as controlled components. Ex: A form with value, onChange.
2. Un-controlled Components:
    When the values and inputs of a form component are not handled by the react state, they are called as un-controlled components. Ex: A form without value or onChange and to access such form data, we will use window.name.value when a form with a inputfield has id="name" and has submit function.

## The difference between useState and useRef?
In React, the main difference between useState and useRef is that:
1. **useState** manages component state and triggers re-renders when the state changes.
2. **useRef** accesses and manipulates the DOM without triggering re-renders:


## What is the use of Context API in ReactJS?
The Context API in ReactJS provides a way to share data between components without having to manually pass props down through the component tree. This is particularly useful for data that needs to be accessed by many components at different levels

## What is Idempotence in react ?
Idempotence in React refers to the idea that a component's rendering function should produce the same output given the same input (props and state), no matter how many times it is called.

## state vs props
- props are used to pass data between two different components
- While state is specific to each component and changes over time 

## What is useImperativeHandle?
The useImperativeHandle hook is used to create a custom interface between a child and its parent component. It is commonly used in situations where a parent component needs to interact with a child component directly, such as for form validation or handling of user input.

## Shadow DOM

# NodeJs
## About
Node.js is a cross-platform, open-source JavaScript runtime environment. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.

## Features
- Asynchronous and Non-blocking
- Single-Threaded Event Loop
- Runs on top of V8 JavaScript engine
- Cross-Platform Compatibility
- Scalability, Fast performance
- Node package manager (npm)
- Huge community

## Advantages and Disadvantages
1. **Advantages**
   - High performance
   - Scalability
   - Easy to learn
   - Quick to setup
2. **Disadvantages**
   - Cannot be used for CPU intensive works
   - High memory consumption when used to develop complex applications.

## What is a Process ?
A process represents an instance of the Node.js runtime environment executing your code. A process is just a program which is currently executing.
**Example**:
1. When we start our node server/application on a computer, a node process is created and will be running on that computer. It can be seen in task manager/ monitor(in macos).
2. We can actually access this node `process` from node application using `process` variable
3. Any application (Steam, Browser, Mongodb Compass) are example of process

Every process has one main thread, read below

## What is a Thread ?
A thread is responsible for executing a program code in the process. By default, every process has one main thread.

## What is a Thread Pool ?
Thread pool is a pool of threads, basically group of 4 threads, assigned to perfom expensive tasks (asynchronus) like dealing with files, timers, cryptographic, compression related, dns lookups. They are configurable upto 1024 threads

## Architecture of NodeJs
Nodejs architecture/runtime depends on mainly two dependencies **V8 engine** and **LIBUV** (It also depends on ZLIB for compression, HTTP-PARSER for parsing http, OPENSSL for cyptography and etc):
1. **V8 Engine**
    - It is responsible for converting the javascript code into machine code that a computer can understand and execute
    - Written in c++ along with javascript
2. **LIBUV**
    - libuv is an open source library with strong focus on dealing with asynchronus IO
    - libuv is written in c
    - At client side, browsers doesnt allow us to access underlying clients OS details, file/folder system etc. So in browsers we cannot use javascript to read and write to client's machine. But we have that capability with javascript when using nodejs and this capability is provided by libuv.
    - Libuv gives nodejs access to underlying computer OS, file system, networking and more
    - Libuv also implements two important features of nodejs: 
        1. **Event Loop**
            - Event Loop in nodejs is responsible for executing easy tasks like callback functions, network IO's
        2. **Thread Pool**
            - Thread pool in nodejs is responsible for executing heavy tasks like files related, timers, compression etc 

## Phases in node event loop
1. Timers
2. IO logic
3. Polling
4. Check
5. Close

## What happens when we run a node application ?
1. All the `require` modules code that our node application has are added to `main thread` and are imported
2. Then all the top level code's, means, code that are not inside callback function will be added to `main thread` and are executed
3. Then all the code that runs asynchronusly (ex: `fs.readFile("users.csv",(error, data)=>{ console.log(data) })`) will be added to `thread pool` but not the main thread.
4. When the job of `fs.readFile()` is done, then its callback function `(error, data)=>{ console.log(data) }` is pushed to **event loop**
5. Now, the callback functions that are pushed to event loop wont execute immediatly. They are pushed to `main thread` when the `main thread` is empty.
6. **All the heavy tasks (asynchronus tasks) are offloaded to thread pool**

## Node references
1. https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62 - nodejs event loop animated guide
2. https://dev.to/nodedoctors/animated-nodejs-event-loop-phases-1mcp
3. https://medium.com/@manikmudholkar831995/clustering-and-pm2-multitasking-in-nodejs-c6b10249cfd4
4. https://medium.com/@manikmudholkar831995/event-loop-in-nodejs-999f6db7eb04
5. https://medium.com/@manikmudholkar831995/worker-threads-multitasking-in-nodejs-6028cdf35e9d
6. https://www.scaler.com/topics/nodejs/event-loop-in-node-js/

## What is REPL in nodejs ?
REPL an isolated environment that allows us to run javascript code outside of the browser (example: terminal)
- R stands for READ, it means reading the user input
- E stands for EVALV, it means evaluating the user input
- P stands for PRINT, it means printing the user input
- L stands for LOOP, it means returning back and waiting for new input
We can do this just by typing "node" in terminal and then we can start typing javascript expressions

## How do you read input from users from terminal ?
We can import `readline` module that nodejs provides to do that.
    ```
    // Taking user inputs
    const readline = require("readline");

    const askName = readline.createInterface({
        // Where to ask for input
        input:process.stdin,

        // Where to show the output
        output:process.stdout,
    });

    // What to prompt/ask in terminal
    askName.question("What is your name ?",(name)=>{
        console.log("You entered: ",name);
        askName.close();
    });

    // We can also listen to close event like below
    askName.on("close",()=>{
        console.log("Name given, closing now")
    });
    ```

## How do you create a http server using nodejs ?
    ```
    const http = require("http");

    http
    .createServer((req,res)=>{
        if(req.url == "/hi"){
            res.end("Hey");
        }
        else{
            res.end("Request received");
        }
    })
    .listen(3004);

    ```
## What is dependency injection ?

## Websockets vs Socketio


## Websocket vs REST apis

## Operational vs Programming errors
1. Operational Errors
    - Operational errors occur when software is used incorrectly or in a way that was not intended. These errors can be caused by human error such as unexpected user input or by external factors such as incorrect data, environmental issues like network outages or hardware failures, or network problems. Below are some examples.
    - Divide-by-zero error: This occurs when a program tries to divide a number by zero. 
    - File not found error: This occurs when a program tries to access a file that does not exist.
2. Programmer Errors
    - Programmer errors occur when mistakes are made during the development process by the developer.
    - Examples: Syntax errors, Logical errors

## Authentication vs Authorization
1. **Authentication** - is the process of verifying a user's identity
2. **Authorization** - is the process of verifying if that sepcifc user has permission to access a resource

## How to obtain the IP address of the user in Node.js?
- use `req.socket.remoteAddress` for incoming requests.
- use `ip` moduel or `os.networkInterfaces()` function from `os` module for local ip address of server

## What are error codes in nodejs ?
1. Error code in nodejs vary depending on modules.
2. Common process error codes include between 0-255 and each of the will have a specific meaning.
3. These error codes can be helpful when exiting the `process`.
4. We can use `process.exit(SOME_ERROR_CODE between 0-255 depending on context)` to exit from process and we can use `process.on("exit",(code)=>{ console.log("Process exited with code: ", code) }` to listen for exits.
5. **Example:**
    ```
    index.js
    
    console.log("Hello World");
    process.exit(0);
    process.on("exit",(code)=>{console.log(code)});
    
    // Above listener will execute the callback function on process exit and prints the code 0 which represents that the script has run successfully without any errors
    ```

## Child process vs Cluster vs Worker thread (modules)

**Worker Threads**
1. The `node:worker_threads` module enables the use of threads that execute JavaScript in parallel.
2. Workers (threads) are useful for performing CPU-intensive JavaScript operations.
3. They do not help much with I/O-intensive work.
4. worker_threads can share memory. They do so by transferring ArrayBuffer instances or sharing SharedArrayBuffer instances.

**Child process**
1. child process module is used to create and manage child processes which allows us to run external applications, scripts or shell commands from within nodejs application.
2. It has 4 methods `spawn`, `exec`, `execFile`, `fork`
3. Communication between parent and child can be achieved using sdtin and stdout or IPC (inter process communication) when using `fork`

**Clusters**
1. Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads.
2. Clusters module is built on top of `child_process` module.
3. The cluster we create will distribute the incoming requests using two methods:
    - round-robin method
    - sockets
4. All these cluster processes communicate with the parent (child to parent and parent to child) via IPC (Inter Process Communication channel).

## Control flow function in nodejs
Control flow determines the order in which statements and instructions are executed within a program. It involves making decisions, repeating code blocks, and reacting to events or conditions. In Node.js, control flow is crucial due to its non-blocking nature, where asynchronous operations are a common occurrence
**Control Flow Functions**
1. Callbacks
2. Promises
3. Async/Await

## How do you implement websockets in nodejs ?
```
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });
// ws://localhost:8080

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
```

## What is observer pattern ?
In event-driven architecture, we have three main things. 1) Event emitter 2) Event listener 3) Event handler. Here 1 and 2 are known as observer pattern as it always be observing the events that get emitted

## How does Node.js handle concurrency if it is single-threaded?
Node.js prevents bottlenecks and aids programmers in easily writing the code because of the single-thread model. Internally, there are several POSIX threads for different I/O operations like File, DNS, etc.

So, when Node receives an I/O request, it uses one of these threads for the I/O operation. Once the operation is complete, the result joins the event queue. Because of the event mechanism, the event loop starts after each event, checks the queue, and if Node’s execution stack is free, then the loop adds the queue result to it, thus managing concurrency.

## How does web work ?
1) We type google.com
2) Browser first search for ip address that is registered with google.com domain in DNS(domain name server)
3) That ip address (ex: 198.182.74.1:3000) will be sent to browser by DNS and browser replaces the domain with ip address
4) Then a TCP/IP connection will be established between client(browser) and server. The TCP/IP protocol here defines how the data travels across the web.
    - The job of TCP is to breakup the requests/responses into thousands of chunks called `packets` before they are sent
    - Then when it reaches the destination, it will reassemble those packets into original request/response so that they arrive as quickly as possible
    - The job of IP here is to route these request/responses over the internet ensuring it arrives at the right destination by using the IP address on each of those packets
5) Then we will send HTTP-request for which server will also respond with HTTP-response. HTTP (Hyper Text Transfer Protocol) is a set of rules and properties (host, method(GET, POST), request-target(/home, /posts), request-headers, body etc) that a server needs in order to process the request. When request is processed, server will respond will HTTP-response that has properties like status code, response-headers, body etc.

## What is an event-driven architecture ?
An event-driven architecture has 3 main things:
1) **Event Emitter** - Emits event
2) **Event Listener** - Listen for the events emitted
3) **Event Handler** - a callback function that gets executed depending on events that are emitted
**Examples:**
- A request hitting server - (http module inherits from nodejs event emitter class)
    ```
    const http = require("http);
    const server = http.createServer();

    server.listen(8000);

    server.on("request", (req, res)=>{
        console.log("Request received)!
    });
    ```
- A timer expiry
- A file finishing to read - (fs module inherits from nodejs event emitter class)
- Streams (stream module inherits from nodejs event emitter class)

## How do you create events or custom events in nodejs ?
Events in nodejs can be created using `events` module that nodejs provides.
```
// Custom events
const events = require("events");

const eventEmitter = new events.EventEmitter();

// Initialize the listener and handler first
eventEmitter.on("userCreated",(name, age)=>{
    console.log("User details: ",name, age)
});

// Then emit the event
eventEmitter.emit("userCreated","Preetham",26);
```

## Threads
A thread is an execution context, which is all the information a CPU needs to execute a stream of instructions.
- Javascript is singlethreaded
- Whenever multiple threads execute in a process at the same time, we call this "multithreading".
- Multi threading is useful for CPU intensive tasks

## What do you mean by single threaded ?
Javascript is singlethreaded, Which means it can only take advantage of one CPU core.

## Helpers
- User `ps -aef | grep node` to see the list of nodejs processes running on mac
   
## Blocking vs Non-blocking operations
1) Blocking operations are synchronus tasks - will be sent to thread pool which is a pool of threads
2) Non blocking operations are asynchronus tasks - handled by event loop

## Meaning of single thread
which means that it can only execute one task at a time. 

## Concurrency in nodeJs
Concurrency is the ability of a program to handle multiple tasks at the same time. Node.js is a single-threaded, event-driven JavaScript runtime environment that achieves concurrency by using an event loop and callbacks. When an operation is started, it is registered with the event loop and then the program moves on to the next task. When the operation is complete, the event loop will call the callback function that was registered with it.

## Some of core modules of nodeJs
1) fs - handle file system
2) os - information about operating system
3) path - to handle file path
4) crypto
5) util
6) http
7) https

## Error handling and throwing custom errors
We can use try/catch block.

## What are streams and what types of streams are available in Node.js?
In Node.js, streams are a powerful way to handle data efficiently, especially when dealing with large datasets or network requests. They allow data to be processed in chunks as it arrives, rather than waiting for the entire dataset to be loaded into memory.
1. Readable streams
2. Writable streams
3. Duplex streams
4. Transform streams

## What is the difference between worker threads and child processes?
- worker threads provide an isolated event loop and V8 runtime in the same process,.
- child processes are separate instances of the entire Node. js runtime


## Miscellaneous
- Event loop visualization https://www.jsv9000.app/
- Call stack in event loop follows LIFO (Last in - First out), means, last stack lo padindi first stack nunchi ellipothadi
- we can use clinicjs for cpu and other node health related info
- Use `mkfile -n 1g temp_1GB_file ` to create a 1gb temp file

# Database

## SQL VS noSQL
| SQL                                                                                                                                               | noSQL                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL stands for **Structured Query Language**                                                                                                      | noSQL stands for **Not Only SQLe**                                                                                                                                                           |
| SQL uses RDBMS (Relational Database Management Systems) like mySQL                                                                                | noSQL uses mongoDB database product                                                                                                                                                          |
| RDBMS uses a tabular data structure, with data represented as a set of rows and columns, making the model suitable for structured data.           | Data models vary based on the type of NoSQL database used — for example, key-value, document, graph, and wide-column — making the model suitable for semi-structured and unstructured data   |
| This is a fixed schema where every row should contain the same predefined column types. It is difficult to change the schema once data is stored. | It provides a flexible schema where each set of documents/row-column/key-value pairs can contain different types of data. It’s easier to change schema, if required, due to the flexibility. |
| This uses structured query language (SQL)                                                                                                         | It varies based on the type of NoSQL database used. For example, MongoDB has MQL, and Neo4J uses Cypher.                                                                                     |
| RDBMS is designed for vertical scaling. However, it can extend limited capabilities for horizontal scaling                                        | NoSQL is designed for vertical and horizontal scaling                                                                                                                                        |
| Relationships are defined through foreign keys and accessed using joins                                                                           | Relationships can be nested, explicit, or implicit                                                                                                                                           |
| Transactions are ACID-compliant                                                                                                                   | Transactions are either                                                                                                                                                                      |
| ACID - or BASE-compliant                                                                                                                          |
| Table in sql is                                                                                                                                   | Collection in nosql                                                                                                                                                                          |
| Column in sql is                                                                                                                                  | Field in nosql ({name:"Preetham"}, field is name)                                                                                                                                            |
| Row in sql is                                                                                                                                     | Document in nosql                                                                                                                                                                            |

## ORM
Object-Relational Mapping (ORM)
ORM serves as a bridge between our application and database. It will ease the database operations hence it boosts developer productivity. Sequelize is the most used library for NodeJs as ORM.

## What are vertical and horizontal scalling ?
- vertical scaling describes adding more power to your current machines
- horizontal scaling refers to adding additional nodes

## What is throughput ?
Throughput is the speed at which the database can perform read or write operations; it's measured in the number of read or write operations per second.

## What are ACID transactions and base transactions ?
- Atomicity
- Consistency
- Isolation
- Durability

## What are distributed systems ?
1. A distributed System is a collection of autonomous computer systems that are physically separated but are connected by a centralized computer network that is equipped with distributed system software.
2. autonomous computers will communicate among each system by sharing resources and files and performing the tasks assigned to them.
3. **Examples:**
    - Client-server systems
    - peer-to-peer networks
    - Cell phone network

## CAP theorem
1. CAP theorem is also known as brewers theorem.
2. It states that a distributed system can only provide two of three guarantees at the same time.
3. The three guarantees are **Consistency**, **Availability**, **partition tolerance**

## Normalization and Denormalization in database
1. **Normalization:** when we divide the data into multiple collections with references between those, this process is known as normalization
2. **Denormalization:** when we store data in same collection inside an array or object, it is known as denormalization

# Networking & System design
## What is an API ?
API stands for Application programming interface and it is a set of functions and procedures that allows two applications to talk to each other.
Types of API's:
1. Public API's
2. Private API's
3. Partner API's
4. Composite API's 

## What are different API protocols ?
Protocols are a set of rules for formatting, processing data or set of rules for network communications. Few types of API protocols are as mentioned below:
1. **REST - Representational State Transfer**
    - Uses HTTP protocol for data transmission and are considered as web services that interact between client and servers.
    - These are stateless, meaning no data or status is stored between requests.
    - REST is an architecture thats popular for developing API's and is used by developer as its easy to use and understand
2. **SOAP - Simple Object Access Protocol**
    - This can be used to communicate with other protocols such as TCP and SMTP over the internet.
    - This is considered as more flexible than REST API but also more restrictive
3. **WebSockets**
    - WebSocket is a computer communications protocol, providing a simultaneous two-way communication channel over a single Transmission Control Protocol (TCP) connection.
    - It Enables bidirectional communication between client and server, allowing for continuous exchange once a connection is established. 
    - This makes WebSocket APIs ideal for real-time communication.
    - WebSocket allows data to be sent and received asynchronously
    - Even though they achieve (in general) similar things, yes, they are really different. WebSockets typically run from browsers connecting to Application Server over a protocol similar to HTTP that runs over TCP/IP. So they are primarily for Web Applications that require a permanent connection to its server. On the other hand, plain sockets are more powerful and generic. They run over TCP/IP but they are not restricted to browsers or HTTP protocol. They could be used to implement any kind of communication.
4. **gRPC - Google Remote Procedure Call**
    - gRPC is ideal for backend-to-backend communication, particularly in microservices architectures.
5. **JSON-RPC - JSON Remote Procedure Call**

## What is fault tolerance ?
Fault tolerance is a system's ability to keep operating even if one or more of its components fail. This prevents complete system crashes and minimizes disruptions for users.
Here are a few key techniques used to achieve fault tolerance in Node.js:
1. **Error Handling:**
    - Try-catch blocks: These are fundamental to catching and handling errors within your code.
    - Error events: Node.js uses events to handle errors asynchronously.
    - Error logging: Logging errors to a centralized system helps with debugging and monitoring.
2. **Clustering:**
    - Node.js allows you to create multiple instances of your application (worker processes) that share the same server port.
    - If one worker process fails, the others continue running, ensuring uptime.
3. **Load Balancing:**
   -  Distributes incoming traffic across multiple instances of your application.
    - Prevents any single instance from being overwhelmed, improving performance and fault tolerance.
4. **Circuit Breakers:**
    - A pattern that prevents cascading failures by stopping requests to a failing service after a certain threshold.
    - Libraries like `opossum` can be used to implement circuit breakers in Node.js.
    - Ref to circut breaker https://medium.com/geekculture/design-patterns-for-microservices-circuit-breaker-pattern-276249ffab33
    - Ref to a blog post on opossum https://medium.com/deno-the-complete-reference/circuit-breaker-pattern-in-node-js-a61fe2c4f2a4

## Long Polling.
Long polling is defined as a web application development technique used to push information/data from servers to clients as quickly as possible. When a request is made from the client to the server, long-polling maintains the connection between the two. This connection is maintained until the information is ready to be sent from the server to the client.  Once a server receives a request from a client, the connection does not close immediately; the connection is only closed once the server has sent the data back to the client or when a timeout threshold has been reached (connection timeout).

## What is SSL ?

# AWS
### How an EC2 instance can be established using VPC

### AWS EC2 instance mongodb to local mongodb compass
1) Install mongodb community
2) Add 27017 port to inbound rules with 0.0.0.0 (anyone can access)
3) Open instance terminal, go to / where etc is located
4) cd to etc and type command sudo vi mongod.conf
5) Enter shift + i to enter into insert mode and change 127.0.0.1 to 0.0.0.0
6) Enter esc and enter :wq to save
7) Restart mongod server - service mongod restart
8) Connect to mongodb in aws from local compasss using - mongodb://3.108.44.198:27017/ (3.108.44.198 is Public IPv4 address)
### How to add authentication to AWS Ec2 instance mongodb
1) Create a db first ex: djblog
2) type `mongosh` and mongo shell appears
3) type `use djblog` to start using djblog as current db
4) type `db.createUser({user:"username",pwd:passwordPromt(),roles:[{role:"readWrite",db:"djblog"}]})` this creates a user authentication with supplied username and password.
5) cd to etc and type command `sudo vi mongod.conf` and uncomment `security` and add `authorization: enabled` under it.
6) now run `sudo service mongod start`
7) now run `mongosh -u username -p password Public IPv4 address from instance details/djblog`

# Testing
We will use `jest` library for testing.
1) Use `npm i jest` to install
2) User `npm init jest@latest` to create a jest config file for our node project
3) Add `"test": "jest"` to `scripts` object in `package.json` file and so we can run npm test to run `*.test.js` files.
4) create a `tests` folder inside `server` directory and include all the test files there.
   
## Unit testing
Unit testing is, testing parts of controllers or the whole controller function and its dependency functions.
## Integration testing
Integration testing is, testing the apis we have created using `supertest` npm package

# Docker

Tutorial [paid] - https://learn.piyushgarg.dev/learn/docker?COUPON=DOCKER

## What is docker ?
Docker is a software platform that allows you to build, test, and deploy applications quickly. Docker packages software into standardized units called containers that have everything the software needs to run including libraries, system tools, code, and runtime.

## Download & Install
Visit docker.com and download and install docker based upon your OS.

## Container
Containers are an isolated environment to run any code. Sometimes called a sandbox, in which applications and their dependencies can live.

## Image's

## Commands
1) `docker create 'IMAGE name'` (ex: docker create ubuntu) - creates a container with 'IMAGE' image
2) `docker run -it 'IMAGE name'` (ex: docker run -it ubuntu) - creates and runs a container with 'IMAGE' image
3) `docker pull 'IMAGE name'` (ex: docker pull ubuntu) - installs a new 'IMAGE' locally but doesnt create any container with it.

## Info
1) Containers can have a base image like Ubuntu, kali linux or just node, python etc
2) We can create a container and install ubuntu image using `docker run -it ubuntu`
3) Then we can run (start) that container using same command above
4) We then can install node and any other packages normally
5) Then we can packup the above container with ubuntu base image along with installed npm packages or any other applications and build a docker image

## Creating docker file
1) In our project root folder, create `Dockerfile` file with no extensions.
2) Inside that file write below:
    ```
    FROM 'image name'
    COPY 'file you want to copy' 'path from inside image where you want to copy your file to'
    CMD ['command','file to apply command on']
    ```
3) Then, to create a build, type `docker build -t 'your image name' 'path to that Dockerfile'`
4) When running express apps we can use below config inside Dockerfile before building it:
    ```
    FROM 'image name'
    (ex: FROM node)

    COPY 'file you want to copy' 'path from inside image where you want to copy your file to'
    (ex: COPY index.js /home/app/index.js )

    WORKDIR 'path to working directory, like the root of the project. When this is set, all the commands we run next will run from that path'
    (ex: WORKDIR /home/app/)

    RUN 'command' (ex: npm install) 
    CMD ['command','file to apply command on'] (ex: ['node','index'])
    ```
5) Then with above config, suppose if our express server is running on port `3000` we need to run `docker run -it -p 3000:3000 'image name'`. Where left 3000 is the port we want the express to listen to in our local from 3000(right) which is the port inside the container. Its like, map 3000 port from container to 3000 port in my local machine.
6) Now, to push this image to docker hub, do the following:
    ```
    1) Sign in to docker website and create a respository.
    2) Tag our app to the repository created
    Example: `docker tag node-app preethamweb3/node-app` where 'node-app' is the name of the image in local and preethamweb3/node-app is the repository we created in docker.
    3) Then push it using `docker push preethamweb3/node-app`
    ```

# Microservices
## Smart Endpoints & Dumb pipes
## Circut Breaker
## Forward proxy vs Reverse proxy
## What is an API gateway 

# Terminology
## LRU VS LFU VS FIFO
The Least Recently Used (LRU) Cache operates on the principle that the data most recently accessed is likely to be accessed again in the near future. By evicting the least recently accessed items first, LRU Cache ensures that the most relevant data remains available in the cache.
