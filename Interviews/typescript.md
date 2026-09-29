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

### What is protected ?

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

## Extends vs Implements

## Type vs enum vs interface vs static