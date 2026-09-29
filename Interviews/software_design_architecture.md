# Software development stack

```
┌────────────────────────────────────────────────────────┐
│ 1. Programming Paradigms (OOP, Functional, Procedural) │  <-- OOP lives here
├────────────────────────────────────────────────────────┤
│ 2. Design Principles (SOLID, DRY, KISS, YAGNI)         │  <-- SOLID lives here
├────────────────────────────────────────────────────────┤
│ 3. Design Patterns (Factory, Strategy, Observer)      │
├────────────────────────────────────────────────────────┤
│ 4. Implementation Languages (JS, TS, Java, Python)     │  <-- Tools to write it
└────────────────────────────────────────────────────────┘

```

# Programing paradigms

## Imperative Programming

You tell the computer how to do something step by step

```
let total = 0;

for (const price of prices) {
  total += price;
}
```
You explicitly control the steps

## Declarative Programming

You tell the computer what you want rather than exactly how to do it.

`const total = prices.reduce((sum, price) => sum + price, 0);`

React is largely declarative

`return <h1>Hello</h1>;`

You describe what the UI should look like

## OOPs (Object oriented programming)

It is a fundamental way of structuring and organizing code using objects/classes that contain data and methods.

```
class User{
    constructor(public name:string){}

    greet(){
        return `Hello ${this.name}`
    }
}
```

### Encapsulation

Here we hide the internal data from outsiders and only let those outsiders change that data through safe and approved methods.

```

abstract class Bank{
    private balance:number = 0;
    constructor(protected name: string){}

    <!-- Encapsulation: A safe, controlled way to add money -->
    public deposit(amount:number): void{
        this.balance = amount;
    }
}

```

### Abstraction

Here we hide complex details like implementation and show only whats needed

```
<!-- Abstraction: We hide complex details inside Animal class and we know every Animal might make some sound (makeSound) -->

abstract class Animal{
    constructor(protected name:string){}

    abstract makeSound():void;
}
```

### Inheritance

Here, a child class gets/inherits from parent class

```
abstract class Animal{
    constructor(protected name:string){}

    abstract makeSound():void;
}
```

Inherit

```
class Dog extends Animal{
    makeSound(){
        console.log("Bowww");
    }
}

class Cat extends Animal{
    makeSound(){
        console.log("Meaow");
    }
}
```

### Polymorphism

Means many forms. Same method but different logic or different behaviour

```
abstract class Animal{
    constructor(protected name:string){}

    abstract makeSound():void;

    introduce(){
        console.log(`I am ${this.name}`)
    }
}
```

Inherit

```
class Dog extends Animal{
    makeSound(){
        console.log("Bowww");
    }
}

class Cat extends Animal{
    makeSound(){
        console.log("Meaow");
    }
}

<!-- polymorphism: Dog and Cat has same method, but different behaviour (sounds) -->

const animals: Animal[] = [new Dog("Bruno"), new Cat("milo")];

```

## Functional Programming

Code is organised around functions, preferably pure functions

```
function add(a:number, b:number){
    return a+b;
}
```
## Event driven programming

The program reacts to events

```
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

```
server.on("request", handler);
```

## Procedural programming

A program is organized into procedures/functions, executed in a sequence. This is closly related to imperative programming

```
function login() {}
function validateUser() {}
function createSession() {}
```

## MERN applications

`React → Declarative + Functional`
`Node.js → Event-driven + Functional`
`NestJS → OOP + Dependency Injection`
`TypeScript → Supports OOP + Functional + procedural styles`


# Design principles

## SOLID

SOLID is a set of 5 principles for writing maintainable and flexible code.

### S - Single Responsibility Principle

A class/function should have one main responsibility

Bad:

```
class User{
    createUser(){}
    sendEmail(){}
    generateReport(){}
}
```

Good:

```
class UserService{
    createUser(){}
}

class EmailService(){
    sendEmail(){}
}

class ReportService(){
    generateReport(){}
}

```

**Remember: One class -> one job**

### O - Open/Closed principle

Code should be open for extension but closed for modification. Meaning, when you add a new behavior, ideally you shoudlnt keep modifying existing working code.

example:

```
interface Payment {
  pay(amount: number): void;
}

class RazorpayPayment implements Payment {
  pay(amount: number) {}
}

class StripePayment implements Payment {
  pay(amount: number) {}
}
```

Later you can add below without changing the existing payment classes:

```
class PaypalPayment implements Payment {
  pay(amount: number) {}
}
```

**Add new behaviour without breaking existing code**

### L - Liskov substitution principle

A child class should be usable wherever its parent class is expected without breaking the application.

example:

```
class Bird{
    fly(){}
}
```

And

```
class Penguine extends Bird{
    fly(){
        throw new Error("Penguins can't fly");
    }
}
```

This is a bad design. Because, the inheritance relationship itself is wrong. Because the code expects `Bird` to have `fly()` to work.

**Remember: Child should properly behave like its parent.**

### I - Interface segrigation principle

Dont force a class to implement methods it doesnt need

Bad:

```
interface Developer {
    code():void;
    eat():void;
    sleep():void;
}
```

Imagine a class that only need `code()`

Instead, split interfaces:

```
interface Coder {
    code(): void;
}

interface Eater {
    eat(): void;
}
```

**Remember:Small, focused interfaces are better than huge interfaces** 

### D - Dependency Inversion Principle

High level code should depend of abstractions, not directly on low-level implementations.

Instead of: 

```
class UserService {
  private database = new MongoDatabase();
}
```

You can depend on an interface:

```
interface Database {
  save(data: any): void;
}

