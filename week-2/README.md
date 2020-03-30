# Encapsulation, Week 2

* [Prep Work](#prep-work)
* [Lesson Plan](#lesson-plan)
  * [Isolate](#isolate)
  * [Integrate](#integrate)
* [Assignments](#assignments)
  * [Exercises](#exercises)
  * [Project](#project)

---

## Prep Work

### Binding `this`

* [Examples of `this` and bind](https://www.youtube.com/watch?v=PIkA60I0dKU)
* Zach Gordon: [this](https://www.youtube.com/watch?v=2qMKjWf1KdE), [binding this](https://www.youtube.com/watch?v=73aAyap_88w), [example: event handlers](https://www.youtube.com/watch?v=sxRnmKldiBs)
* [Binding example in JS Tutor](http://www.pythontutor.com/javascript.html#code=function%20returnThis%28%29%20%7B%0A%20%20return%20this%3B%0A%7D%0Aconst%20demo0%20%3D%20returnThis%28%29%3B%0A%0Aconst%20obj1%20%3D%20%7B%0A%20%20id%3A%201,%0A%20%20returnThis%0A%7D%3B%0Aconst%20demo1%20%3D%20obj1.returnThis%28%29%3B%0A%0Aconst%20obj2%20%3D%20%7B%20id%3A%202%20%7D%3B%0Aconst%20boundToObj2%20%3D%20returnThis.bind%28obj2%29%3B%0Aconst%20demo2%20%3D%20boundToObj2%28%29%3B%0A%0Aconst%20boundToLiteral%20%3D%20returnThis.bind%28%7B%20id%3A%203%20%7D%29%3B%0Aconst%20demo3%20%3D%20boundToLiteral%28%29%3B&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D)

### Sunday Lesson Plan

Study the [Sunday lesson plan](https://hackyourfuture.be/encapsulation/week-2) so you come prepared. It's not possible to learn everything in 4 hours, the more prepared you are the more you will benefit from class!

---

## Lesson Plan

> [Lesson Plan Slides](https://hackyourfuture.be/encapsulation/week-2)

This Sunday's lesson plan focuses on _binding_: how it works in memory, why it's important, and how to use it for OOP handlers.

### Isolate

* Binding this: [examples](../javascripting/binding-this-examples/REVIEW.md), [exercises](../javascripting/binding-this-exercises/REVIEW.md)
* Binding arguments: [examples](../javascripting/binding-arguments-examples/REVIEW.md), [exercises](../javascripting/binding-arguments-exercises/REVIEW.md)

### Integrate

* Bound Incrementor (example): [stepped](../example-projects/bound-incrementor-stepped), [separated](../example-projects/bound-incrementor-separated)
* [Entries w/ Binding Handlers](https://github.com/hackyourfuturebelgium/entries-binding-handlers) (starter repo)

---

## Assignments

Starting with the exercises will make it easier to complete the project.  Spending a few days practicing before diving into the project will be worth it.

> Before getting started on the homework, take a minute to set up your [Homework Issue](https://github.com/HackYourFutureBelgium/homework-submission#homework-issues) on this module's project board.

### Exercises

#### Isolating JavaScript

Solve each exercise on a separate branch and merge to master when they are complete.  Be sure to run `$ node review.js` before pushing to make it easier for your coaches to review your work.

* [binding-handlers](https://github.com/hackyourfuturebelgium/binding-handlers)
* [es6-classes](https://github.com/hackyourfuturebelgium/es6-classes)

#### Integrating JavaScript

* Form a group of 2-3 and Complete 1 [JavaScript 30](https://github.com/hackyourfuturebelgium/javascript-30) group challenge, your choice!
  * Link to your team's main repository in your homework issue

#### Challenge Exercises

* (_Isolate_) [FCC Functional Programming](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/)
* (_Isolate_) [FCC Intermediate Algorithm Scripting](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/)
* (_Isolate_) [javascript-exercises](https://github.com/TheOdinProject/javascript-exercises)
* (_Isolate_) [js-exercises-tdd](https://github.com/CodeYourFuture/js-exercises-tdd)

### Project: `booklist-app`

> [Code-Along](https://github.com/HackYourFutureBelgium/homework-submission/#projects)

This week's project is to study the [`booklist-app`](https://www.youtube.com/watch?v=JaMCxVWtW58) tutorial from Traversy Media.  In this app you will learn how to use [ES6 Classes](https://study.hackyourfuture.be/javascript/oop#classes) to organize your app and reuse code.

You will be expected to turn in your code from his tutorial on a new repository called `booklist-app`.  This should be a complete project repository including:

* A `development-strategy.md` file to explain how you built the app in small pieces (this file doesn't need to match the tutorial!)
* One branch per step in your `development-strategy.md`
* The final code of the tutorial organized into separate files and folders.  It's up to you!  The only wrong answer is one .js file with all of your code ;)
* A complete README describing your project and what you learned, and showing how you chose to organize your code using a plain-text directory structure ([like this one](https://github.com/HackYourFutureBelgium/organized-for-deployment#directory-structure))

You will be assessed not only on your live demo, but also on the quality of your code, the correctness of your branches, the organization of your code, and the completeness of your README.

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
