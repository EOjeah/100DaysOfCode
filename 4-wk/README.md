day 22

day 23
reverse linked list - long solution, works but could do better, algorithm and logic way too complex
solves the problem but algorithm could be simplified, watched the instructors solution, going to implement his but without watching the video tomorrow

```javascript
  reverse() {
    if (this.length === 1) return this;
    if (this.length === 2) {
      console.log('lenght is 2')
      let node = this.tail;
      node.next = this.head;
      this.head.next = null;
      this.head = node;
      this.tail = node.next;
      return this;
    }
    let firstNode = this.head;
    let secondNode = firstNode.next;
    let thirdNode = secondNode.next;
    let temp = null;
    // console.log('firstNode', firstNode)
    while (firstNode.next.next)  {
      if (!temp) {
        firstNode.next = null;
        this.tail = firstNode;
        temp = firstNode;
        firstNode = secondNode;
      }
      else {
        firstNode.next = temp;
        temp = firstNode;
        secondNode = thirdNode;
        thirdNode = thirdNode.next;
        firstNode = secondNode;
      }
    }

    this.head = firstNode.next;
    this.head.next = secondNode;
    firstNode.next = temp;
  }
}
```

day 24

reverse linked list
after getting inspiration from the instructor, wrote down my solution to understand with pen and paper, wrote code on PC and worked first time!
[repli.it](https://repl.it/@EOjeah/MatureFrenchComputationalscience#index.js)

```javascript
  reverse() {
    if (this.length === 1) return this;
    let firstNode = this.head;
    let secondNode = firstNode.next;
    while(secondNode) {
      let thirdNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = thirdNode;
    }
    this.head.next = null;
    this.tail = this.head;
    this.head = firstNode;
  }
```

so much cleaner after changing algorithms and better to understand the code

Mind map for mastering the coding interview https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link

day 25
Worked on chef! spinning up an elasticsearch cluster in a test kitchen, creating a certificate authority and signing to get crt and key files

day 26

Stack on Udemy course
implemented a stack with methods `peek` `pop` and `push` using Linked list

Was difficult at first because I had the wrong idea. I tried implementing as a linked list but pointing in the wrong direction but much easier after making them point in the correct direction

![Stack with Linked list](https://github.com/EOjeah/100DaysOfCode/blob/main/4-wk/images/stack_linked_list.png)

> [Code](https://repl.it/@EOjeah/ModestReadyObjectpool#index.js)

Queue

![Queue with Linked list](https://github.com/EOjeah/100DaysOfCode/blob/main/4-wk/images/queue_linked_list.png)

[SneakyDodgerblueVirus](https://repl.it/@EOjeah/SneakyDodgerblueVirus#index.js)

Queue implementation is very similar to Stack and I was much quicker implementing this because I just solved Stacks DS

day 27 13 Feb 2021

[Implement Queue using Stacks Leetocde](https://leetcode.com/problems/implement-queue-using-stacks/description/)

![Tree Data Structure](https://github.com/EOjeah/100DaysOfCode/blob/main/4-wk/images/tree_data_structure.png)

Trees

- Binary Tree is a type of tree with some chareacteristics

Each node can either have 0, 1 or 2 nodes and each child can only have one parent

![Binary Tree](https://github.com/EOjeah/100DaysOfCode/blob/main/4-wk/images/binary_tree.png)
![Perfect Binary Tree](https://github.com/EOjeah/100DaysOfCode/blob/main/4-wk/images/perfect_binary_tree.png)
![Binary SearchTree time Complexity](https://github.com/EOjeah/100DaysOfCode/blob/main/4-wk/images/bst_time.png)

Took a break from Data Structures on Udemy to watch a youtube video on designing a website with figma in an hour

[Figma Design](https://www.figma.com/files/project/24173661/Spotify-Clone)

[YouTube Video](https://www.youtube.com/watch?v=FK4YusHIIj0&t=0s)

hosted on github pages [Soundwave](https://eojeah.github.io)
