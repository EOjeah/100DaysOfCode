## Day 36 Monday 22 Feb 2021

Binary Search Tree
Implement your BST with two methods, `insert` and `lookup`
make the lookup function return the node you're looking for and if it doesn't find the node, return `null`
[code](https://repl.it/@EOjeah/GleamingPoisedServices#index.js)

> I always forget this and not sure how I remembered it this time, but you can debug your javscript code using node by running the code with $node --inspect-brk index.js and visiting the page chrome://inspect on Chrome obviously, to start a debug session.

![Chrome debug](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/chrome_js_debug.png)

![Chrome debug](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/inspect_window.png)

Helped me debug a bug in my code which worked fine on paper but I put the return statement in my `while` block instead of outside.

`node --inspect-brk index.js`

Basically the same solution as the instructor but with different variable names

## Day 37 Tuesday 23 Feb 2021

AVL tree and Red/Black trees are self balancing trees, not going to code them out but worth nothing how they balance themselves

![self balancing BST debug](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/self_balancing_BST.png)

The point of the self balancing BSTs is to ensure that the time complexity remains close to O(log N). A very unbalanced BST will have a time complexity of O(N) so we try to avoid that by balancing the trees
Resources:

- [Udemy video](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12367604#overview)
- [Udemy video resources](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12368622#overview)

### Binary Heaps

- ![Max Binary Heap](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/max_binary_heap.png)

Binary heaps are quite useful when performing `comparative` operations like:

> I want people that have a value over 33, in that case you can grab the items on the diagram

Heaps add value on the tree in order from left to right and then bubbles up if not in the same priority order

> Priority Queue:

- Normal queue data structure with FIFO (first in first out). first to get in the line of a queue to a club in June 2021 will be the first to get in
- Priority queue: each person is given some VIP pass (higher priority) and can get in the club sooner than queue items with lower priority. Instructor using same analogy as I came up with!

### Trie

A trie is a specialised type of tree used in searching, most often with text. Inmost cases, it can outperfoem BST, hash tables

- ![trie](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/trie.png)

Searching for letter `N` in the image above, and you already know that there are two words associated with the letter `N`, `NOT` and `NEWS`. Another name for a trie is prefix tree.

The big O of finding a word in a trie data structure is O(length of the word)

Complete Section 10: Data Structures: Trees

### Graphs - final data structure in the course

![graph ds](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/graph_ds.png)
![graph directional](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/directional_graphs.png)

Took the LinkedIn JS skills assessment, quite easy and got top 5% of +800k people
![LinkedIn skills](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/LinkedIn_js_skills_assessment.png)

it's 2am I better sleep now for meeting at 9am

## Day 38 Wednesday 24 Feb 2021

![graph representation](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/edge_and_adj_graph.png)
![adjacent matrix](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/adjacent_matrix.png)

[Udemy Excercise](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12371828#overview)

solution

[code](https://repl.it/@EOjeah/FlamboyantMellowPacket#index.js)
Really easy to code this one, only functions required are to add vertices and edge with the function `addVertex(node)` and `addEdge(node1,node2)`

![graph excercise](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/graph_exercise.png)

```javascript
addVertex(node)  {
    this.adjacentList[node] = []
    this.numberOfNodes++;
}
addEdge(node1, node2) {
    //undirected Graph
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
}
```

Difficult to build graphs but there are tools like [Neo4j](https://neo4j.com/) which is a popular database to buid really fast databases

Completed Data Structure Section next up Algorithms!

### Introduction to Algorithms

most common algorithms

- Sorting
- Dynamic Programming
- BFS + DFS (Searching)
- Recursion
- Recursion

Completed a few videos, next video is the exercise, finally some coding for tomorrow

## Day 39 Thursday 25 Feb 2021

### [5 JavaScript Features](https://www.youtube.com/watch?v=v2tJ3nzXh8I)

1. Nullish Collescing
   > The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand [https://developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator).

```javascript
const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0

function(tax){
    if (tax === null) {
        tax = 0.05
    }
    // same as below
    tax = tax ?? 0.05
}

```

2. Styling console.log messages on browser

use `%c` in the first argument to the console.log message and the `css` style as the second argument, for example

```javascript
console.log(
  '%cSomething will be bold and red',
  'font-weight: bold; color: red;'
);

console.log(
  '%cThis will be bold %cThis will be red',
  'font-weight: bold',
  'color: green'
);
```

3. Optional Chaining

![Optional Chaining](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/optional_chaining.png)

To avoid the error in the console in the screenshot, use the code below to call the function and just prints undefined to console

```javascript
console.log(person?.address?.street);
```

```javascript
class Person {
    constructor(name, address, hobbies) {
        this.name = name;
        ...
    }
    print() {
        console.log(this)
    }
}
let kyle = new Person('kyle',{street:'hawthorn'},['hobby1', 'hobby2'])
kyle.print() // works fine
kyle.printName() // Uncaught TypeError: kyle.printName is not a function
// Instead use
kyle.printName?.() //check if printName exists and is a function first

// can also work with arrays so
console.log(kyle.hobbies?.[0]) // print out hobby1 if present and nothing if nothing in the array
```

Not too sure if i'll use this feature because I think it's better if the code fails and you can see the error in the console rather than the code running successfully but getting the wrong output. But it's useful to know more features so you understand it while reading others code

Personally would use a `try/catch` and print out customised error messages to the screen to help debug. Ultimately depends on the situation, but clarity over cuteness or just using features because it's present

4. Object shorthand
   already know and use this

```javascript
let name = 'Manny';
let hobby = 'football';

let obj = {
  name: name,
  hobby: hobby,
};
//Note, the object key and the variable representing the value have same name, object shorthand below
let obj2 = {
  name,
  hobby,
};
// same as above but shorter
```

5. Loading javascript

> In the code below, the DOM renders the complete HTML and then loads the javascript code, while this works, it would be better to perform these actions async

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title</title>
  </head>
  <body>
    <button>Hi</button>
    <script src="script.js"></script>
  </body>
</html>
```

> in the html below, with the use of `defer` in the script src, the DOM starts to download the javascript code while it renders the DOM and finally the script will take effect

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="script.js" defer></script>
    <title>Title</title>
  </head>
  <body>
    <button>Hi</button>
  </body>
</html>
```

More info in his youtube video [Fastest Way to Load Javascript](https://www.youtube.com/watch?v=BMuFBYw91UQ)

Work has organised a training with QA for tech graduates and focused on software developement called T-Shaped Engineering Programme. First project will use Java and MySQL to build a basic command line application, starts on 22 March. As much as I've been trying to avoid Java, this training seems somewhat important and will last about a month so I better focus on Java and MySQL for now.

Fun part because looks like we might get to use React, finally!

## Java

- [Pluralsight](https://app.pluralsight.com/library/courses/getting-started-programming-java)
- [CodeAcademy](https://www.codecademy.com/courses/learn-java/lessons/hello-world-java/exercises/introduction-to-java)

> While learning Java, i'll just compare the concepts with JavaScript as I'm more confortable in javascript.

Declare a variable that you don't want to change with keyword `final` just like `const` in Javascript.

```java
final int maxStudents = 25;
// the variable maxStudents cannot be changed once defined this way
```

## Primitive Data types (built in)

- Integer, floating point, character and boolean

### Integer Types

| Type  | Bits | Min Value            | Max Value           | Literal form |
| ----- | ---- | -------------------- | ------------------- | ------------ |
| byte  | 8    | -128                 | 127                 | 0            |
| short | 16   | -32768               | 32767               | 0            |
| int   | 32   | -2147483648          | 2147483647          | 0            |
| long  | 64   | -9223372036854775808 | 9223372036854775807 | 0L           |

```java
byte numberOfEnglishLetters = 26;

short feetInAMile = 5280;

int milesToSun = 92960000;

long milesInALightyear = 5879000000000L; // notice the L at the end of the value
```

### Floating Point Types

2 types - `float` and `double`

| Type   | Bits | Smallest Positive value | Largest Positive value | Literal form |
| ------ | ---- | ----------------------- | ---------------------- | ------------ |
| float  | 32   | 1.4 x 10^(-45)          | 3.4 x 10^(38)          | 0.0f         |
| double | 64   | 4.9 x 10^(-324)         | 1.7 x 10^(308)         | 0.0 or 0.0d  |

```java
float kilometersInAMarathon = 42.195f;
double atomWidthInMeters = 0.0000000001d;
```

### Character Type

Stores a single Unicode character

Literal values placed between single quotes

```java
char regularU = 'U';
```

For Unicode code points, use \u followed by 4-digit hex value

```java
char accentedU = '\u00DA'; // Ú
```

### Boolean Type

```java
boolean iLoveJava = false;
```

### Prefix and Postfix Operators

```java
int someValue = 5;
System.out.println(someValue++); // 5
System.out.println(someValue);   // 6

int someOtherValue = 5;
System.out.println(++someOtherValue); // 6
System.out.println(someOtherValue);   // 6
```

you can explicitily `cast` different types

```java
int value;
float anotherOne = 3.3f;
value = (int) anotherOne; // 3
```
