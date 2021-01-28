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

> code on replit - [HashTable01](https://repl.it/@EOjeah/HashTable01#index.js)

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
