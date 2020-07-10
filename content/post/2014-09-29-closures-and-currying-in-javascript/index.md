---
title:  "Closures & Currying in JavaScript"
authors: ["Rory Hardy"]
date:   2014-09-29
tags: [javascript, development, engineering, closures, currying, functional programming]
thumbnail: "not_sure_if.jpg"
---

## Preface
I have been asked many times what closures are and how they work. There are many resources available to learn this concept, but they are not always clear to everyone. This has led me to put together my own approach to exchanging the information.

I will supply code samples. `//>` denotes an output or return.

Before discussing closures, it is important to review how functions work in JavaScript.

## Introduction to functions
If a function does not have a return statement, it will implicitly return undefined, which brings us to the simplest functions.

### Noop
Noop typically stands for no operation; it takes any parameters, does nothing with them, and returns undefined.

```js
function noop() {};
noop("cat"); //> undefined
```

### Identity
The identity function takes in a value and returns it.

```js
function identity(value) {
  return value;
}

identity("cat"); //> "cat"
identity({a: "dog"}); //> Object {a: "dog"}
```

The important thing to note here is that the variable (value) passed in is bound to that function’s scope. This means that it is available to everything inside the function and is unavailable outside of it. There is an exception to this, being that objects are passed by reference which will prove useful with the use of closures and currying.

### Functions that evaluate to functions
Functions are first class citizens in Javascript, which means that they are objects. Since they are objects, they can take functions as parameters, have methods bound to them,  and even return functions.

```js
function foo() {
  return function () {
    return true;
  }
}

foo()(); //> true
```

This is a function that returns a function which returns true.

{{< figure src="not_sure_if.jpg" alt="Not sure if my function or a function from inside my function" >}}

Functions take arguments and those arguments can be values or reference types, such as functions. If you return a function, it is that function you are returning, not a new one (even though it might have just been made to return).

## Closures
Creating a closure is nothing more than accessing a variable outside of a function’s scope (using a variable that is neither bound on invocation or defined in the function body).

To elaborate, the parent function’s variables are accessible to the inner function. If the inner function uses its parent’s (or parent’s parent’s and so on) variable(s) then they will persist in memory as long as the accessing functions(s) are still referenceable. In JavaScript, referenceable variables are not garbage collected.

Let’s review the identity function:

```js
function identity(a) { return a; }
```

The value, a, is bound inside of the function and is unavailable outside of it; there is no closure here.  For a closure to be present, there would need to be a function within this function that would access the variable a.

Why is this important?

* Closures provide a way to associate data with a method that operates on that data.
* They enable private variables in a global world.
* Many patterns, including the fairly popular [module pattern](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html), rely on closures to work correctly.

Due to these strengths, and many more, closures are used everywhere. Many popular libraries utilize them internally.

{{< figure src="closures_everywhere.jpg" alt="Closures! Closures everywhere!" >}}

Let’s take a look at an example of closure in action:

```js
function foo(x) {
  function bar(y) {
    console.log(x + y);
  }

  bar(2);
}

foo(2); // will log 4 to the console
```

The outer function (foo) takes a variable (x), which, which is bound to that function when invoked. When the internal function (bar) is invoked, x (2) and y (2) are added together then logged to the console as 4. Bar is able to access foo's x-variable because bar is created within foo's scope.

The takeaway here is that bar can access foo’s variables because it was created within foo’s scope. A function can access variables in its scope and up the chain to the global scope. It cannot access other function’s scopes that are declared within it or parallel to it.

{{< figure src="question.jpg" alt="Question, does a function inside a function mean you have a closure?" >}}

No, a function inside of a function doesn't have to reference variables outside of its scope. Recall the example function which returned a function which evaluated to true:

```js
function foo(x) {
  // does something with x or not
  return function () {
      return true;
  }
}

foo(7)(); //> true
```

No matter what is passed to foo, a function that evaluates to true is returned.  A closure only exists when a function accesses a variable(s) outside of its immediate scope.

This leads into an important implication about closures, they enable you to define a dataset once. We’re talking about private variables here.

Without closures, you recreate the data per function call if you want to keep it private.

