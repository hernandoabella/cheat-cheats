# Python Cheatsheet 🐍

## Introduction

### What is Python?

Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python's design philosophy emphasizes code readability, making it an excellent choice for both beginners and experienced developers.

    # This is a simple Python program
    print("Hello, Python!")

### Python Syntax

Python uses a clean and easy-to-read syntax with minimal punctuation. It relies on indentation (whitespace) to define code blocks, making it highly readable. Python uses colons (:) to indicate the start of an indented block.

    # Conditional statement with proper indentation
    if True:
        print("This code block is indented correctly")
    else:
        print("This block is indented correctly too")

### Variables and Data Types

Python supports various data types, including integers, floats, strings, lists, tuples, sets, dictionaries, and more. Variables are used to store data, and Python is dynamically typed, meaning you don't need to declare the data type explicitly.

    # Variables and data types
    name = "John"
    age = 30
    height = 5.11
    is_student = True
    fruits = ["apple", "banana", "cherry"]
    person_info = {"name": "Alice", "age": 25}

### Commenting in Python

Comments are used in Python to provide explanations and make code more understandable. Python supports both single-line (`#`) and multi-line (`'''` or `"""`) comments.

    # This is a single-line comment
    name = "Bob"  # You can add comments after code as well
    
    '''
    This is a multi-line comment.
    It can span multiple lines and is enclosed by triple single quotes.
    '''
    
    """
    This is another multi-line comment style with triple double quotes.
    Use it for longer explanations or docstrings.
    """
    
## Control Flow

Control flow in Python refers to the order in which statements are executed in a program. It allows you to make decisions, repeat actions, and handle exceptions based on conditions.

### Conditional Statements (if, elif, else)

Conditional statements are used to execute different code blocks based on certain conditions. Python supports `if`, `elif` (short for "else if"), and `else` statements for decision-making.

    # Conditional statement example
    age = 18
    
    if age < 18:
        print("You are under 18 years old.")
    elif age == 18:
        print("You just turned 18!")
    else:
        print("You are over 18 years old.")

### Loops (for, while)

Loops allow you to repeat a block of code multiple times. Python has `for` and `while` loops for iteration.

**for loop:**

    # For loop example
    fruits = ["apple", "banana", "cherry"]
    
    for fruit in fruits:
        print(f"I like {fruit}s")
    
    # Output:
    # I like apples
    # I like bananas
    # I like cherries

 

**while loop:**

    `# While loop example
    count = 0
    
    while count < 5:
        print(f"Count is {count}")
        count += 1
    
    # Output:
    # Count is 0
    # Count is 1
    # Count is 2
    # Count is 3
    # Count is 4` 

### Break and Continue Statements

-   `break`: Terminates the loop prematurely when a certain condition is met.
-   `continue`: Skips the current iteration and continues with the next one.

**break:**

    # Break statement example
    fruits = ["apple", "banana", "cherry"]
    
    for fruit in fruits:
        if fruit == "banana":
            break
        print(f"I like {fruit}s")
    
    # Output:
    # I like apples

 

**continue:**

    # Continue statement example
    numbers = [1, 2, 3, 4, 5]
    
    for number in numbers:
        if number % 2 == 0:
            continue
        print(f"{number} is an odd number")
    
    # Output:
    # 1 is an odd number
    # 3 is an odd number
    # 5 is an odd number

### Exception Handling (try, except)

Exception handling allows you to gracefully handle errors or exceptions that may occur during program execution. You can use `try` and `except` blocks to catch and handle exceptions.

    # Exception handling example
    try:
        result = 10 / 0  # Division by zero raises an exception
    except ZeroDivisionError as e:
        print(f"Error: {e}")
    else:
        print(f"Result: {result}")
    finally:
        print("Execution completed")
    
    # Output:
    # Error: division by zero
    # Execution completed


## Data Structures

Data structures are used to store and organize data efficiently. Python provides several built-in data structures, including lists, tuples, sets, and dictionaries, each with its own characteristics and use cases.

### Lists

