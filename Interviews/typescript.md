## How TypeScript is converted into JavaScript?

- TypeScript is a superset of JavaScript (extra features like types, interfaces, enums).

- The TypeScript Compiler (tsc) translates .ts → .js

## Abstract class/methods and private/protected

Lets take below example:

```
abstract class Animal {
  constructor(protected name: string) {}

  abstract makeSound(): void;

  introduce() {
    console.log(`My name is ${this.name}`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

const animals: Animal[] = [
  new Dog("Bruno"),
  new Cat("Milo")
];

for (const animal of animals) {
  animal.introduce();
  animal.makeSound();
}
```

### What is abstract class ?

- It means that this class is incomplete
- Dont create an object directly from it
- It is meant to be a base class

SO below is not allowed

`const animal = new Animal(); // ❌`

But below is allowed

```
class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }
}

const dog = new Dog(); // ✅
```

### Why abstract befoew makeSound() ?

`abstract makeSound(): void;`

It means, every child must provide its own implementation of `makeSound()`

Example:

```
class Dog extends Animal {
  makeSound() {
    console.log("Woof");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}
```

## protected vs private vs public

### protected

It means that this property can be access inside the class and inside the classes that inherit from it. But not from outside

```
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

```
class Animal {
  constructor(protected name: string) {}

  introduce() {
    console.log(this.name); // ✅
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name); // ✅
  }
}

const dog = new Dog("Bruno");

dog.name; // ❌
```

### public

Accessible anywhere. This is the default

### Private vs Protected

**Private** - only same class can access it

```
class Animal {
  private name = "Bruno";

  showName() {
    console.log(this.name); // ✅
  }
}

class Dog extends Animal {
  show() {
    console.log(this.name); // ❌
  }
}
```

**Protected** - the class + child classes can access it

```
class Animal {
  protected name = "Bruno";
}

class Dog extends Animal {
  show() {
    console.log(this.name); // ✅
  }
}
```

### public vs private vs protected

- **public**: accessible anywhere. This is the default.
- **private**: accessible only inside that class.
- **protected**: accessible inside that class and its subclasses, but not from outside.

```
class BankAccount {
  public owner: string;
  private balance = 0;
  protected accountType = "standard";

  constructor(owner: string) {
    this.owner = owner;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }
}

class SavingsAccount extends BankAccount {
  describe() {
    return this.accountType; // allowed
    // this.balance;         // error: private in BankAccount
  }
}

const account = new BankAccount("Mina");
account.owner;   // allowed
account.deposit(50); // allowed
// account.balance; // error
```

## readonly

The readonly keyword prevents a property from being changed after it is created.

```
class Config {
  readonly apiKey: string;
  readonly version = "1.0.0"; // Assigned at declaration

  constructor(key: string) {
    this.apiKey = key; // Assigned in constructor (Allowed!)
  }

  updateKey() {
    // ❌ TypeScript Error: Cannot assign to 'apiKey' because it is a read-only property.
    this.apiKey = "new-key"; 
  }
}
```

## static

The static keyword attaches a property or method directly to the class itself, rather than to instances (objects) created from the class.

```
class Calculator {
  // Shared by all, no need to instantiate the class
  static PI = 3.14159;

  static calculateArea(radius: number) {
    return this.PI * radius * radius;
  }
}

// You do NOT use 'new Calculator()'
console.log(Calculator.PI);                 // 3.14159
console.log(Calculator.calculateArea(5));    // 78.53975

```

## override

The override keyword makes it clear that a method in a child class is intentionally replacing a method with the exact same name in the parent class.

```
class Printer {
  print() {
    console.log("Printing document...");
  }
}

class PhotoPrinter extends Printer {
  // Explicitly states this replaces the parent's print()
  override print() {
    console.log("Printing high-quality photo...");
  }
}

This will raise an error when there is a typo like prnt, you dont see this error if override is not used
```

## Interface

- It define the shape of a value
- Which properties and methods it must have
- It does not create an object or exist at runtime
- Can use these interfaces for object shapes, function and class contracts
- Interface can be extended by other interfaces

```
interface User{
  name: string;
  id: numer;
  greet(): string;
}
```

## Extends

- extends expresses an "is based on" relationship

```
// Grandparent
interface User {
  id: string;
}

// Parent (extends Grandparent)
interface PremiumUser extends User {
  subscriptionType: string;
}

// Child (extends Parent)
interface AdminUser extends PremiumUser {
  adminRole: string;
}

// Result: AdminUser automatically gets properties from ALL levels
const superAdmin: AdminUser = {
  id: "USR-99",             // Inherited from User
  subscriptionType: "VIP",  // Inherited from PremiumUser
  adminRole: "SuperAdmin"   // Defined in AdminUser
};

```

And same goes with interfaces

## Implements

This is used by a class to enforce a structural contract defined by one or more interfaces

```
interface Greeter {
  greeting: string;
  sayHello(): void;
}

// The class must fulfill the Greeter contract
class EnglishGreeter implements Greeter {
  greeting = "Hello";

  sayHello(): void {
    console.log(this.greeting);
  }
}

```

Multiple implements:

```
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

// Implementing multiple contracts at once
class AllInOneMachine implements Printer, Scanner {
  print() {
    console.log("Printing document...");
  }
  scan() {
    console.log("Scanning document...");
  }
}

```

## Type

- A type alias gives a name to a type
- It can describe a value, function, object, union, tuple and more
- It is removed when ts compiles to JS

```
<!-- value -->
type UserId = string | number;

<!-- Object -->
type User = {
  id: UserId;
  name: string;
};

<!-- function -->
type Greet = (user: User) => string;

const greet: Greet = user => `Hello, ${user.name}`;

<!-- union | (or) -->
type Status = "pending" | "done";

<!-- intersection & (and) -->
type Timestamped = { createdAt: Date };
type SavedUser = User & Timestamped;
```

## Enum

An enum defines a named set of values. Unlike type and interface, a regular enum usually emits JavaScript at runtime.

```
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const direction: Direction = Direction.Up;
```

```
enum Status {
  Pending = "pending",
  Done = "done",
}
```