class UserService {
  constructor(private database: Database) {}
}
```

Now you can provide MongoDb, PostgreSQL, a mock database etc.

**Remember: Depend on interfaces/abstractions, not concrete implementations.**

## DRY - Do not repeat yourself

Do not repeat the logic in multiple places.

Bad:

`if (password.length < 8) {}`

In 5 different places

Create one reusable functions:

```
function isValidPassword(password: string) {
  return password.length >= 8;
}
```
**Remember: Write common logic once and reuse it.**

## KISS (Keep it simple)

Dont make code more complicated than necessary.

if this works:

```
if (user.isActive) {
  return "Active";
}
```

Dont create 5 classes and 10 abstractions just to do the same thing

**Simple code is easier to understand and maintain.**

## YAGNI (You Are Not Gonna Need It)

Don't build something until you actually need it.

For example:

You only need email login

Dont build:

- Google login
- Facebook login
- Apple login

**Don't build future features prematurely**

## Separation of concerns

Different responsibilities should be separated

Each layer is a different responsibility.

```
Controller
   ↓
Service
   ↓
Database
```

For example:

**Controller** → handles HTTP request/response
**Service** → business logic
**Database** → database operations

# Design Patterns

A design pattern is a proven resuable way of solving a common software design problem.

There are 3 categories of design patterns:

## 1. **Creational** How objects can be created

### Singleton

Only one global instance allowed

```
class Singleton {
    private static instance: Singleton;
    private constructor() {} // Block direct instantiation
    public static getInstance() {
        if (!this.instance) this.instance = new Singleton();
        return this.instance;
    }
}
```

### Factory method

Subclasses or logic decide which object to instantiate

```
class Dog{
    speak(){
        return "Woof";
    }
}

class Cat{
    speak(){
        return "Meaow";
    }
}

class AnimalFactory{
    static createAnimal(type: "dog" | "cat"){
        return type === "dog" ? new Dog() : new Cat();
    }
}
```

## 2. **Structural** How objects/classes are connected

### Adapter

Translates an incompatible system interface into one you expect.

Adapter = Translator between two interfaces

```
class OldSystem { legacyRequest() { return "Legacy Data"; } }

class Adapter {
    constructor(private oldSystem: OldSystem) {}
    request() { return this.oldSystem.legacyRequest(); } // Translates method name
}
```

### Decorator

Add's behaviour without modifying the original object/class

```
interface Coffee { cost(): number; }
class PlainCoffee implements Coffee { cost() { return 5; } }

class MilkDecorator implements Coffee {
    constructor(private coffee: Coffee) {}
    cost() { return this.coffee.cost() + 2; } // Adds cost of milk dynamically
}
```

### Repository

Separate database operations from business logic

Instead of 

```
class UserService {
  async getUser(id: string) {
    return UserModel.findById(id);
  }
}
```

You can have

```
class UserRepository {
  async findById(id: string) {
    return UserModel.findById(id);
  }
}

class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: string) {
    return this.userRepository.findById(id);
  }
}
```

## 3. **Behavioral** How objects communicate

### Strategy

Define multiple ways of doing something and choose one at runtime.

Imagine different discount strategies:

```
interface DiscountStrategy {
  calculate(price: number): number;
}

class NoDiscount implements DiscountStrategy {
  calculate(price: number) {
    return price;
  }
}

class FestivalDiscount implements DiscountStrategy {
  calculate(price: number) {
    return price * 0.8;
  }
}

class Order {
  constructor(private strategy: DiscountStrategy) {}

  getPrice(price: number) {
    return this.strategy.calculate(price);
  }
}
```

Now:

```
const order = new Order(new FestivalDiscount());

order.getPrice(1000); // 800
```

### Observer

When one object changes, notify other interested objects.

```
User
 ↓
Order Created
 ↓
 ├── Send Email
 ├── Send Notification
 ├── Update Analytics
 └── Update Inventory
```

Nodejs example:

```
eventEmitter.on("orderCreated", () => {
  console.log("Send email");
});

eventEmitter.on("orderCreated", () => {
  console.log("Update inventory");
});

eventEmitter.emit("orderCreated");
```

### Dependency Injection

Instead of a class creating its dependencies, the dependencies are provided to it.

Without DI

```
class UserService {
  private repository = new UserRepository();
}
```

With DI

```
class UserService {
  constructor(
    private repository: UserRepository
  ) {}
}
```


# Software Development Life Cycle (SDLC)

The Software Development Life Cycle (SDLC) is a structured framework used by development teams to plan, design, build, test, and deploy high-quality software efficiently.

```
Requirement
    ↓
Planning
    ↓
Design
    ↓
Development
    ↓
Testing
    ↓
Deployment
    ↓
Maintenance
```

## SDLC models

### Waterfall

- This is a sequential approach
- We do everything by phase wise
- Customer gives all requirements → team designs everything → developers build everything → testers test everything → release.

### Agile

- It is a iterative and incremental appraoch
- Instead of building the entire product at once, you build it in small pieces, get feedback, and continuously improve it

### Scrum

- Scrum is one Agile framework
- Scrum has product backlog (list of things that need to be built)
- Sprints - Usually a 1-2 week development cycle
- Sprint plannings
- Daily standup
- Sprint review
- Retrospective