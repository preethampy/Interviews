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

1. We type google.com
2. Browser first search for ip address that is registered with google.com domain in DNS(domain name server)
3. That ip address (ex: 198.182.74.1:3000) will be sent to browser by DNS and browser replaces the domain with ip address
4. Then a TCP/IP connection will be established between client(browser) and server. The TCP/IP protocol here defines how the data travels across the web.
   - The job of TCP is to breakup the requests/responses into thousands of chunks called `packets` before they are sent
   - Then when it reaches the destination, it will reassemble those packets into original request/response so that they arrive as quickly as possible
   - The job of IP here is to route these request/responses over the internet ensuring it arrives at the right destination by using the IP address on each of those packets
5. Then we will send HTTP-request for which server will also respond with HTTP-response. HTTP (Hyper Text Transfer Protocol) is a set of rules and properties (host, method(GET, POST), request-target(/home, /posts), request-headers, body etc) that a server needs in order to process the request. When request is processed, server will respond will HTTP-response that has properties like status code, response-headers, body etc.

## What is an event-driven architecture ?

An event-driven architecture has 3 main things:

1. **Event Emitter** - Emits event
2. **Event Listener** - Listen for the events emitted
3. **Event Handler** - a callback function that gets executed depending on events that are emitted
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

1. Blocking operations are synchronus tasks - will be sent to thread pool which is a pool of threads
2. Non blocking operations are asynchronus tasks - handled by event loop

## Meaning of single thread

which means that it can only execute one task at a time.

## Concurrency in nodeJs

Concurrency is the ability of a program to handle multiple tasks at the same time. Node.js is a single-threaded, event-driven JavaScript runtime environment that achieves concurrency by using an event loop and callbacks. When an operation is started, it is registered with the event loop and then the program moves on to the next task. When the operation is complete, the event loop will call the callback function that was registered with it.

## Some of core modules of nodeJs

1. fs - handle file system
2. os - information about operating system
3. path - to handle file path
4. crypto
5. util
6. http
7. https

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
   - Distributes incoming traffic across multiple instances of your application.
   - Prevents any single instance from being overwhelmed, improving performance and fault tolerance.
4. **Circuit Breakers:**
   - A pattern that prevents cascading failures by stopping requests to a failing service after a certain threshold.
   - Libraries like `opossum` can be used to implement circuit breakers in Node.js.
   - Ref to circut breaker https://medium.com/geekculture/design-patterns-for-microservices-circuit-breaker-pattern-276249ffab33
   - Ref to a blog post on opossum https://medium.com/deno-the-complete-reference/circuit-breaker-pattern-in-node-js-a61fe2c4f2a4

## Long Polling.

Long polling is defined as a web application development technique used to push information/data from servers to clients as quickly as possible. When a request is made from the client to the server, long-polling maintains the connection between the two. This connection is maintained until the information is ready to be sent from the server to the client. Once a server receives a request from a client, the connection does not close immediately; the connection is only closed once the server has sent the data back to the client or when a timeout threshold has been reached (connection timeout).

## What is SSL ?

# AWS

### How an EC2 instance can be established using VPC

### AWS EC2 instance mongodb to local mongodb compass

1. Install mongodb community
2. Add 27017 port to inbound rules with 0.0.0.0 (anyone can access)
3. Open instance terminal, go to / where etc is located
4. cd to etc and type command sudo vi mongod.conf
5. Enter shift + i to enter into insert mode and change 127.0.0.1 to 0.0.0.0
6. Enter esc and enter :wq to save
7. Restart mongod server - service mongod restart
8. Connect to mongodb in aws from local compasss using - mongodb://3.108.44.198:27017/ (3.108.44.198 is Public IPv4 address)

### How to add authentication to AWS Ec2 instance mongodb

1. Create a db first ex: djblog
2. type `mongosh` and mongo shell appears
3. type `use djblog` to start using djblog as current db
4. type `db.createUser({user:"username",pwd:passwordPromt(),roles:[{role:"readWrite",db:"djblog"}]})` this creates a user authentication with supplied username and password.
5. cd to etc and type command `sudo vi mongod.conf` and uncomment `security` and add `authorization: enabled` under it.
6. now run `sudo service mongod start`
7. now run `mongosh -u username -p password Public IPv4 address from instance details/djblog`

# Testing

We will use `jest` library for testing.

1. Use `npm i jest` to install
2. User `npm init jest@latest` to create a jest config file for our node project
3. Add `"test": "jest"` to `scripts` object in `package.json` file and so we can run npm test to run `*.test.js` files.
4. create a `tests` folder inside `server` directory and include all the test files there.

## Unit testing

Unit testing is, testing parts of controllers or the whole controller function and its dependency functions.

## Integration testing

Integration testing is, testing the apis we have created using `supertest` npm package

# Microservices

## Smart Endpoints & Dumb pipes

## Circut Breaker

## Forward proxy vs Reverse proxy

## What is an API gateway

# Terminology

## LRU VS LFU VS FIFO

The Least Recently Used (LRU) Cache operates on the principle that the data most recently accessed is likely to be accessed again in the near future. By evicting the least recently accessed items first, LRU Cache ensures that the most relevant data remains available in the cache.

# Manager Round

## Introduce yourself

