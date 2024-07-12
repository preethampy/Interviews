# Javascript

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
    }

    const myCar = new Car("Toyota");
    console.log(myCar.brand); // Output: "Toyota"
    ```
## call(), apply(), and bind():

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

## Threads
A thread is an execution context, which is all the information a CPU needs to execute a stream of instructions.
- Javascript is singlethreaded
- Whenever multiple threads execute in a process at the same time, we call this "multithreading".
- Multi threading is useful for CPU intensive tasks

## Pair Programming.
In pair programming, two programmers share only one machine and work together. During the development process, one programmer will be the driver who codes and another will act as the observer (navigator) who will make sure the code is written correctly, proofread and spell-check it, while also deciding where to go next. Roles can be swapped at any time: the driver becomes the observer and vice versa. You can also call it "pairing", "paired programming", or "programming in pairs".

## Long Polling.
Long polling is defined as a web application development technique used to push information/data from servers to clients as quickly as possible. When a request is made from the client to the server, long-polling maintains the connection between the two. This connection is maintained until the information is ready to be sent from the server to the client.  Once a server receives a request from a client, the connection does not close immediately; the connection is only closed once the server has sent the data back to the client or when a timeout threshold has been reached (connection timeout).


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
1. String  
2. Number  
3. Bigint  
4. Boolean  
5. Undefined  `typeof(undefined) is undefined`
6. Null  `typeof(null) is object`
7. Symbol  
8. Object

### Non-Primitive
The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types.
1. Array object
2. Date object

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

## JS is Sync or Async ?
Sync
https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

## Array Methods
https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769

## Factory Functions
A JavaScript function that returns an object is known as a factory function. Factory functions often accept parameters in order to customize the returned object.

## What is execution context?
In JavaScript, an execution context is an environment in which JavaScript code is executed. It defines the scope of variables, functions, and the this keyword.
Think of it as a container that holds all the necessary information for executing a piece of code.

## What is lexical scoping?
## What is difference between ES5 and ES6?

## Miscellaneous
1) JavaScript Objects are Mutable
2) JavaScript for...in loop can be used to iterate over the keys of an object.
3) JavaScript for...of loop can be used to iterate over an array.

## Interview
1) Remove duplicate items from an array.
2) Shuffle items in an array

# Reactjs

##  How does React work?
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
A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic. 

## What are even emitters in react js ?
React event emitters simplify communication between components by providing a channel for them to send and receive messages. This pattern is especially beneficial when the components are not directly related, such as siblings or deeply nested child components.

## What are Higher-order components in reactjs ?
In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

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

## What is useImperativeHandle?
## What are performance and optimisation techniques used in React?
## Shadow DOM
## Lifting up state in react
## state vs props
- props are used to pass data between two different components
- While state is specific to each component and changes over time 








# NodeJs

## NodeJs is Sync or Async ?
Async

## Features of nodeJs
1) Asynchronous and non-blocking
2) Event driven
3) Single threaded
4) cross platform
5) open source
   
## Advantage of using nodeJs
1) High performance
2) Scalability
3) Easy to learn
4) Quick to setup

## Disadvantage of using nodeJs
1) Cannot be used for CPU intensive works
2) High memory consumption when used to develop complex applications.

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

## Event Emitter
## Event Loop
## Miscellaneous

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
# Terminology
## LRU VS FIFO
## ORM
Object-Relational Mapping (ORM)
ORM serves as a bridge between our application and database. It will ease the database operations hence it boosts developer productivity. Sequelize is the most used library for NodeJs as ORM.
## Smart Endpoints & Dumb pipes
## Atomic Updates