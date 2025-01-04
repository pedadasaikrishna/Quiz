import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
const quizData = [
  {
    language: "Python",
    questions: [
      {
        question: "What is the output of the following code: print(2 + 3 * 4)?",
        options: ["20", "14", "12", "24"],
        correctAnswer: "14",
      },
      {
        question: "What is the keyword used to define a function in Python?",
        options: ["def", "function", "fun", "method"],
        correctAnswer: "def",
      },
      {
        question: "Which of the following is not a valid Python data type?",
        options: ["int", "float", "boolean", "integer"],
        correctAnswer: "integer",
      },
      {
        question:
          "What is the output of the following code: print(len('Python'))?",
        options: ["6", "7", "5", "8"],
        correctAnswer: "6",
      },
      {
        question:
          "Which of the following methods is used to add an element at the end of a list in Python?",
        options: ["append()", "insert()", "add()", "extend()"],
        correctAnswer: "append()",
      },
      {
        question:
          "Which function is used to get the type of an object in Python?",
        options: ["type()", "object()", "gettype()", "isinstance()"],
        correctAnswer: "type()",
      },
      {
        question: "How do you create a set in Python?",
        options: ["set()", "{}", "[]", "()"],
        correctAnswer: "set()",
      },
      {
        question: "Which operator is used to compare two values in Python?",
        options: ["==", "=", "!==", "<>"],
        correctAnswer: "==",
      },
      {
        question: "What is the result of the following expression: 10 % 3?",
        options: ["3", "1", "2", "0"],
        correctAnswer: "1",
      },
      {
        question:
          "Which of the following is used to handle exceptions in Python?",
        options: ["try/except", "catch", "throw", "finally"],
        correctAnswer: "try/except",
      },
      {
        question:
          "What is the output of the following code: print('Hello' + ' ' + 'World')?",
        options: ["HelloWorld", "Hello World", "Hello World!", "Error"],
        correctAnswer: "Hello World",
      },
      {
        question: "Which of the following is a mutable data type in Python?",
        options: ["list", "tuple", "string", "frozenset"],
        correctAnswer: "list",
      },
      {
        question: "What does the Python 'break' statement do?",
        options: [
          "Exits the loop",
          "Continues to the next iteration",
          "Exits the function",
          "Skips to the next loop",
        ],
        correctAnswer: "Exits the loop",
      },
      {
        question:
          "Which of the following is not a valid way to define a dictionary in Python?",
        options: [
          "{key: value}",
          "[key: value]",
          "{key = value}",
          "dict(key = value)",
        ],
        correctAnswer: "[key: value]",
      },
      {
        question:
          "What is the output of the following code: print(3 == 3 and 2 == 2)?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: "True",
      },
      {
        question: "What is the output of the following code: print(range(5))?",
        options: ["range(0, 5)", "[0, 1, 2, 3, 4]", "Error", "None"],
        correctAnswer: "range(0, 5)",
      },
      {
        question: "Which of the following is used to open a file in Python?",
        options: ["open()", "file()", "read()", "write()"],
        correctAnswer: "open()",
      },
      {
        question: "How do you comment multiple lines in Python?",
        options: [
          "# line1 # line2",
          "''' line1 line2 '''",
          "// line1 line2",
          "/* line1 line2 */",
        ],
        correctAnswer: "''' line1 line2 '''",
      },
      {
        question:
          "What will be the output of the following code: print(5 // 2)?",
        options: ["2.5", "3", "2", "None"],
        correctAnswer: "2",
      },
      {
        question:
          "Which method is used to remove an element from a list in Python?",
        options: ["remove()", "pop()", "del", "all of the above"],
        correctAnswer: "all of the above",
      },
      {
        question:
          "Which Python library is used for data manipulation and analysis?",
        options: ["matplotlib", "pandas", "numpy", "scipy"],
        correctAnswer: "pandas",
      },
      {
        question: "What is the correct syntax to define a class in Python?",
        options: [
          "class MyClass:",
          "class MyClass{}",
          "class MyClass[]",
          "class MyClass():",
        ],
        correctAnswer: "class MyClass:",
      },
      {
        question:
          "Which of the following is used to return the length of a list in Python?",
        options: ["size()", "length()", "len()", "count()"],
        correctAnswer: "len()",
      },
      {
        question:
          "Which of the following functions is used to sort a list in Python?",
        options: ["sort()", "order()", "arrange()", "sorted()"],
        correctAnswer: "sort()",
      },
      {
        question: "What is the output of the following code: print(2 ** 3)?",
        options: ["5", "6", "8", "9"],
        correctAnswer: "8",
      },
      {
        question:
          "What is the correct way to define a lambda function in Python?",
        options: [
          "lambda x: x * 2",
          "def lambda(x): x * 2",
          "lambda x, y: x + y",
          "function lambda(x): x * 2",
        ],
        correctAnswer: "lambda x: x * 2",
      },
      {
        question:
          "Which of the following methods can be used to iterate over a dictionary in Python?",
        options: ["items()", "keys()", "values()", "all of the above"],
        correctAnswer: "all of the above",
      },
      {
        question:
          "What is the result of the following code: print(2 == 2 and 3 != 3)?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: "False",
      },
      {
        question:
          "Which of the following is used to handle multiple exceptions in Python?",
        options: [
          "try/except/else",
          "try/except/finally",
          "try/except",
          "try/catch",
        ],
        correctAnswer: "try/except/else",
      },
      {
        question:
          "What will be the output of the following code: print('Python'[::-1])?",
        options: ["Python", "nohtyP", "n", "P"],
        correctAnswer: "nohtyP",
      },
    ],
  },
  {
    language: "Java",
    questions: [
      {
        question: "What is the size of an int in Java?",
        options: ["4 bytes", "8 bytes", "2 bytes", "Depends on the system"],
        correctAnswer: "4 bytes",
      },
      {
        question: "Which of the following is not a Java feature?",
        options: [
          "Object-oriented",
          "Portable",
          "Dynamic",
          "Pointer manipulation",
        ],
        correctAnswer: "Pointer manipulation",
      },
      {
        question: "What is the default value of a boolean in Java?",
        options: ["true", "false", "null", "0"],
        correctAnswer: "false",
      },
      {
        question: "Which package is imported by default in every Java program?",
        options: ["java.util", "java.lang", "java.io", "java.net"],
        correctAnswer: "java.lang",
      },
      {
        question: "Which keyword is used to create a subclass?",
        options: ["extends", "implements", "inherits", "final"],
        correctAnswer: "extends",
      },
      {
        question:
          "Which of the following is not a valid access modifier in Java?",
        options: ["private", "public", "protected", "internal"],
        correctAnswer: "internal",
      },
      {
        question: 'What is the output of: System.out.println(10 + "20");?',
        options: ["30", "1020", "Error", "null"],
        correctAnswer: "1020",
      },
      {
        question: "Which method is used to start a thread in Java?",
        options: ["start()", "run()", "execute()", "launch()"],
        correctAnswer: "start()",
      },
      {
        question: "What does the 'static' keyword mean in Java?",
        options: [
          "It indicates a method or variable is instance-specific",
          "It makes a method or variable shared among all instances",
          "It marks a method as final",
          "None of the above",
        ],
        correctAnswer:
          "It makes a method or variable shared among all instances",
      },
      {
        question: "Which exception is thrown when dividing by zero in Java?",
        options: [
          "IOException",
          "ArithmeticException",
          "ClassNotFoundException",
          "NullPointerException",
        ],
        correctAnswer: "ArithmeticException",
      },
      {
        question: "What is the purpose of the 'super' keyword in Java?",
        options: [
          "To call a method in the same class",
          "To access members of the superclass",
          "To define a static variable",
          "To define a final method",
        ],
        correctAnswer: "To access members of the superclass",
      },
      {
        question: "Which of the following is not a wrapper class in Java?",
        options: ["Integer", "Float", "String", "Boolean"],
        correctAnswer: "String",
      },
      {
        question: "What is the output of: System.out.println(5 >> 1);?",
        options: ["10", "2", "5", "Error"],
        correctAnswer: "2",
      },
      {
        question: "Which collection class allows null keys in Java?",
        options: ["TreeMap", "HashMap", "Hashtable", "None of the above"],
        correctAnswer: "HashMap",
      },
      {
        question:
          'What is the output of: System.out.println("Java".substring(1, 3));?',
        options: ["Ja", "av", "va", "Jav"],
        correctAnswer: "av",
      },
      {
        question:
          "Which of the following statements is true about garbage collection in Java?",
        options: [
          "It can be forced by calling System.gc()",
          "It automatically destroys unused objects",
          "It runs at a fixed interval",
          "None of the above",
        ],
        correctAnswer: "It automatically destroys unused objects",
      },
      {
        question: "Which of the following is not a thread state in Java?",
        options: ["RUNNING", "BLOCKED", "WAITING", "LOADED"],
        correctAnswer: "LOADED",
      },
      {
        question: "What is the difference between HashSet and TreeSet?",
        options: [
          "HashSet allows duplicates; TreeSet does not",
          "TreeSet maintains order; HashSet does not",
          "HashSet is thread-safe; TreeSet is not",
          "There is no difference",
        ],
        correctAnswer: "TreeSet maintains order; HashSet does not",
      },
      {
        question: "Which design pattern is used in Java Singleton class?",
        options: ["Factory", "Prototype", "Singleton", "Observer"],
        correctAnswer: "Singleton",
      },
      {
        question:
          "Which interface is used to sort a collection in natural order?",
        options: ["Comparator", "Iterable", "Comparable", "Serializable"],
        correctAnswer: "Comparable",
      },
      {
        question: "Which stream is used to read primitive data in Java?",
        options: [
          "DataInputStream",
          "BufferedReader",
          "ObjectInputStream",
          "InputStream",
        ],
        correctAnswer: "DataInputStream",
      },
      {
        question: "What is the default capacity of an ArrayList in Java?",
        options: ["10", "16", "0", "20"],
        correctAnswer: "10",
      },
      {
        question:
          "Which of the following statements about Java 8 features is true?",
        options: [
          "Lambda expressions are introduced",
          "Interfaces cannot have static methods",
          "Streams are not part of Java 8",
          "Optional is not supported",
        ],
        correctAnswer: "Lambda expressions are introduced",
      },
      {
        question: "What is a functional interface in Java?",
        options: [
          "An interface with no methods",
          "An interface with exactly one abstract method",
          "An interface that extends another interface",
          "None of the above",
        ],
        correctAnswer: "An interface with exactly one abstract method",
      },
      {
        question: "Which annotation is used to override a method in Java?",
        options: [
          "@Deprecated",
          "@Override",
          "@SuppressWarnings",
          "@FunctionalInterface",
        ],
        correctAnswer: "@Override",
      },
      {
        question: "Which statement is true about Java Streams?",
        options: [
          "Streams modify the original data",
          "Streams are used for processing collections",
          "Streams are thread-safe by default",
          "None of the above",
        ],
        correctAnswer: "Streams are used for processing collections",
      },
      {
        question: "What does the 'transient' keyword do in Java?",
        options: [
          "Marks a method as static",
          "Marks a variable to be serialized",
          "Marks a variable to not be serialized",
          "Marks a class as final",
        ],
        correctAnswer: "Marks a variable to not be serialized",
      },
      {
        question: "What is the difference between final and finally in Java?",
        options: [
          "final is a keyword, finally is a block",
          "Both are used for exception handling",
          "Both are used for variable declaration",
          "There is no difference",
        ],
        correctAnswer: "final is a keyword, finally is a block",
      },
      {
        question: "What is the difference between HashMap and Hashtable?",
        options: [
          "HashMap is thread-safe; Hashtable is not",
          "Hashtable is synchronized; HashMap is not",
          "Hashtable allows null values; HashMap does not",
          "There is no difference",
        ],
        correctAnswer: "Hashtable is synchronized; HashMap is not",
      },
      {
        question: "What does the 'volatile' keyword indicate in Java?",
        options: [
          "A variable is read-only",
          "A variable can be accessed by multiple threads",
          "A method is thread-safe",
          "A class is immutable",
        ],
        correctAnswer: "A variable can be accessed by multiple threads",
      },
    ],
  },
  {
    language: "CPP",
    questions: [
      {
        question: "What is the size of an int in C++?",
        options: ["4 bytes", "8 bytes", "2 bytes", "Depends on the system"],
        correctAnswer: "Depends on the system",
      },
      {
        question: "Which of the following is not a valid C++ keyword?",
        options: ["public", "virtual", "null", "private"],
        correctAnswer: "null",
      },
      {
        question: "What is the correct way to declare a pointer in C++?",
        options: ["int* p;", "int p*;", "*int p;", "int p;"],
        correctAnswer: "int* p;",
      },
      {
        question: "Which of the following is a feature of C++?",
        options: [
          "Platform-independent",
          "Supports pointers",
          "Garbage collection",
          "No operator overloading",
        ],
        correctAnswer: "Supports pointers",
      },
      {
        question: "Which of the following correctly declares a class in C++?",
        options: [
          "class MyClass {}",
          "MyClass class {}",
          "class MyClass() {}",
          "class MyClass {};",
        ],
        correctAnswer: "class MyClass {};",
      },
      {
        question: "What is the output of: cout << 5 / 2;?",
        options: ["2", "2.5", "5", "Error"],
        correctAnswer: "2",
      },
      {
        question: "Which of the following is not a type of inheritance in C++?",
        options: ["Single", "Multiple", "Polymorphic", "Multilevel"],
        correctAnswer: "Polymorphic",
      },
      {
        question: "What is the use of the 'new' keyword in C++?",
        options: [
          "To define a function",
          "To allocate memory dynamically",
          "To create a class",
          "To initialize a variable",
        ],
        correctAnswer: "To allocate memory dynamically",
      },
      {
        question: "What does 'delete' do in C++?",
        options: [
          "Deletes a variable",
          "Deallocates memory allocated by new",
          "Clears a file",
          "None of the above",
        ],
        correctAnswer: "Deallocates memory allocated by new",
      },
      {
        question: "Which operator cannot be overloaded in C++?",
        options: ["+", "[]", "::", "=="],
        correctAnswer: "::",
      },
      {
        question: "What is a virtual function in C++?",
        options: [
          "A function with no implementation",
          "A function that can be overridden in a derived class",
          "A function that cannot be overridden",
          "None of the above",
        ],
        correctAnswer: "A function that can be overridden in a derived class",
      },
      {
        question: "What is the output of: cout << sizeof('A');?",
        options: ["1", "2", "4", "8"],
        correctAnswer: "1",
      },
      {
        question: "Which type of polymorphism is supported by C++?",
        options: [
          "Compile-time polymorphism",
          "Run-time polymorphism",
          "Both",
          "None",
        ],
        correctAnswer: "Both",
      },
      {
        question: "What is the base class of all C++ stream classes?",
        options: ["ifstream", "ofstream", "istream", "ios"],
        correctAnswer: "ios",
      },
      {
        question: "Which of the following is not a type of constructor in C++?",
        options: [
          "Default constructor",
          "Parameterized constructor",
          "Copy constructor",
          "Destructor",
        ],
        correctAnswer: "Destructor",
      },
      {
        question: "What is the difference between struct and class in C++?",
        options: [
          "Struct has private members by default; class has public members",
          "Struct has public members by default; class has private members",
          "Struct is not supported in C++",
          "There is no difference",
        ],
        correctAnswer:
          "Struct has public members by default; class has private members",
      },
      {
        question:
          "Which header file is used for input and output operations in C++?",
        options: ["<iostream>", "<iomanip>", "<fstream>", "<string>"],
        correctAnswer: "<iostream>",
      },
      {
        question: "Which of the following is used to define a template in C++?",
        options: ["template<typename T>", "template<class T>", "Both", "None"],
        correctAnswer: "Both",
      },
      {
        question: "What is the purpose of 'this' pointer in C++?",
        options: [
          "Points to the calling object",
          "Points to the parent class",
          "Points to the base class",
          "Points to the constructor",
        ],
        correctAnswer: "Points to the calling object",
      },
      {
        question: "Which of the following is not a valid STL container in C++?",
        options: ["vector", "map", "queue", "arraylist"],
        correctAnswer: "arraylist",
      },
      {
        question: "Which keyword is used to handle exceptions in C++?",
        options: ["try", "catch", "throw", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "Which of the following is an abstract class in C++?",
        options: [
          "A class with no members",
          "A class with at least one pure virtual function",
          "A class that cannot be inherited",
          "None of the above",
        ],
        correctAnswer: "A class with at least one pure virtual function",
      },
      {
        question: "What is the output of: cout << (3 > 2 ? 5 : 7);?",
        options: ["3", "2", "5", "7"],
        correctAnswer: "5",
      },
      {
        question: "Which of the following can be declared as const in C++?",
        options: ["Variables", "Pointers", "Functions", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What is the correct syntax for a friend function in C++?",
        options: [
          "friend void func();",
          "void friend func();",
          "void func() friend;",
          "None of the above",
        ],
        correctAnswer: "friend void func();",
      },
      {
        question:
          "Which of the following deletes the memory pointed by a pointer and sets it to NULL?",
        options: ["delete", "delete[]", "delete p; p = nullptr;", "free"],
        correctAnswer: "delete p; p = nullptr;",
      },
      {
        question: "Which keyword is used to prevent inheritance in C++?",
        options: ["final", "override", "private", "None of the above"],
        correctAnswer: "None of the above",
      },
      {
        question:
          "Which of the following is not a valid access specifier in C++?",
        options: ["public", "protected", "internal", "private"],
        correctAnswer: "internal",
      },
      {
        question: "What does the keyword 'mutable' mean in C++?",
        options: [
          "The variable cannot be modified",
          "The variable can be modified even in a const object",
          "The variable is static",
          "None of the above",
        ],
        correctAnswer: "The variable can be modified even in a const object",
      },
      {
        question: "Which operator is used to resolve scope in C++?",
        options: ["::", ".", "->", "None of the above"],
        correctAnswer: "::",
      },
    ],
  },
  {
    language: "C",
    questions: [
      {
        question: "Which data type is used to store a single character in C?",
        options: ["int", "char", "float", "double"],
        correctAnswer: "char",
      },
      {
        question: "What is the size of the int data type in C?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the system"],
        correctAnswer: "Depends on the system",
      },
      {
        question:
          "Which header file is required for input/output operations in C?",
        options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
        correctAnswer: "<stdio.h>",
      },
      {
        question: "What does the 'return 0;' statement signify in a C program?",
        options: [
          "Program has an error",
          "Successful termination of program",
          "End of function",
          "None of the above",
        ],
        correctAnswer: "Successful termination of program",
      },
      {
        question: 'What is the output of: printf("%d", 5 + 2 * 3);?',
        options: ["21", "11", "7", "17"],
        correctAnswer: "11",
      },
      {
        question: "Which of the following is not a valid variable name in C?",
        options: ["_var", "2var", "var_2", "varName"],
        correctAnswer: "2var",
      },
      {
        question:
          "Which of the following operators has the highest precedence in C?",
        options: ["+", "*", "=", "&&"],
        correctAnswer: "*",
      },
      {
        question: "What does the 'break' statement do in a loop?",
        options: [
          "Skips to the next iteration",
          "Terminates the loop",
          "Restarts the loop",
          "None of the above",
        ],
        correctAnswer: "Terminates the loop",
      },
      {
        question: "Which of the following is not a storage class in C?",
        options: ["auto", "static", "private", "extern"],
        correctAnswer: "private",
      },
      {
        question: "What will be the output of: printf(\"%c\", 'A' + 1);?",
        options: ["A", "B", "C", "Error"],
        correctAnswer: "B",
      },
      {
        question: "What is a pointer in C?",
        options: [
          "A variable that stores the address of another variable",
          "A variable that stores data",
          "A function",
          "None of the above",
        ],
        correctAnswer: "A variable that stores the address of another variable",
      },
      {
        question: "What is the purpose of the 'sizeof' operator in C?",
        options: [
          "Find the size of a file",
          "Find the size of a variable or data type",
          "Find the size of a function",
          "None of the above",
        ],
        correctAnswer: "Find the size of a variable or data type",
      },
      {
        question: "Which keyword is used to define a constant in C?",
        options: ["constant", "final", "const", "define"],
        correctAnswer: "const",
      },
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "None of the above"],
        correctAnswer: "do-while",
      },
      {
        question: 'What is the output of: printf("%d", 10 / 3);?',
        options: ["3", "3.33", "10", "Error"],
        correctAnswer: "3",
      },
      {
        question:
          "Which of the following is used to dynamically allocate memory in C?",
        options: ["malloc", "calloc", "realloc", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What is a dangling pointer in C?",
        options: [
          "A pointer that stores a valid address",
          "A pointer that points to a freed memory location",
          "A pointer that stores NULL",
          "None of the above",
        ],
        correctAnswer: "A pointer that points to a freed memory location",
      },
      {
        question:
          "Which of the following functions is used to compare two strings in C?",
        options: ["strcmp", "strcpy", "strlen", "strcat"],
        correctAnswer: "strcmp",
      },
      {
        question: "What is the purpose of the 'void' keyword in C?",
        options: [
          "To define a null variable",
          "To indicate that a function does not return a value",
          "To define a pointer",
          "None of the above",
        ],
        correctAnswer: "To indicate that a function does not return a value",
      },
      {
        question:
          "Which of the following is used to open a file in read mode in C?",
        options: [
          'fopen("file.txt", "r");',
          'fopen("file.txt", "w");',
          'fopen("file.txt", "rw");',
          'fopen("file.txt", "a");',
        ],
        correctAnswer: 'fopen("file.txt", "r");',
      },
      {
        question: "What does the function 'free()' do in C?",
        options: [
          "Allocates memory",
          "Reallocates memory",
          "Deallocates memory",
          "None of the above",
        ],
        correctAnswer: "Deallocates memory",
      },
      {
        question: 'What is the output of: printf("%p", NULL);?',
        options: ["0", "Address of NULL", "NULL", "None of the above"],
        correctAnswer: "0",
      },
      {
        question: "What is the difference between an array and a pointer in C?",
        options: [
          "Pointers are faster than arrays",
          "Arrays have fixed size, pointers do not",
          "Pointers cannot store addresses",
          "None of the above",
        ],
        correctAnswer: "Arrays have fixed size, pointers do not",
      },
      {
        question:
          "Which of the following is a valid preprocessor directive in C?",
        options: ["#include", "#define", "#ifdef", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        question: "What does 'static' keyword do for a variable in C?",
        options: [
          "Makes the variable accessible globally",
          "Preserves the variable's value between function calls",
          "Makes the variable dynamic",
          "None of the above",
        ],
        correctAnswer: "Preserves the variable's value between function calls",
      },
      {
        question: "What is the return type of the malloc function in C?",
        options: ["int", "float", "void*", "char*"],
        correctAnswer: "void*",
      },
      {
        question: "Which function is used to terminate a C program?",
        options: ["terminate()", "stop()", "exit()", "None of the above"],
        correctAnswer: "exit()",
      },
      {
        question:
          "Which of the following is a valid way to declare a 2D array in C?",
        options: [
          "int arr[3][3];",
          "int arr(3)(3);",
          "int arr[3,3];",
          "None of the above",
        ],
        correctAnswer: "int arr[3][3];",
      },
      {
        question: "What is the purpose of the 'volatile' keyword in C?",
        options: [
          "Optimizes a variable",
          "Prevents compiler optimization for a variable",
          "Declares a constant",
          "None of the above",
        ],
        correctAnswer: "Prevents compiler optimization for a variable",
      },
      {
        question: 'What is the output of: printf("%d", ~1);?',
        options: ["0", "-2", "1", "Error"],
        correctAnswer: "-2",
      },
    ],
  },
  {
    language: "JavaScript",
    questions: [
      // Basic Questions
      {
        question: "Which type of variable is declared using the 'var' keyword?",
        options: [
          "Block-scoped",
          "Function-scoped",
          "Globally-scoped",
          "None of the above",
        ],
        correctAnswer: "Function-scoped",
      },
      {
        question:
          "What is the correct syntax to print a message in the console?",
        options: [
          "print('Hello')",
          "echo('Hello')",
          "console.log('Hello')",
          "document.write('Hello')",
        ],
        correctAnswer: "console.log('Hello')",
      },
      {
        question: "Which keyword is used to define a constant variable?",
        options: ["const", "let", "var", "static"],
        correctAnswer: "const",
      },
      {
        question:
          "Which of the following is a valid way to declare an array in JavaScript?",
        options: [
          "let arr = {}",
          "let arr = []",
          "let arr = ()",
          "let arr = <>",
        ],
        correctAnswer: "let arr = []",
      },
      {
        question: "Which of the following is not a data type in JavaScript?",
        options: ["Number", "String", "Boolean", "Character"],
        correctAnswer: "Character",
      },
      {
        question: "Which of the following will evaluate to true in JavaScript?",
        options: [
          "'5' === 5",
          "'5' == 5",
          "null == undefined",
          "Both '5' == 5 and null == undefined",
        ],
        correctAnswer: "Both '5' == 5 and null == undefined",
      },
      {
        question:
          "Which function is used to convert a string to an integer in JavaScript?",
        options: ["parseInt()", "parseFloat()", "Number()", "toString()"],
        correctAnswer: "parseInt()",
      },
      {
        question: "What does the 'typeof' operator return for arrays?",
        options: ["'array'", "'object'", "'undefined'", "'string'"],
        correctAnswer: "'object'",
      },
      {
        question: "Which statement is used to stop a loop in JavaScript?",
        options: ["break", "continue", "return", "exit"],
        correctAnswer: "break",
      },
      {
        question:
          "Which of the following is used to handle asynchronous operations in JavaScript?",
        options: ["Promises", "setTimeout", "Callbacks", "All of the above"],
        correctAnswer: "All of the above",
      },

      // Advanced (Hard) Questions
      {
        question: "What is the purpose of closures in JavaScript?",
        options: [
          "To execute functions sequentially",
          "To create private variables",
          "To return an object",
          "None of the above",
        ],
        correctAnswer: "To create private variables",
      },
      {
        question:
          "What will the following code output? console.log(1 + '2' + 3);",
        options: ["6", "'123'", "'15'", "Error"],
        correctAnswer: "'123'",
      },
      {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
          "The current function's scope",
          "The global object in non-strict mode",
          "The object that is executing the current code",
          "Both B and C",
        ],
        correctAnswer: "Both B and C",
      },
      {
        question: "What is the output of: console.log([] + []);",
        options: ["0", "'undefined'", "'' (empty string)", "Error"],
        correctAnswer: "'' (empty string)",
      },
      {
        question:
          "What is the purpose of the 'use strict' directive in JavaScript?",
        options: [
          "It enables ES6 features",
          "It enforces stricter parsing and error handling",
          "It prevents the use of global variables",
          "Both B and C",
        ],
        correctAnswer: "Both B and C",
      },
      {
        question:
          "What will be the output of the following code?\n(function(){ console.log(typeof this); })();",
        options: ["'object'", "'function'", "'undefined'", "'global'"],
        correctAnswer: "'object'",
      },
      {
        question:
          "Which method can be used to deeply clone an object in JavaScript?",
        options: [
          "Object.assign()",
          "JSON.stringify() and JSON.parse()",
          "Spread operator (...)",
          "None of the above",
        ],
        correctAnswer: "JSON.stringify() and JSON.parse()",
      },
      {
        question:
          "What is the difference between '==' and '===' in JavaScript?",
        options: [
          "'==' checks value only, '===' checks value and type",
          "'===' checks only value",
          "'==' is a strict comparison",
          "No difference",
        ],
        correctAnswer: "'==' checks value only, '===' checks value and type",
      },
      {
        question:
          "What will be the output of the following code?\nconst a = {}; const b = {}; console.log(a == b);",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: "false",
      },
      {
        question: "How can you prevent an object from being modified?",
        options: [
          "Object.preventExtensions()",
          "Object.seal()",
          "Object.freeze()",
          "All of the above",
        ],
        correctAnswer: "Object.freeze()",
      },
      {
        question: "What is the output of: console.log(typeof NaN);",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correctAnswer: "'number'",
      },
      {
        question: "What is the purpose of the 'map()' function in JavaScript?",
        options: [
          "Iterate through an array and modify its elements",
          "Filter an array",
          "Sort an array",
          "All of the above",
        ],
        correctAnswer: "Iterate through an array and modify its elements",
      },
      {
        question:
          "What will be the output of the following code?\nlet x = [1, 2, 3]; console.log(...x);",
        options: ["'1 2 3'", "Error", "undefined", "1, 2, 3"],
        correctAnswer: "'1 2 3'",
      },
      {
        question:
          "What is an Immediately Invoked Function Expression (IIFE) in JavaScript?",
        options: [
          "A function that is defined but not executed",
          "A function that is executed immediately after it is defined",
          "A function that is used in asynchronous programming",
          "None of the above",
        ],
        correctAnswer:
          "A function that is executed immediately after it is defined",
      },
      {
        question: "What does the 'await' keyword do in JavaScript?",
        options: [
          "Pauses execution until a promise resolves",
          "Waits for a setTimeout to complete",
          "Returns the result of an asynchronous function",
          "None of the above",
        ],
        correctAnswer: "Pauses execution until a promise resolves",
      },
      {
        question:
          "What is the difference between 'call()' and 'apply()' methods in JavaScript?",
        options: [
          "'call()' accepts arguments as a list, 'apply()' accepts arguments as an array",
          "'apply()' works only on arrays",
          "No difference",
          "Both are used for declaring variables",
        ],
        correctAnswer:
          "'call()' accepts arguments as a list, 'apply()' accepts arguments as an array",
      },
      {
        question: "Which of the following methods returns a promise?",
        options: [
          "fetch()",
          "setTimeout()",
          "console.log()",
          "document.write()",
        ],
        correctAnswer: "fetch()",
      },
      {
        question:
          "What is the purpose of the 'reduce()' function in JavaScript?",
        options: [
          "To filter elements in an array",
          "To calculate a single value by applying a function to each element in the array",
          "To map array elements",
          "To sort array elements",
        ],
        correctAnswer:
          "To calculate a single value by applying a function to each element in the array",
      },
      {
        question: "What will be the output of: console.log(0.1 + 0.2 === 0.3);",
        options: ["true", "false", "undefined", "Error"],
        correctAnswer: "false",
      },
      {
        question:
          "What will the following code output?\nlet a = 1; let b = a++; console.log(b);",
        options: ["1", "2", "undefined", "Error"],
        correctAnswer: "1",
      },
    ],
  },
  {
    language: "HTML_CSS",
    questions: [
      // Basic Questions (HTML and CSS)
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "High-level Text Markup Language",
        ],
        correctAnswer: "Hyper Text Markup Language",
      },
      {
        question: "Which HTML element is used to display the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<title>"],
        correctAnswer: "<h1>",
      },
      {
        question:
          "What is the purpose of the `<alt>` attribute in an `<img>` tag?",
        options: [
          "To style the image",
          "To provide alternative text for the image",
          "To add a tooltip to the image",
          "To set the alignment of the image",
        ],
        correctAnswer: "To provide alternative text for the image",
      },
      {
        question:
          "Which CSS property is used to change the background color of an element?",
        options: ["color", "background-color", "background", "bg-color"],
        correctAnswer: "background-color",
      },
      {
        question: "What does the `<a>` tag in HTML do?",
        options: [
          "Creates a hyperlink",
          "Adds an anchor point",
          "Defines an audio element",
          "Adds a link to a stylesheet",
        ],
        correctAnswer: "Creates a hyperlink",
      },
      {
        question: "Which HTML tag is used to define a list item?",
        options: ["<list>", "<li>", "<item>", "<ul>"],
        correctAnswer: "<li>",
      },
      {
        question: "Which CSS property is used to control text alignment?",
        options: ["text-align", "align", "text-style", "font-align"],
        correctAnswer: "text-align",
      },
      {
        question: "What does the `<table>` tag in HTML represent?",
        options: [
          "A container for images",
          "A structured data table",
          "A multimedia element",
          "A container for unordered lists",
        ],
        correctAnswer: "A structured data table",
      },
      {
        question: "Which CSS property is used to make text bold?",
        options: ["font-style", "font-weight", "text-bold", "font-bold"],
        correctAnswer: "font-weight",
      },
      {
        question:
          "Which HTML attribute specifies an inline style for an element?",
        options: ["style", "class", "id", "css"],
        correctAnswer: "style",
      },

      // Advanced (Hard) Questions (HTML and CSS)
      {
        question:
          "What is the difference between `<div>` and `<span>` elements in HTML?",
        options: [
          "`<div>` is a block-level element, while `<span>` is an inline element",
          "`<span>` is a block-level element, while `<div>` is an inline element",
          "Both are block-level elements",
          "Both are inline elements",
        ],
        correctAnswer:
          "`<div>` is a block-level element, while `<span>` is an inline element",
      },
      {
        question: "What does the `z-index` property in CSS control?",
        options: [
          "The stacking order of elements",
          "The size of an element",
          "The color of an element",
          "The positioning of an element",
        ],
        correctAnswer: "The stacking order of elements",
      },
      {
        question:
          "What will be the output of the following CSS code?\n```css\np { margin: 10px 20px; }\n```",
        options: [
          "10px margin on all sides",
          "10px top and bottom margin, 20px left and right margin",
          "20px top and bottom margin, 10px left and right margin",
          "No margin",
        ],
        correctAnswer: "10px top and bottom margin, 20px left and right margin",
      },
      {
        question:
          "What is the difference between `relative` and `absolute` positioning in CSS?",
        options: [
          "`relative` positions an element relative to its normal position, while `absolute` positions it relative to its nearest positioned ancestor",
          "`absolute` positions an element relative to the viewport, while `relative` positions it inside a container",
          "`relative` and `absolute` are the same",
          "None of the above",
        ],
        correctAnswer:
          "`relative` positions an element relative to its normal position, while `absolute` positions it relative to its nearest positioned ancestor",
      },
      {
        question:
          "Which CSS pseudo-class selects the first child of an element?",
        options: [":first-child", ":nth-child(1)", ":only-child", ":first"],
        correctAnswer: ":first-child",
      },
      {
        question: "Which of the following is not a semantic HTML tag?",
        options: ["<article>", "<div>", "<section>", "<aside>"],
        correctAnswer: "<div>",
      },
      {
        question:
          "What is the difference between inline, block, and inline-block elements?",
        options: [
          "Inline-block allows block properties while remaining inline",
          "Block elements take up the full width, while inline elements do not",
          "All of the above",
          "None of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        question: "What does the `flex-grow` property in CSS control?",
        options: [
          "The width of a flex container",
          "The ability of a flex item to grow relative to the other flex items",
          "The alignment of items in a flex container",
          "The height of a flex container",
        ],
        correctAnswer:
          "The ability of a flex item to grow relative to the other flex items",
      },
      {
        question:
          "What is the default position value of an HTML element in CSS?",
        options: ["static", "relative", "absolute", "fixed"],
        correctAnswer: "static",
      },
      {
        question: "What does the `box-sizing` property in CSS do?",
        options: [
          "Controls whether padding and border are included in an element's total width and height",
          "Defines the border width of an element",
          "Sets the size of a box-shadow",
          "None of the above",
        ],
        correctAnswer:
          "Controls whether padding and border are included in an element's total width and height",
      },
      {
        question: "Which HTML5 element is used to define navigation links?",
        options: ["<nav>", "<section>", "<aside>", "<header>"],
        correctAnswer: "<nav>",
      },
      {
        question:
          "Which CSS property is used to make an element invisible but still take up space in the layout?",
        options: [
          "visibility: hidden",
          "display: none",
          "opacity: 0",
          "z-index: -1",
        ],
        correctAnswer: "visibility: hidden",
      },
      {
        question:
          "What is the difference between `id` and `class` attributes in HTML?",
        options: [
          "`id` is unique, while `class` can be reused",
          "`class` is unique, while `id` can be reused",
          "Both are reusable",
          "None of the above",
        ],
        correctAnswer: "`id` is unique, while `class` can be reused",
      },
      {
        question:
          "What will the following code do?\n```html\n<div class='box'></div>\n```\n```css\n.box:hover { background-color: red; }\n```",
        options: [
          "Change the background color of the div to red on hover",
          "Change the text color to red",
          "Do nothing",
          "Add a red border",
        ],
        correctAnswer: "Change the background color of the div to red on hover",
      },
      {
        question:
          "What is the purpose of the `grid-template-areas` property in CSS Grid?",
        options: [
          "To define named areas in a grid layout",
          "To set the size of grid items",
          "To align grid items",
          "None of the above",
        ],
        correctAnswer: "To define named areas in a grid layout",
      },
      {
        question: "What does the `<meta>` tag in HTML do?",
        options: [
          "Defines metadata for an HTML document",
          "Links external stylesheets",
          "Adds interactivity",
          "None of the above",
        ],
        correctAnswer: "Defines metadata for an HTML document",
      },
      {
        question: "What is the purpose of media queries in CSS?",
        options: [
          "To apply styles based on device width, height, and other factors",
          "To make CSS code reusable",
          "To add animations",
          "None of the above",
        ],
        correctAnswer:
          "To apply styles based on device width, height, and other factors",
      },
      {
        question: "What does the `clip-path` property in CSS do?",
        options: [
          "Defines a clipping region for an element",
          "Sets the border-radius of an element",
          "Clips the overflow of text",
          "None of the above",
        ],
        correctAnswer: "Defines a clipping region for an element",
      },
      {
        question: "What is the default display value of a `<span>` element?",
        options: ["inline", "block", "inline-block", "none"],
        correctAnswer: "inline",
      },
    ],
  },
];