A list is a mutable (changeable) data structure that can hold an ordered collection of items. Lists are defined by square brackets (`[]`) and can contain elements of different data types.

    # List example
    fruits = ["apple", "banana", "cherry"]
    print(fruits[0])  # Accessing the first element
    
    fruits.append("orange")  # Adding an element
    fruits.remove("banana")  # Removing an element
    
    for fruit in fruits:
        print(f"I like {fruit}s")
    
    # Output:
    # apple
    # I like apples
    # I like cherry
    # I like orange 

### Tuples

A tuple is an immutable (unchangeable) data structure defined by parentheses (`()`). Tuples are similar to lists but cannot be modified once created.

    # Tuple example
    coordinates = (3, 4)
    x, y = coordinates  # Unpacking a tuple
    
    print(f"X-coordinate: {x}, Y-coordinate: {y}")
    
    # Output:
    # X-coordinate: 3, Y-coordinate: 4

 

### Sets

A set is an unordered collection of unique elements defined by curly braces (`{}`). Sets are used for tasks like removing duplicates from a list and performing set operations like union and intersection.

    # Set example
    fruits = {"apple", "banana", "cherry", "apple"}  # Duplicate "apple" is automatically removed
    
    fruits.add("orange")  # Adding an element
    fruits.remove("banana")  # Removing an element
    
    for fruit in fruits:
        print(f"I like {fruit}s")
    
    # Output:
    # I like oranges
    # I like apples
    # I like cherries 

### Dictionaries

A dictionary is a collection of key-value pairs enclosed in curly braces (`{}`). Each key is unique and associated with a value. Dictionaries are used for mapping and storing data in an efficient way.

    # Dictionary example
    person = {
        "name": "Alice",
        "age": 25,
        "city": "New York"
    }
    
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
    
    # Output:
    # Name: Alice, Age: 25, City: New York

## Functions

A function is a block of reusable code that performs a specific task. Functions help in modularizing code, making it more organized and easier to maintain. In Python, you can define functions using the `def` keyword.

### Defining Functions

To define a function, you specify its name, parameters (if any), and a block of code to be executed when the function is called. Functions can return values using the `return` statement.

    `# Function definition
    def greet(name):
        return f"Hello, {name}!"
    
    # Function call
    message = greet("Alice")
    print(message)
    
    # Output:
    # Hello, Alice!` 

### Function Parameters and Arguments

Parameters are placeholders for data that a function can receive. Arguments are the actual values passed to a function when it's called. Python supports positional arguments, keyword arguments, and default values for parameters.

    # Function with parameters and default value
    def greet(name, greeting="Hello"):
        return f"{greeting}, {name}!"
    
    # Function calls
    message1 = greet("Alice")
    message2 = greet("Bob", "Hi")
    
    print(message1)
    print(message2)
    
    # Output:
    # Hello, Alice!
    # Hi, Bob!

### Lambda Functions

Lambda functions, also known as anonymous functions, are small, one-line functions defined using the `lambda` keyword. They are often used for simple operations or as arguments to higher-order functions.

    # Lambda function example
    add = lambda x, y: x + y
    result = add(5, 3)
    
    print(result)  # Output: 8 

### Recursion

Recursion is a programming technique where a function calls itself to solve a problem. In Python, a recursive function consists of a base case (to stop the recursion) and a recursive case (to call itself with modified arguments).

    `# Recursive function to calculate factorial
    def factorial(n):
        if n == 0:
            return 1  # Base case
        else:
            return n * factorial(n - 1)  # Recursive case
    
    result = factorial(5)
    print(result)  # Output: 120`

## Object-Oriented Programming (OOP)

OOP is a programming paradigm that organizes code into objects, which are instances of classes. It focuses on modeling real-world entities and their interactions.

### Classes and Objects

A class is a blueprint for creating objects. An object is an instance of a class. Classes define attributes (data) and methods (functions) that objects of that class can have.

    # Class definition
    class Person:
        def __init__(self, name, age):
            self.name = name
            self.age = age
    
        def greet(self):
            return f"Hello, my name is {self.name} and I am {self.age} years old."
    
    # Object creation
    person1 = Person("Alice", 25)
    person2 = Person("Bob", 30)
    
    # Using object methods
    message1 = person1.greet()
    message2 = person2.greet()
    
    print(message1)
    print(message2)
    
    # Output:
    # Hello, my name is Alice and I am 25 years old.
    # Hello, my name is Bob and I am 30 years old.

 

