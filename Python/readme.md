# What is python ?

1. Python is a high-level, interpreted, general-purpose programming language that emphasizes readability and simplicity
2. **High-level** → You don’t deal with low-level hardware details (like memory allocation).
3. **Interpreted** → Code is executed line by line by the Python interpreter (no separate compilation step like C++)
4. **General-purpose** → Can be used for almost anything (web apps, AI, games, automation, etc.)
5. **Dynamic Typing** → You don’t have to declare variable types explicitly
6. **Object-Oriented + Functional** → Supports both OOP and functional programming
7. **multi-paradigm language** → you can choose different styles of writing code

# Why python ?

1. works on different platforms
2. simple syntax similar to the English language. So, easy to learn & read
3. Great for Rapid Development as it requires Fewer lines of code compared to Java, C++, etc
4. rich Libraries & Frameworks for web development, data science, automation, gui etc
5. Huge Community & Ecosystem as it is used by millions of developers
6. Future-Proof as Python dominates AI, ML, and Data Science
7. High Demand & Career Opportunities

# What python can do ?

1. Used to build server-side applications and back-end systems
2. Used in data science & machine learning with lots of available libraries like NumPy, Pandas, Matplotlib etc
3. Used for automation & scripting to automate repetitive tasks like file handling, sending mails etc.
4. Used in creating desktop applications using tkinter, pyqt etc
5. Used in Web Scraping & Data Gathering using beautifulsoup, scrapy, selenium

# What is python interpreter ?

1. It is the program that reads your python code and executes line by line
2. Unlike compiled languages like c or c++, you dont need to build an executable file first
3. Interpreted language means the code is executed line by line at runtime
4. if there is an error, it stops right at the line

# How is python special ?

1. Some languages are strictly OOP (Java → everything must be inside a class).

2. Some are strictly functional (Haskell → everything is a function).

3. Python lets you mix both styles:
   - Write class-based code when needed (OOP).
   - Or just use functions and higher-order logic (Functional).

# How Python code is converted into computer understandable language (machine code)?

When you run a Python program (python myfile.py):

1. **Source Code (.py)**\
   You write Python code in plain text
   ```
   print("Hello, World!")
   ```
2. **Bytecode Compilation**

   - Python internally compiles your code into bytecode (.pyc files inside **pycache**).

   - Bytecode = a lower-level, platform-independent set of instructions (not machine code yet).

   - Example (conceptually, not real)

     ```
     LOAD_CONST "Hello, World!"
     PRINT_ITEM

     ```

3. **Python Virtual Machine (PVM)**

   - The PVM (part of the interpreter) reads this bytecode and executes it line by line.

   - The PVM translates bytecode into machine instructions for your CPU at runtime.

⚡ Note: Python doesn’t directly compile to machine code like C/C++. That’s why it’s slower.

# What exactly is “Runtime”?

**Runtime** = The period when your program is actually running (executing), after you’ve written and started it.

Things that happen at runtime in Python:

- Memory allocation (objects created in RAM).

- Type checking (Python decides types dynamically).

- Errors thrown (like division by zero).

example:

```
x = 10
x = "hello"
```

- Python doesn’t complain until runtime.

- At runtime, it realizes x is now a string.

- In C++/Java, the compiler would have caught type issues earlier.

# Why Python is slower than compiled languages?

**Python (Interpreted)**

- Code → Bytecode(Python interpreter does this conversion) → PVM executes line by line
- Every operation involves extra steps:

  - Type checking at runtime.

  - Function calls are more expensive.

  - Dynamic typing (Python checks “what type is this?” each time).

example:

```
x = 5
y = 10
print(x + y)
```

Python runtime checks:

- Is x an int?

- Is y an int?

- What does + mean for these objects?

Then executes addition.

example 2:\
When you type: `python myscript.py`\
**Behind the scenes:**

1. The Python interpreter compiles the code → bytecode.

2. The Python runtime environment starts up:

   - It creates the memory space (stack, heap, etc.)

   - Initializes built-in modules, imports, etc.

   - Starts the PVM to run your bytecode instructions line by line.

3. The PVM executes those instructions — this is the actual “running” part

**Compiled Languages (C/C++/Java)**

- Entire program compiled into machine code beforehand.

- The CPU executes instructions directly → no runtime interpretation.

- Types are fixed at compile-time → no extra runtime checks.

# Variables

1. It has not specific data type to mention when creating a varibale
   `x = 10`

2. But if you want to specify the data type of variable, it can be done by **casting** like below

   ```
   x = str(3)    # x will be '3'
   y = int(3)    # y will be 3
   z = float(3)  # z will be 3.0
   ```

3. String variables can be declared either by using single or double quotes
4. Variable names are case-sensitive
5. A variable name must start with a letter or the underscore character
6. A variable name can only contain (A-z, 0-9, and \_ )
7. Python allows you to assign values to multiple variables in one line
   ```
   x, y, z = "Orange", "Banana", "Cherry"
   ```
8. you can assign the same value to multiple variables in one line

   ```
   x = y = z = "Orange"
   ```