const QuizPage = () => {
  const navigate = useNavigate();
  const [collegeId, setCollegeId] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30 * 60); // 30-minute countdown timer
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [skill, setSkill] = useState('');
  const [questionsAnswered, setQuestionsAnswered] = useState([]); 
  const [questions, setQuestions] = useState([]); // State to hold questions based on the skill

  useEffect(() => {
    const storedSkill = localStorage.getItem('skill');
    const storedCollegeId = localStorage.getItem('collegeId');
    console.log(storedSkill);

    if (storedCollegeId && storedSkill) {
      setCollegeId(storedCollegeId);
      setSkill(storedSkill);

      // Find the corresponding quiz data based on the skill
      const selectedQuiz = quizData.find((quiz) => quiz.language === storedSkill);
      if (selectedQuiz) {
        setQuestions(selectedQuiz.questions); // Set the questions for the selected skill
      } else {
        console.log('No questions found for this skill');
      }
    } else {
      navigate('/'); // Redirect if no skill or collegeId is found
    }
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setIsQuizCompleted(true);
          navigate('/results', {
            state: getQuizResults(), // Pass results to the results page
          });
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  const getQuizResults = () => {
    const updatedCorrect = questionsAnswered.filter(
      (answer, index) => answer.answer === questions[index]?.correctAnswer
    ).length;

    const updatedIncorrect = questionsAnswered.filter(
      (answer, index) =>
        answer.answer !== null && answer.answer !== questions[index]?.correctAnswer
    ).length;

    const score = updatedCorrect * 4; // +4 per correct answer
    const timeTaken = 30 * 60 - timer; // Time spent on the quiz

    return {
      score,
      total: questions.length,
      timeTaken,
      correctAnswers: updatedCorrect,
      incorrectAnswers: updatedIncorrect,
      attempted: questionsAnswered.filter((answer) => answer.answer !== null).length,
    };
  };

  const handleAnswer = (option) => {
    const updatedAnswers = [...questionsAnswered];
    updatedAnswers[currentQuestion] = { answer: option };
    setQuestionsAnswered(updatedAnswers);

    // Calculate correct answers and score after each selection
    const updatedCorrect = updatedAnswers.filter(
      (answer, index) => answer.answer === questions[index]?.correctAnswer
    ).length;

    const updatedIncorrect = updatedAnswers.filter(
      (answer, index) =>
        answer.answer !== null && answer.answer !== questions[index]?.correctAnswer
    ).length;

    // Update the score (4 points per correct answer)
    setScore(updatedCorrect * 4); // +4 for each correct answer
    console.log(score);
    
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizCompleted(true);
      navigate('/results', { state: getQuizResults() });
    }
  };

  return (
    <QuizWrapper>
      <NavWrapper>
        <CollegeId>
          <strong>ID:</strong> {collegeId}
        </CollegeId>
        <TestNameWrapper>
          <strong>Test:</strong> {skill || 'Loading...'} {/* Display test name (skill) */}
        </TestNameWrapper>
        <TimerWrapper>
          <FontAwesomeIcon icon={faClock} size="lg" />
          <Timer>{`${Math.floor(timer / 60)} Min ${timer % 60} Sec`}</Timer>
        </TimerWrapper>
      </NavWrapper>

      <QuestionCard>
        <QuestionNumber>{currentQuestion + 1}</QuestionNumber>
        
        {/* Add fallback if currentQuestion or questions[currentQuestion] is invalid */}
        <Question>{questions[currentQuestion]?.question || 'Loading question...'}</Question>
        
        <OptionsWrapper>
          {questions[currentQuestion]?.options?.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleAnswer(option)}
              selected={questionsAnswered[currentQuestion]?.answer === option}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsWrapper>

        <NavigationButtons>
          <PrevButton onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </PrevButton>
          <NextButton onClick={handleNextQuestion}>
            {currentQuestion + 1 === questions.length ? 'Finish Quiz' : 'Next'}
          </NextButton>
        </NavigationButtons>
      </QuestionCard>
    </QuizWrapper>
  );
};

const TestNameWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a90e2;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

// Styled Components
const QuestionNumber = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  background: linear-gradient(135deg, #ff7eb3, #ff758c);
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  background-color: #eef2f7;
  color: #2b2b2b;
  animation: fadeIn 0.5s ease-in;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  color: #4a4a4a;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const CollegeId = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a90e2;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #ff5722;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Timer = styled.div`
  margin-left: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QuestionCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

const Question = styled.h2`
  font-size: 2.2rem; /* Default font size for larger screens */
  font-weight: 600; /* Normal weight for large screens */
  margin-bottom: 2rem;
  color: #333; /* Dark color for high contrast */
  line-height: 1.8; /* Increase line height for readability */
  text-align: center; /* Center-align text */
  word-wrap: break-word;
  word-break: break-word;
  max-width: 90%; /* Keeps text contained */
  padding: 1.5rem; /* Adds space around the text */
  background-color: #f9f9f9; /* Light background for readability */
  border-radius: 8px; /* Rounded corners for a soft look */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 1.8rem; /* Slightly smaller font for medium screens */
    font-weight: 500; /* Lighten the weight for medium screens */
    margin-bottom: 1.8rem;
    padding: 1.2rem; /* Reduce padding for medium screens */
  }

  @media (max-width: 768px) {
    font-size: 1.6rem; /* Smaller font size for tablets */
    font-weight: 500; /* Light weight for better mobile readability */
    margin-bottom: 1.5rem;
    line-height: 1.7; /* Slightly tighter line height for smaller screens */
    padding: 1rem; /* Reduced padding for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; /* Even smaller font size for mobile screens */
    font-weight: 400; /* Light font weight for mobile */
    margin-bottom: 1.2rem;
    line-height: 1.6; /* Adjust line height for mobile screens */
    padding: 0.8rem; /* Reduce padding further on mobile */
  }
`;


const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  background-color: ${(props) => (props.selected ? '#e6f7e6' : '#f5f8fc')};
  color: #333;
  border: 2px solid ${(props) => (props.selected ? '#5cb85c' : '#d6d6d6')};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.selected ? '#d4f3d4' : '#eaf2fb')};
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrevButton = styled.button`
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #5a0dbc, #1e64f1);
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const NextButton = styled.button`
  background: linear-gradient(135deg, #f7971e, #f067b4);
  color: #ffffff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #f07500, #e15d99);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

export default QuizPage;