### Inheritance

Inheritance is a mechanism where a new class (subclass or derived class) can inherit properties and behaviors (attributes and methods) from an existing class (base class or superclass). It promotes code reuse and the creation of hierarchical relationships.

    # Base class (superclass)
    class Animal:
        def speak(self):
            pass
    
    # Subclasses (derived classes)
    class Dog(Animal):
        def speak(self):
            return "Woof!"
    
    class Cat(Animal):
        def speak(self):
            return "Meow!"
    
    dog = Dog()
    cat = Cat()
    
    print(dog.speak())  # Output: Woof!
    print(cat.speak())  # Output: Meow!

### Encapsulation

Encapsulation is the concept of bundling data (attributes) and methods (functions) that operate on that data within a single unit, called a class. It hides the internal implementation details from the outside world and provides controlled access through methods.

    # Encapsulation example
    class BankAccount:
        def __init__(self, balance=0):
            self._balance = balance  # Private attribute with a single underscore
    
        def deposit(self, amount):
            self._balance += amount
    
        def withdraw(self, amount):
            if self._balance >= amount:
                self._balance -= amount
            else:
                return "Insufficient balance"
    
        def get_balance(self):
            return self._balance
    
    account = BankAccount(1000)
    account.deposit(500)
    account.withdraw(300)
    balance = account.get_balance()
    
    print(balance)  # Output: 1200
    
### Polymorphism

Polymorphism allows objects of different classes to be treated as objects of a common base class. It enables flexibility and dynamic behavior, often achieved through method overriding and interfaces.

    # Polymorphism example (method overriding)
    class Shape:
        def area(self):
            pass
    
    class Rectangle(Shape):
        def __init__(self, length, width):
            self.length = length
            self.width = width
    
        def area(self):
            return self.length * self.width
    
    class Circle(Shape):
        def __init__(self, radius):
            self.radius = radius
    
        def area(self):
            return 3.14 * self.radius * self.radius
    
    shapes = [Rectangle(5, 4), Circle(3)]
    
    for shape in shapes:
        print(f"Area: {shape.area()}")
    
    # Output:
    # Area: 20
    # Area: 28.26


## File Handling

File handling in Python involves working with files, including opening, reading, writing, and closing them. Python provides built-in functions and methods to work with files.

### Reading and Writing Files

-   Reading files: You can use the `open()` function to open a file and then read its content using methods like `read()`, `readline()`, or by iterating through lines with a `for` loop.
-   Writing files: You can use the `open()` function with the mode `'w'` to create or open a file for writing. You can write data to the file using methods like `write()`.

**Reading a File:**

    # Reading a file
    file_path = "sample.txt"
    
    try:
        with open(file_path, "r") as file:
            content = file.read()
            print(content)
    except FileNotFoundError:
        print(f"File '{file_path}' not found") 

**Writing to a File:**

    # Writing to a file
    file_path = "output.txt"
    
    try:
        with open(file_path, "w") as file:
            file.write("Hello, Python!\n")
            file.write("This is a new line.")
    except Exception as e:
        print(f"An error occurred: {e}") 

### Working with CSV and JSON

-   CSV (Comma-Separated Values) files are used to store tabular data. Python's `csv` module provides functions for reading and writing CSV files.
-   JSON (JavaScript Object Notation) is a lightweight data interchange format. Python's `json` module allows you to work with JSON data.

**CSV:**

    import csv
    
    # Reading a CSV file
    csv_file = "data.csv"
    
    with open(csv_file, "r") as file:
        csv_reader = csv.reader(file)
        for row in csv_reader:
            print(row)
    
    # Writing to a CSV file
    data = [["Name", "Age"], ["Alice", 25], ["Bob", 30]]
    
    with open(csv_file, "w", newline="") as file:
        csv_writer = csv.writer(file)
        csv_writer.writerows(data) 

