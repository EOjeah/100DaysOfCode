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