1. I am preetham, from Shadnagar, Hyderabad.
2. I did my graduation from Mahaveer Institute of Science and Technoloy, Hyderabad
3. I have a total of almost 4 years of work experience
4. I began my career as a python developer where the main focus was writing testing scripts, web scraping and tradebot
5. Later i switched to Backend Development where i had opportunity to work on lots of different kind of scalable projects using nodejs, expressjs, mongodb and lot more libraries that depending on projects.
6. Then in may 2023, i decided to focus on a little startup project idea i had, where i worked independently from end-to-end until march 2024.
7. Since then i am looking for either backend or full-stack position to contribute my skills

## How would you describe yourself ?

I would describe myself as a highly motivated, self-taught, total work oriented, team player (i like working with others), proactive (i challenge myself to finish backend apis before frontend asks for it) and especially life-long learner (i always seek new knowledge and experiences)

## What are your strengths and weaknesses

### Strengths

1. Self-learning (So i dont feel like i am bothering someone)
2. Self-Motivation (Because i always be willing and excited to learn or improve my skills and knowledge, it pushes me to deliver my best at work)
3. Quick learning: Because i like to learn by doing, i always do them both at the same time
4. High dedication towards the targets (if there is task, the only thing i will have in my mind is that task and that i need to finish it in time)
5. Adaptablity: Because i am a quick learner, i always try to keep myse
6. lf updated with new technologies and improve my skills
7. Problem solving and Challenges - I like it when i encounter a new challenge or problem because it really make me think more, do more, and in simple, it pushes to think out of the box, which helps me a lot in enhancing myself)

### Weakness

1. I figured it out that sometimes i spend too much in minure details though it doesnt affect the outcome (like formatting the date at backend, specific error message for all requests all these can be handled by frontend)
2. Most of the times i take too many tasks even if i feel like i might not be able to solve them, and i dont say anything because i dont talk much like an introvert. That later affects me.
3. I get frustrated and low when or if dont reach my targets and i noticied it kinda effects my health

## Why do you believe you are a good fit for this position

1. I believe i am a great fit for this position because i have almost 3 years of experience in backend development. Which directly aligns the core responsibilities of this job role
2. My expertise in backend technologies has allowed me to deliver scalable and efficient projects
3. Also, having experience in code optimization, performance improvement, database query optimization
4. I think these qualities would make me a good fit for this position

## Why should we hire you

1. I believe i am a great fit for this position because i have almost 3 years of experience in backend development. Which directly aligns the core responsibilities of this job role
2. My expertise in backend technologies has allowed me to deliver scalable and efficient projects
3. Also, having experience in code optimization, performance improvement, database query optimization
4. Also, I believe My dedication, self-learning, self-motivation at work would result in great outputs
5. So think these qualities would make me a good match for this position

## What are your biggest challenges and how you solved them

1. I have faced lot of challenges and its totally dependent on the kind of project it is
2. Sometimes the project demands to have a new technology to be implemented, that would be a challenge for that project
3. Wallet is different and database is different, so i used transactions to deal with this issue in blockchain project
4. Razorpay payments issue where payments appear in website but not in my db, it was webhooks concept at that time
5. Google Maps SDK
6. CCXT library to NON CCXT library
7. Market Making Bot

## Why do you want to join us

1. I have gone through company website and noticied that the company has a commitment towards innovation which attracts more great projects
2. And i have also noticied the techstack company has been into
3. So i believe that joining this company, i can be a part of such great innovative projects while also improving myself with different challenges i face and different technologies i might use

## Why did you leave your last company

1. Moving from product to marketing
2. Worked on just 1 project since 4-6 months, with very minimal new implementations
3. so i came to a situation like i have no scope of improvement so i thought i can implement my own startup project

## Where do you see yourself in 5 years

1. In 5 years, i see myself continuing to grow within this company, by taking more responsibilities and contributing to more complex and larger projects
2. I also want to expand my knowledge in areas like leadership and play a key role in helping the company achieve its long-term goals

## What motivates you at work

1. I love my job and what i do. That would be the first thing that always keeps motivating me
2. complex problems, challenging tasks, finding solutions for them gives me a good feeling of accomplishment
3. Also, knowing my work contributes to the success of team and company is a big motivating factor for me
4. Also, the feeling that i need to finish the targets in given deadline also motivates me and pushes me to work off my limits like off my office times

## What is your role in a team

1. In a team, i would take a role of problem solver and a contributer focusing on improving my skills so i can adapt to different project environments
2. I like to communicate with my teammates about ideas, feedbacks so together we can take project to next level
3. I am actually flexible to step into different roles depending on project needs be it taking lead or supporting team, depending on project demands
4. so overall my role would be adaptive so the project is a success

## What are you expectations

1. I am expecting 7.5 lakhs per annum
2. Because people in market with my experience are earning more or same as my expectations
3. Also my total work experience and my relevant work experience
4. I have enhanced skill set than what i have had in my ex company
5. Also the cost of living in banglore and the inflation of everything
6. My expected salary would really help me stay motive or i will always have that feeling that i couldnt get what i have expected.
7. It is the base for my future growth as my hikes and bonuses depends on it.
8. I have mastered lot of things and learned new technology implementations so i dont need to spend more time to learn something when i join company
9. I didnt know or have only known the basics of what is redis, kafka, microservices, docker, load balancing, clusters, firebase, sockets, session based authentication, lot of middlewares, nginx and lot more

## Software development cycle

1. Planning
2. Defining
3. Designing
4. Building
5. Testing
6. Deployment