**JSON:**

    import json
    
    # Reading a JSON file
    json_file = "data.json"
    
    with open(json_file, "r") as file:
        data = json.load(file)
        print(data)
    
    # Writing to a JSON file
    data = {"name": "Alice", "age": 25}
    
    with open(json_file, "w") as file:
        json.dump(data, file) 

## Modules and Packages

Modules are Python files that contain reusable code, such as functions, classes, and variables. Packages are directories that contain multiple Python modules, making it easier to organize and distribute code.

### Importing Modules

You can import modules using the `import` statement. This allows you to use functions, classes, and variables defined in the module in your code.

**Importing a Module:**

    # Importing a module
    import math
    
    result = math.sqrt(16)
    print(result)  # Output: 4.0

**Importing Specific Functions:**

    # Importing specific functions from a module
    from math import sqrt, pow
    
    result = sqrt(16)
    print(result)  # Output: 4.0
    
    result = pow(2, 3)
    print(result)  # Output: 8.0 

### Creating and Using Packages

Packages are created by organizing related modules in directories. To use modules from a package, you can use the `import` statement with dot notation.

**Creating a Package:**

    my_package/
        __init__.py
        module1.py
        module2.py

**Using Modules from a Package:**

    # Importing modules from a package
    import my_package.module1
    from my_package import module2
    
    result1 = my_package.module1.function1()
    result2 = module2.function2()
    
    print(result1)
    print(result2) 

### Standard Library Overview

Python's standard library is a collection of modules and packages that come with Python. It provides a wide range of functionality for tasks like file handling, regular expressions, networking, and more.

**Using a Standard Library Module - datetime:**

    # Using the datetime module from the standard library
    import datetime
    
    current_time = datetime.datetime.now()
    print(current_time)  # Output: Current date and time
    
    date = datetime.date(2023, 9, 14)
    print(date)  # Output: 2023-09-14

## Regular Expressions (Regex)

Regular expressions are powerful tools for pattern matching and searching within text. They allow you to define patterns and search for matches within strings.

### Pattern Matching

-   Patterns in regular expressions are sequences of characters that define a search pattern.
-   Special characters (metacharacters) are used to represent classes of characters (e.g., digits, letters) and repetition (e.g., *, +, ?).
-   Regex patterns are often enclosed in forward slashes (e.g., `/pattern/`).

**Pattern Matching:**

    import re
    
    # Pattern to match a valid email address
    pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
    
    text = "Contact us at info@example.com or support@example.co.uk for assistance."
    
    matches = re.findall(pattern, text)
    
    for match in matches:
        print(match)
    
    # Output:
    # info@example.com
    # support@example.co.uk

 

### Regex Functions (re module)

Python's `re` module provides functions for working with regular expressions, including `match()`, `search()`, `findall()`, and `sub()`. These functions allow you to search, match, and manipulate text using regex patterns.

**Using `findall()`:**

    `import re
    
    # Pattern to match dates in DD/MM/YYYY format
    pattern = r'\d{2}/\d{2}/\d{4}'
    
    text = "Birthdates: 15/05/1990 and 03/12/2001"
    
    matches = re.findall(pattern, text)
    
    for match in matches:
        print(match)
    
    # Output:
    # 15/05/1990
    # 03/12/2001` 

**Using `sub()`:**

    import re
    
    # Replace phone numbers with "XXX-XXX-XXXX"
    pattern = r'\d{3}-\d{3}-\d{4}'
    
    text = "Contact me at 555-123-4567 or 123-456-7890."
    
    modified_text = re.sub(pattern, "XXX-XXX-XXXX", text)
    
    print(modified_text)
    
    # Output:
    # Contact me at XXX-XXX-XXXX or XXX-XXX-XXXX.

### List Comprehensions

List comprehensions are a concise way to create lists in Python. They allow you to generate lists by applying an expression to each item in an iterable (e.g., a list, tuple, or range) and optionally filtering the items based on a condition.

### Creating Lists Concisely

-   A list comprehension consists of an expression followed by a `for` clause and, optionally, one or more `if` clauses.
-   The expression is applied to each item in the iterable specified in the `for` clause.
-   You can add `if` clauses to filter items based on conditions.
-   The result is a new list containing the values generated by the expression.

