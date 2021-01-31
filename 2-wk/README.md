# #100DaysOfCode

## Week 2

## Day 8

added the pdf from iPad notes - day9_ipad_notes.pdf

## Day 9

[Lecture 2: Models of Computattion, Document Distance](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-2-models-of-computation-document-distance/)

## Day 10

Udemy Course - Hash tables [Link](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12310740#overview)

hash tables are present in different programming languages, dicts (python), objects (javascript)

Hash Tables time complexity
| action | Time |  
| :--- | :----: |  
| insert | O(1) |
| lookup | O(1) |
| delete | O(1) |
| search | O(1) |

You can implement a hash table as an object in Javascript e.g

```javascript
  let user = {
      age: 65,
      name: 'John Doe',
      magic: true
      scream: function() {
          console.log(`Ahh`)
      }
  }
```

you can also use Map and Sets. A Map is different from an object in that, it allows you to save any data type as the key, whereas with objects, you are limited to strings as the data type for the keys. keys in the example above are age, name, magic and scream.

Map also maintains insertion order

![hash tables](https://github.com/EOjeah/100DaysOfCode/blob/main/2-wk/images/hash_tables_01.png)

In the table above John Smith was inserted in address space 152, no order as there is with arrays. Sets is another data type and the only difference with Set and Object is that Set only stores the keys and no values (might have to look this one up)

```javascript
const a = new Map();
const b = new Set();
```

Time to implement your own hash table!

> code on [replit](https://repl.it/@EOjeah/FineFabulousExperiments)

```javascript
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const position = this._hash(key);
    if (!this.data[position]) {
      this.data[position] = [];
    }
    this.data[position].push([key, value]);
  }

  get(key) {
    const position = this._hash(key);
    const currentBucket = this.data[position];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return null;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.get('apples');
```

![HashTable01.js](https://github.com/EOjeah/100DaysOfCode/blob/main/2-wk/images/HashTable_01_js.jpeg)

## Day 11

Next, working on Exercise: Find First recurring characters

```javascript
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined
```

> First Solution [repl.it](https://repl.it/@EOjeah/RichThornyGravity#index.js)

```javascript
function firstRecurringCharacter(input) {
  let length = input.length;
  if (length === 0) {
    return undefined;
  }
  let array = [];
  let unique = new Set(input);
  if (unique.size === length) return undefined;

  for (let i = 0; i < length; i++) {
    if (array[input[i]]) return input[i];
    array[input[i]] = input[i];
  }
}

let data = [2, 5, 1, 2, 3, 5, 1, 2, 4];
console.log('Expected:\t2');
console.log('Actual:  \t' + firstRecurringCharacter(data));

let data2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log('Expected:\t1');
console.log('Actual:  \t' + firstRecurringCharacter(data2));

let data3 = [2, 3, 4, 5];
console.log('Expected:\tundefined');
console.log('Actual:  \t' + firstRecurringCharacter(data3));

let data4 = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log('Expected:\t5');
console.log('Actual:  \t' + firstRecurringCharacter(data4));
```

_Issues?_
Having to convert an array into a set in the first place has a time complexity of O(n) and as long as there are items in the array, that will always be the best case scenario :pensive:

Next Try, using objects as below

```javascript
// Do your initial check first and no need to create a new set and array from input...
let map = {}
  for (let i = 0; i < length; i++) {
    let item = input[i];
    if (map[item]) return item;
    map[item] = item
  }
...
```

## Day 12 Linked Lists!

Vusualize data structures and algorithms from this site [Visual Go](https://visualgo.net/en)

somehow got distracted and decided to go on stackoverflow and submitted a few responses

[elasticsearch](https://stackoverflow.com/questions/65962514/elasticsearch-retrieve-only-document-id-where-field-doesnt-exist/65963539#65963539)

[react](https://stackoverflow.com/questions/65964149/how-can-i-get-dropdown-options-populated-from-state/65964229?noredirect=1#comment116629825_65964229)

[javascript](https://stackoverflow.com/questions/65964253/event-listener-targeting-all-elements-on-filtering-method)

Got +10 points for the react answer! nothing yet about my reponse to the elasticsearch question (it's 3am on a Saturday morning, wild night!) the gf sleeping on the bed next to me, do I wake her to join me on this :thinking:?

Implemented a basic Linked list in Javascript with clas methods for `insert(idnex, value)`, `append(value)`, `prepend(value)` and `remove(index)`

```javascript
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  append(value) {
    let newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return this;
    } else if (index < 1) {
      this.prepend(value);
      return this;
    }
    const newNode = {
      value,
      next: null,
    };
    let preNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      preNode = preNode.next;
    }
    newNode.next = preNode.next;
    preNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      return 'Out of Bounds Error';
    }
    let preNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      preNode = preNode.next;
    }
    let currentNode = preNode.next;
    preNode.next = currentNode.next;
    if (index === this.length - 1) {
      this.tail = preNode;
    }
    this.length--;
  }
}
// 10->50->16->89
// 0   1   2   3
let myLinkedList = new LinkedList(10);
myLinkedList.append(50);
myLinkedList.append(16);
myLinkedList.append(89);
// myLinkedList.insert(1, 100)
// myLinkedList.insert(2, 2)
myLinkedList.remove(3);
console.log(JSON.stringify(myLinkedList, null, 2));
```

> [repl it](https://repl.it/@EOjeah/MatureFrenchComputationalscience#index.js)

## Day 13 LinkedList continue (Doubly Linked Lists)

Implemented a doubly linked list with the same functions as the provious single linked list (`append`, `prepend`, `insert` and `remove`)

> [Code](https://repl.it/@eojeah/clumsyacidicmouse#index.js)

```javascript
class DoubleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    this.length++;
  }

  preprend(value) {
    let newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index < 1) {
      this.preprend(value);
      return this;
    }
    if (index >= this.length - 1) {
      this.append(value);
      return this;
    }
    const newNode = new Node(value);
    let refNode = this.head;
    let count = 0;
    while (count < index - 1) {
      refNode = refNode.next;
    }
    refNode.next.previous = newNode;
    newNode.next = refNode.next;
    refNode.next = newNode;
    newNode.previous = refNode;
    this.length++;
  }
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      return this;
    }
    if (index === this.length - 1) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;
      return this;
    }
    let currNode = this.head.next;
    let count = 1;
    while (count < index - 1) {
      currNode = currNode.next;
    }
    this.length--;
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
  }

  printList() {
    let list = {
      values: [],
      length: undefined,
    };
    let currNode = this.head;
    for (let i = 0; i < this.length; i++) {
      list.values.push(currNode.value);
      currNode = currNode.next;
    }
    list.length = this.length;
    console.log(list);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

let myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(7);
myLinkedList.preprend(99);
myLinkedList.insert(-1, 8);
myLinkedList.insert(99, 4);
myLinkedList.insert(1, 20);
myLinkedList.remove(5);
myLinkedList.remove(1);
myLinkedList.printList();
```

## Day 14 continue with Udemy course
