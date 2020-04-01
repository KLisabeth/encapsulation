<h1 id='top' align="center">Module: Encapsulation</h1>

<div align="center">
  <a href="https://hackyourfuture.be" target="_blank">
    <img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="250" height="250"/>
  </a>
</div>

> "Encapsulation is one of the fundamentals of OOP (object-oriented programming). It refers to the bundling of data with the methods that operate on that data. "
> * [Rebus](https://press.rebus.community/programmingfundamentals/chapter/encapsulation/)

### Overview

* [Module Summary](#module-summary)
* [Learning Objectives](#learning-objectives)
* [Example Projects](./example-projects)
* [In-Class Exercises](./javascripting/REVIEW.md)
* [Week 1](./week-1)
  * [Prep Work](./week-1#prep-work)
  * [Lesson Plan](https://hackyourfuture.be/encapsulation/week-1)
  * [Assignments](./week-1#assignments)
* Week 2
* Week 3
* [Class Recordings](./class-recordings.md)
* [Study Links](https://study.hackyourfuture.be) (external)
* [Homework Submission](https://github.com/hackyourfuturebelgium/homework-submission) (external)

---

## Module Summary

__Encapsulation__ is the idea of grouping together your data with the functions that use it. That's it! (for now :)  There are many ways to achieve this, but the end result is code that is easier to understand and nicer work with.

Heads up!  In this module you'll be encountering some of the most important (and most challenging!) aspects of the JavaScript language `this`, inheritance & classes.  These are all features of JS that allow you to encapsulate functions & data for readable, reusable code.

Along the way you will get your first introduction to one of the main programming paradigms in JS: _object oriented_.  At their simplest level, programming paradigms are just different answers to the same question "How will I group my data and my functions?".

[TOP](#overview)

---

## Learning Objectives

### Programming Skills

* Object Oriented Programming
  * Refactor projects from last module into OOP projects
* Data-first development
  * Understanding applications as Data + User Interactions
  * Developing from the "inside" out: Writing the core object before the user interface
  * Explain what a schema is and why it's useful (PS. it's like tests, but for data!)
  * Use the JSON schema specification to document your program's data
  * Use a schema validation library to grantee the integrity of your project's data
* Debugging:
  * Bugs are when you don't understand what your code is doing, not when your code doesn't understand what you want it to do!  The computer is always right :)
  * Stepping through your programs with the Browser and Node.js debuggers
  * Using the `debugger`, `console.assert`, `assert` (in Node) and breakpoints for native debugging
  * Refactoring & testing segments of code you don't understand / are not working
* Understand Behavior vs. Implementation
  * _Behavior_: The test cases that a function does and doesn't pass. What the function _does_.
  * _Implementation_: The actual lines of code written.  How memory is manipulated so that the behavior _happens_.
* Testing
  * Learn to _predict_ what _will happen_ instead of _describing_ what _did happen_
  * Testing each step of your project before moving on
  * Using the native Node.js module `assert`
  * Writing & using popular testing libraries (jasmine & mocha)

### Isolating JavaScript (study JS outside of applications)

* Understand `this`
  * Be able to refactor functions into methods
  * Be able to refactor methods into functions
  * Plan and implement objects based on User Stories
* Understand `getters` and `setters`
* Understand the `class` keyword
  * Be able to refactor between constructor functions & classes
  * Use classes to create simple programs

### Integrating JavaScript (JS embedded in applications)

* Understanding your projects as being first an object, and second a user interface
  1. _Object_: what data is stored in your application, and how can users interact with it? (Data & Logic)
  1. _User Interface_: what does a user see on the screen? (styles & DOM)
  1. _User Interactions_: how does the user interface connect with the core object? (listeners & handlers)
* DOM Components
  * Create functions and methods that return DOM elements
  * Reuse the same components in different places on your site

[TOP](#overview)

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