**Basic List Comprehension:**

    # Basic list comprehension to generate squares of numbers
    numbers = [1, 2, 3, 4, 5]
    squares = [x ** 2 for x in numbers]
    
    print(squares)  # Output: [1, 4, 9, 16, 25]

**List Comprehension with Condition:**

    # List comprehension with a condition to filter even numbers
    numbers = [1, 2, 3, 4, 5, 6]
    even_numbers = [x for x in numbers if x % 2 == 0]
    
    print(even_numbers)  # Output: [2, 4, 6] 

**Nested List Comprehension:**

    # Nested list comprehension to flatten a 2D matrix
    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    flattened = [x for row in matrix for x in row]
    
    print(flattened)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] 

**List Comprehension with Expressions:**

    # List comprehension with expressions to create a list of words in uppercase
    words = ["apple", "banana", "cherry"]
    uppercase_words = [word.upper() for word in words]
    
    print(uppercase_words)  # Output: ['APPLE', 'BANANA', 'CHERRY'] 

## Generators and Iterators

Generators and iterators are used to work with sequences of data efficiently without loading the entire sequence into memory. They are especially useful when dealing with large or infinite sequences.

### Generator Functions and Expressions

-   Generator functions are defined like regular functions but use the `yield` keyword to yield values one at a time.
-   Generator expressions are similar to list comprehensions but use parentheses `()` instead of square brackets `[]`. They create generator objects on-the-fly.

**Generator Function:**

    # Generator function to generate squares of numbers
    def square_numbers(n):
        for i in range(1, n + 1):
            yield i ** 2
    
    # Creating a generator object
    generator = square_numbers(5)
    
    # Iterating over the generator
    for num in generator:
        print(num)
    
    # Output: 1 4 9 16 25 

**Generator Expression:**

    # Generator expression to generate even numbers
    even_numbers = (x for x in range(1, 11) if x % 2 == 0)
    
    # Iterating over the generator expression
    for num in even_numbers:
        print(num)
    
    # Output: 2 4 6 8 10 

### Iterating Over Data

-   Iterators are objects that implement the `__iter__()` and `__next__()` methods, allowing you to loop through data one element at a time.
-   Python provides built-in iterators for sequences like lists, tuples, and strings.

**Using an Iterator:**

    # Using an iterator to loop through a list
    fruits = ["apple", "banana", "cherry"]
    iterator = iter(fruits)
    
    while True:
        try:
            fruit = next(iterator)
            print(fruit)
        except StopIteration:
            break
    
    # Output: apple banana cherry 

**Built-in Iterators:**

    # Using a for loop with a built-in iterator
    fruits = ["apple", "banana", "cherry"]
    
    for fruit in fruits:
        print(fruit)
    
    # Output: apple banana cherry

## Decorators

Decorators are a powerful and flexible way to modify or enhance the behavior of functions or classes in Python. They are often used for tasks like logging, authentication, and code instrumentation.

### Function Decorators

-   Function decorators are functions that take another function as an argument and return a new function that usually extends or modifies the behavior of the original function.
-   Decorators are often used with the `@` symbol followed by the decorator function name above the function to be decorated.

**Function Decorator:**

    # Function decorator to measure the execution time of a function
    import time
    
    def measure_time(func):
        def wrapper(*args, **kwargs):
            start_time = time.time()
            result = func(*args, **kwargs)
            end_time = time.time()
            print(f"{func.__name__} took {end_time - start_time} seconds to execute.")
            return result
        return wrapper
    
    # Applying the decorator
    @measure_time
    def slow_function():
        time.sleep(2)
    
    slow_function()
    
    # Output: slow_function took 2.002147674560547 seconds to execute.

### Class Decorators

Class decorators are similar to function decorators but are applied to classes. They can modify the class or its behavior.

