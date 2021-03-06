## Day 43 Monday 1 March 2021

[Working with Classes and Interfaces in Java](https://app.pluralsight.com/course-player?clipId=6f4bb29f-d89f-463b-83b7-70d62d9c671c)

![Classes as reference types](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/classes_as_ref.png)

## Day 44 Tuesday 2 March 2021

[JavaScript Objects, Prototypes, and Classes](https://app.pluralsight.com/library/courses/javascript-objects-prototypes-classes/table-of-contents)

Define objects different ways blah blah... use object literals. e.g

```javascript
 let person = {
     firtname: 'Jim',
     lastname: 'Sed',
     age: 17,
     isAdult: function() {return this.age > 18;}
    //  or shorter as below
    isAdult_(): return this.age > 18;
 }
```

Display object properties with `Object.keys(person)`

`for`...`in` iterates over `keys!`

![Object equality](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/object_equality.png)

![Object.create](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/using_object_create.png)

    Modifying Properties with Properties Descriptors

```javascript
let person = {
    firstname: 'Jim',
    lastname: 'Sed',
    age: 17,
    color: {
        primary: 'red';
    }
}

Object.getOwnPropertyDescriptor(person, 'firstname');
// will result in
// Object {
    //     value: Jim,
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// can update with
Object.defineProperty(person, 'firstname', {writable: false});

Object.defineProperty(person, 'color', {writable: false});

// trying the line below will result in an error
person.firstname = 'Kris'; //not valid

person.color = {} // not valid
//  you cannot change the 'color property of person but you can change the property on the 'color' property so the code below is valid
person.color.primary = 'green'; //valid
// Uncaught TypeError: Cannot assign to read only property 'firstname' of object '#<Object>

// with Object.freeze then you cannot change properties on properties so
Object.freeze(person.color);
person.color.primary = 'yellow' // is not valid after code above
```

> Enumerable: if you change this property to false then when you enumarate over the keys in the Object then that property will no longer show

```javascript
Object.defineProperty(person, 'firstname', { enumarable: false });
console.log(Object.keys(person));
// lastname: 'Sed'
// age: 17

// also if you JSON stringify this object or use a for...in loop, 'firstname' will be missing from the output
```

> Configurable Property: locks down the property to prevent the properties themselves from being chnaged (you can chnage the writable property though), also prevent the property from being deleted from the object

### Getters and Setters

```javascript
let person = {
  name: {
    first: 'Jim',
    last: 'Cooper',
  },
};

Object.defineProperty(person, 'fullName', {
  get: function () {
    return this.name.first + ' ' + this.name.last;
  },
  set: function (value) {
    let nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];
  },
  enumerable: true,
});

console.log(person.fullName); // Jim Cooper

person.fullName = 'Fred Jones';

console.log(person.fullName); // Fred Jones
console.log(person.name.first); // Fred
console.log(person.name.last); //  Jones
```

![Object prototype](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/object_prototypes.png)

![Object and Function prototype](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/function_obj_prototype.png)

![Object and Function prototype 2](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/more_prototypes.png)

![Inheritance chanin](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/inheritance_chain.png)

## Classes: syntactic sugar for Object constructors

```javascript
// function constructors
function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastame = lastname;
  this.age = age;
  this.isAdult = function () {
    return this.age > 18;
  };

  Object.defineProperty(this, 'fullname', {
    get: function () {
      return this.firstname + ' ' + this.lastname;
    },
    set: function (value) {
      let nameParts = value.split(' ');
      this.firstname = nameParts[0];
      this.lastname = nameParts[1];
    },
    enumerable: true, //so enumerating over this objects keys will print fullname as well
  });
}

// Classes
class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastame = lastname;
    this.age = age;
  }

  isAdult() {
    return this.age > 18;
  }
  get fullname() {
    return this.firstname + ' ' + this.lastname;
  }
  set fullname(value) {
    let nameParts = value.split(' ');
    this.firstname = nameParts[0];
    this.lastname = nameParts[1];
  }
}
// by default, when you use setters to define a property on the class, enumerable is set to false so we can change that
Oject.defineProperty(Person.prototype, 'fullname', { enumerable: true }); // using Person.prototype because get and set live on the classes prototype
```

### class inheritance

```javascript
class Student extends Person {
  constructor(firstname, lastname, age) {
    super(firstname, lastname, age); // call Persons contructor with this
    this._enrolledCourses = [];
  }
}
```

lookup `static` in classes. Accessing properties of classes or objects without initializing it first e.g `Math.PI` did you have to create using `let z = new Math()`. In fact, all properties on `Math` Object are static

![Date Object](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/date_object.png)

Learned about javascript built in objects including `Math`, `RegEx` and `Date`

## Day 45 Wednesday 3 March 2021

[Udemy DS and Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12394024#overview)

First excercise, find factorial of a number using recursion and loops

[code](https://repl.it/@EOjeah/EvilMustyLearning#index.js)

Recursion

```javascript
function factorial(number) {
  //code here
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}
```

```javascript
function findFactorialIterative(number) {
  //code here
  if (number <= 1) return 1;
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer *= i;
  }
  return answer;
}
```

Next exercise is [Here](https://repl.it/@aneagoie/Recursion-fibonacci)

```javascript
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
}
fibonacciIterative(3);

function fibonacciRecursive(n) {
  //code here;
}

fibonacciRecursive(3);
```

Took me a while but solved it recursively, almost gave up to watch the solution video but all i needed was patience...
[repl.it](https://repl.it/@EOjeah/AdmiredAdmiredSpecialist#index.js)

Much easier solution below but HORRIBLE time complexity O(2^n) so my solutions better, instructor might provide an optimised solution like mine but hasn't done yet. Probably in Dynamic programming or memoization

```javascript
function fb(n) {
  if (n < 2) {
    return n;
  }
  return fb(n - 1) + fb(n - 2);
}
// more info on diagram below, terrible tim complexity, my solution on repl.it uses memoization and O(n) space and time complexity
```

![fibionacci recursive](https://github.com/EOjeah/100DaysOfCode/blob/main/7-wk/images/fb_diagram.png)

## Day 46 Thursday 4 March 2021

React redux course on Pluralsight
Redux - state mangement library for javascript and learned how to use reduxwith react, complex boilerplate but I just need to understand the pattern and how all the different redux component fit together

Second time watching this video and found it easier to follow

[Connecting React to Redux](https://app.pluralsight.com/library/courses/react-redux-react-router-es6/table-of-contents)

## Day 47 Friday 5 March 2021

Patiently waiting to start exercising again at the gym, deployed a gym opening countdown to my website

[Gym countdown!](https://eojeah.app)

Learned some time manipulation with Javascript and had to relearn some css which i thought i knew

Automated code deployment with github actions and hosting on firebase

website gets automatically deployed after pushing to the repos `main` branch on GitHub

## Day 48 Saturday 6 March 2021

Java - [Working with Classes and Interfaces in Java on Pluralsight](https://app.pluralsight.com/library/courses/working-classes-interfaces-java/table-of-contents)

To continue from Implementing Class Constructors and Initializers - Constructor Chaining

Learned aboout how to construct classes in Java, access modifiers `get` and `set` methods, `private` and `public` methods or class properties