```js
function foo() { 
  var private = [0, 1, 2]; // Imaginary large data set - instantiated per invocation

  console.log(private);
}

foo(); //> [0, 1, 2]
```

We can do better! With a closure, we can save it to a variable that is private, but only instantiated once.

```js
var bar = (function () {
  var private = [0, 1, 2]; // Same large imaginary data set - only instantiated once

  // As long as this function exists, it has a reference to the private variable
  return function () {
    console.log(private);
  }
}());

bar(); //> [0, 1, 2]
```

By utilizing closure here, our big imaginary data set only has to be created once. Given the way garbage collection (automatic memory freeing) works in JavaScript, the existence of the internal function (which is returned and set to the variable bar) keeps the private variable from being freed and thus available for subsequent calls. This is really advantageous when you consider large data sets that may be created via Ajax requests which have to go over the network.

## Currying
{{< figure src="curry.jpg" alt="Mmmm Curry!" >}}

Currying is the process of transforming a function with many arguments into the same function with less arguments.

That sounds cool, but why would I care about that?

* Currying can help you make higher order factories.
* Currying can help you avoid continuously passing the same variables.
* Currying can memorize various things including state.

Let’s pretend that we have a function (curry) defined and set onto the function prototype which turns a function into a curried version of itself. Please note, that this is not a built in feature of JavaScript.

```js
function msg(msg1, msg2) {
  return msg1 + ' ' + msg2 + '.';
}

var hello = msg.curry('Hello,');

console.log(hello('Sarah Connor')); // Hello, Sarah Connor. 
console.log(msg('Goodbye,', 'Sarah Connor')); // Goodbye, Sarah Connor. 
```

By currying the msg function so the first variable is cached as “Hello,”, we can call a simpler function, hello, that only requires one variable to be passed. Doesn’t this sound similar to what a closure might be used for?

In the discussion of functional programming concepts, there is often a sense of resistance.

{{< figure src="not_going_to_happen.jpg" alt="Stop trying to make functional programming happen. It's not going to happen!" >}}

The thing is, you’ve probably already been functionally programming all along. If you use jQuery, you certainly already do.

{{< figure src="what_if_functional.jpg" alt="What if I told you, you are already doing some functional programming." >}}


```js
$("some-selector").each(function () {
  $(this).fadeOut();
  // other stuff to justify the each
});
```

{{< figure src="hide_all_the_things.jpg" alt="HIDE ALL THE THINGS" >}}

Another place you may have seen this is utilizing the map function for arrays.

```js
var myArray = [0, 1, 2];
console.log(myArray.map(function (val) {
  return val * 2;
}));

//> [0, 2, 4]
```

## Conclusion
We’ve seen some examples of closures and how they can be useful. We’ve seen what currying is and more importantly that you’ve likely already been functionally programming even if you didn’t realize it. There is a lot more to learn with closures and currying as well as functional programming.

I ask you to:

1. Work with closures and get the hang of them.
2. Give currying a shot.
3. Embrace functional programming as an additional tool that you can utilize to enhance your programs and development workflow.

## Additional readings and inspirations
* [JavaScript Allongé](https://leanpub.com/javascript-allonge/read)
* [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
* [Understand JavaScript Closures With Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
* [Partial Application in JavaScript](http://ejohn.org/blog/partial-functions-in-javascript/)
* [Curried JavaScript Functions](http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html)

### Bonus
Check out how you can utilize closure and currying to manage state throughout a stateful function:

```js
function setFoo(state) {
  if (state === "a") { // Specific state
      return function () {
          console.log("State a for the win!");
      };
  } else if (state) { // Default state
      return function () {
        console.log("Default state");  
      };
  }
  // Empty function since no state is desired. This avoids invocation errors.
  return function () {}; 
}

var foo = setFoo("a"); // Set to the specific state (a)
foo(); //> "State a for the win!";

foo = setFoo(true); // Set foo to its default state
foo(); //> "Default state"

foo = setFoo(); // Set foo to not do anything
foo(); //> undefined
// etc
```

### Bonus 2
Checkout how closures and currying can be used to create higher order functions to create methods on the fly: http://jsfiddle.net/GneatGeek/A9WRb/