**Class Decorator:**

    # Class decorator to add a prefix to all methods of a class
    def add_prefix(prefix):
        def decorator(cls):
            class NewClass(cls):
                def __getattribute__(self, name):
                    attr = super().__getattribute__(name)
                    if callable(attr):
                        return lambda *args, **kwargs: attr(*args, **kwargs) + prefix
                    else:
                        return attr
            return NewClass
        return decorator
    
    # Applying the decorator
    @add_prefix("Hello, ")
    class Greeting:
        def say_hello(self):
            return "world"
    
    g = Greeting()
    result = g.say_hello()
    
    print(result)  # Output: Hello, world 

### Working with Dates and Times

Working with dates and times is a common task in programming, and Python provides the `datetime` module to handle various date and time operations.

### datetime Module

-   The `datetime` module in Python provides classes for working with dates and times.
-   The `datetime` class is commonly used and includes attributes like year, month, day, hour, minute, second, and microsecond.

**Using the `datetime` Class:**

    import datetime
    
    # Creating a datetime object for the current date and time
    current_datetime = datetime.datetime.now()
    
    print(current_datetime)
    
    # Output: Current date and time

### Formatting Dates and Times

-   You can format dates and times as strings using the `strftime()` method of `datetime` objects.
-   The `strftime()` method takes a format string that specifies how the date and time should be formatted.

**Formatting Dates and Times:**

    import datetime
    
    # Creating a datetime object
    date = datetime.datetime(2023, 9, 14, 15, 30)
    
    # Formatting the datetime object as a string
    formatted_date = date.strftime("%Y-%m-%d %H:%M:%S")
    
    print(formatted_date)
    
    # Output: 2023-09-14 15:30:00

## Concurrency and Parallelism

-   Concurrency is the ability to execute multiple tasks in an interleaved manner, which can improve a program's efficiency when it becomes blocked during I/O operations.
-   Parallelism involves running multiple tasks simultaneously on multiple cores or processors, which speeds up tasks that can be executed in parallel.

### Threading

-   Threads are lightweight subprocesses that share the same memory space as the main process and can execute concurrently.
-   In Python, the `threading` module provides a way to create and work with threads.

**Example (Creating a Thread):**

    `import threading
    import time
    
    # Function to print numbers
    def print_numbers():
        for i in range(1, 6):
            print(f"Number {i}")
            time.sleep(1)
    
    # Function to print letters
    def print_letters():
        for letter in "abcde":
            print(f"Letter {letter}")
            time.sleep(1)
    
    # Create two threads
    t1 = threading.Thread(target=print_numbers)
    t2 = threading.Thread(target=print_letters)
    
    # Start the threads
    t1.start()
    t2.start()
    
    # Wait for both threads to finish
    t1.join()
    t2.join()
    
    # Output: Numbers and letters are printed in an interleaved order` 

### Multiprocessing

-   Multiprocessing is the simultaneous execution of multiple independent processes that can take advantage of multiple CPU cores.
-   In Python, the `multiprocessing` module allows you to create processes and perform tasks in parallel.

**Creating a Process:**

    import multiprocessing
    import time
    
    # Function to print numbers
    def print_numbers():
        for i in range(1, 6):
            print(f"Number {i}")
            time.sleep(1)
    
    # Function to print letters
    def print_letters():
        for letter in "abcde":
            print(f"Letter {letter}")
            time.sleep(1)
    
    if __name__ == "__main__":
        # Create two processes
        p1 = multiprocessing.Process(target=print_numbers)
        p2 = multiprocessing.Process(target=print_letters)
    
        # Start the processes
        p1.start()
        p2.start()
    
        # Wait for both processes to finish
        p1.join()
        p2.join()
    
    # Output: Numbers and letters are printed in parallel


## Database Access (SQL and NoSQL)

-   SQL (Structured Query Language) is used to manage relational databases.
-   NoSQL refers to a variety of database systems that do not follow a relational data model.

### Connecting to Databases

-   To connect to an SQL database, a specific library for the database is typically used, such as `sqlite3` for SQLite or `mysql.connector` for MySQL.
-   For NoSQL databases, a specific library like `pymongo` for MongoDB is used.

**Connecting to an SQLite Database:**

    import sqlite3
    
    # Connect to an SQLite database (or create a new one)
    conn = sqlite3.connect("mydatabase.db")
    
    # Create a cursor object to execute queries
    cursor = conn.cursor()
    
    # Close the connection when you're done
    conn.close()

