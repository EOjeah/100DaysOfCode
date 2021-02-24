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

- ![graph ds](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/graph_ds.png)
- ![graph directional](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/directional_graphs.png)

Took the LinkedIn JS skills assessment, quite easy and got top 5% of +800k people
![LinkedIn skills](https://github.com/EOjeah/100DaysOfCode/blob/main/6-wk/images/LinkedIn_js_skills_assessment.png)

it's 2am I better sleep now for meeting at 9am