### Performing Queries

-   To execute SQL queries, the cursor object created during the connection is used.
-   SQL queries can be executed using the `execute()` method of the cursor, and results can be retrieved using methods like `fetchone()` or `fetchall()`.

**Executing an SQL Query:**

    import sqlite3
    
    # Connect to an SQLite database
    conn = sqlite3.connect("mydatabase.db")
    cursor = conn.cursor()
    
    # Execute a SELECT query
    cursor.execute("SELECT * FROM users")
    
    # Get all the results
    results = cursor.fetchall()
    
    # Iterate through the results
    for row in results:
        print(row)
    
    # Close the connection when you're done
    conn.close()

**Using MongoDB with pymongo:**

    import pymongo
    
    # Connect to a MongoDB database
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    db = client["mydatabase"]
    
    # Get a collection (equivalent to a table in SQL)
    collection = db["customers"]
    
    # Insert a document
    customer = {"name": "John", "email": "john@example.com"}
    inserted_id = collection.insert_one(customer).inserted_id
    
    # Find documents
    result = collection.find_one({"name": "John"})
    print(result)
    
    # Close the connection when you're done
    client.close() 


## Working with APIs

Working with APIs (Application Programming Interfaces) allows you to interact with external services or systems programmatically.

### Making HTTP Requests

-   To interact with web APIs, you can use the `requests` library in Python to make HTTP requests, such as GET, POST, PUT, and DELETE.
-   You can include headers, parameters, and data in your requests as needed.

**Making a GET Request:**

    import requests
    
    # Making a GET request to a sample API
    response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    
    # Checking the response status code
    if response.status_code == 200:
        print("Request successful")
        data = response.json()
        print(data)
    else:
        print("Request failed with status code:", response.status_code)

### Parsing JSON Responses

-   When working with web APIs, it's common to receive responses in JSON (JavaScript Object Notation) format.
-   You can use Python's `json` module to parse JSON responses into Python data structures.

**Parsing JSON Response:**

    import requests
    import json
    
    # Making a GET request to a JSON API
    response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    
    if response.status_code == 200:
        data = response.json()
    
        # Accessing JSON data
        title = data["title"]
        body = data["body"]
    
        print("Title:", title)
        print("Body:", body)
    else:
        print("Request failed with status code:", response.status_code) 

## Virtual Environments

Virtual environments allow you to create isolated Python environments where you can install packages and dependencies separately from your system-wide Python installation.

### Creating and Managing Virtual Environments

-   Python provides the `venv` module to create and manage virtual environments.
-   You can create a new virtual environment using the `venv` module and activate it to work within that environment.

**Creating a Virtual Environment:**

    # Create a new virtual environment
    python -m venv myenv
    
    # Activate the virtual environment (Windows)
    myenv\Scripts\activate
    
    # Activate the virtual environment (Linux/macOS)
    source myenv/bin/activate

### Dependencies and Requirements Files

-   Dependencies are Python packages or libraries required for your project to run.
-   You can list project dependencies in a `requirements.txt` file.
-   Use `pip` to install dependencies from the `requirements.txt` file.

**Creating a `requirements.txt` File:**

    # requirements.txt
    requests==2.26.0
    flask==2.1.1

**Installing Dependencies from `requirements.txt`:**

    # Install dependencies from the requirements file
    pip install -r requirements.txt 

### Debugging and Profiling

-   Debugging is the process of identifying and fixing errors (bugs) in your code.
-   Profiling involves analyzing the performance of your code to identify bottlenecks and optimize it.

### Debugging Techniques

-   Python provides several debugging tools, including the built-in `pdb` module for debugging and third-party tools like `pdb++` and integrated development environments (IDEs) with debugging features.

**Using `pdb` for Debugging:**

    import pdb
    
    def divide(a, b):
        result = a / b
        return result
    
    pdb.set_trace()  # Start debugging session
    num1 = 10
    num2 = 0
    result = divide(num1, num2)
    print("Result:", result)

### Profiling Python Code

-   Profiling tools help you measure the execution time of different parts of your code.
-   Python's `cProfile` module is a built-in profiler that provides information about function call times and counts.

**Profiling with `cProfile`:**

    import cProfile
    
    def slow_function():
        total = 0
        for i in range(1, 100000):
            total += i
        return total
    
    if __name__ == "__main__":
        cProfile.run("slow_function()")

### Best Practices

-   Adhering to best practices helps you write clean, readable, and maintainable Python code.
-   Following established conventions and guidelines enhances collaboration with other developers.

### PEP 8 (Python Enhancement Proposals)

-   PEP 8 is the official style guide for Python code.
-   It defines conventions for code layout, naming conventions, and more.
-   Adhering to PEP 8 improves code consistency and readability.

### Code Style and Conventions

-   Consistent indentation (typically 4 spaces or a tab) should be used throughout your code.
-   Follow naming conventions for variables, functions, and classes. For example, use `snake_case` for variables and functions and `CamelCase` for classes.
-   Keep lines of code reasonably short (around 79-80 characters) to improve readability.
-   Use meaningful variable and function names to make your code self-explanatory.
-   Avoid overly complex code and nesting.
-   Use comments and docstrings to provide explanations and documentation for your code.

### Documentation and Comments

-   Documentation is essential for understanding how code works and how to use it.
-   Comments and docstrings provide explanations and context.
-   Docstrings are used to document modules, classes, and functions.

**Docstring:**

    def add(a, b):
        """
        Adds two numbers.
    
        Args:
            a (int): The first number.
            b (int): The second number.
    
        Returns:
            int: The sum of the two numbers.
        """
        return a + b 

**Inline Comment:**

    # Calculate the average of a list of numbers
    average = sum(numbers) / len(numbers)

## Closures

-   A closure in Python refers to a function object that has access to variables in its enclosing (containing) lexical scope, even when the function is called outside that scope.
-   In other words, a closure "closes over" or "captures" the variables it needs from its surrounding environment.

```
def outer_function(x):
    # This is the outer enclosing function
    def inner_function(y):
        # This is the nested (inner) function
        return x + y  # The inner function has access to 'x' from the outer function

    return inner_function  # Return the inner function as a closure

# Create closures by calling the outer function with different arguments
closure1 = outer_function(10)
closure2 = outer_function(20)

# Use the closures to add numbers
result1 = closure1(5)  # Adds 10 (from outer_function) + 5
result2 = closure2(7)  # Adds 20 (from outer_function) + 7

print(result1)  # Output: 15
print(result2)  # Output: 27
```

## Metaclasses

-   In Python, everything is an object, including classes. A metaclass is a class for classes. It defines the behavior and structure of classes.
-   When you create a class, it is an instance of a metaclass. By default, in Python, the metaclass for all classes is the built-in `type` metaclass.
-   You can create custom metaclasses to customize class creation and behavior.

```
# Define a custom metaclass
class MyMeta(type):
    def __init__(cls, name, bases, attrs):
        # Add a custom attribute to the class
        attrs["custom_attribute"] = 42
        super().__init__(name, bases, attrs)

# Create a class using the custom metaclass
class MyClass(metaclass=MyMeta):
    def __init__(self, value):
        self.value = value

# Instantiate the class
obj = MyClass(10)

# Access the custom attribute added by the metaclass
print(obj.custom_attribute)  # Output: 42
```

## Context Managers

-   Context managers are objects that help manage resources, such as file handling or database connections, in a clean and predictable way.
-   They provide a way to set up and tear down resources automatically within a block of code.
-   In Python, context managers are commonly used with the `with` statement.

**Using `with` Statement with Files:**

    # Using a context manager to open and automatically close a file
    with open("example.txt", "w") as file:
        file.write("Hello, World!")
    
    # The file is automatically closed when exiting the 'with' block 

**Custom Context Manager:**

    class MyContext:
        def __enter__(self):
            print("Entering the context")
            return self  # Return the context manager object
    
        def __exit__(self, exc_type, exc_value, traceback):
            print("Exiting the context")
    
    # Using the custom context manager
    with MyContext() as context:
        print("Inside the context")
    
    # Output:
    # Entering the context
    # Inside the context
    # Exiting the context
