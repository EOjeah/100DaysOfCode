# #100DaysOfCode

## Week 1

Document everything here! including images and links, for books, give a brief summary and for code, add the file and name appropriately

Check browser compatibility with css grid [caniuse](https://caniuse.com/css-grid)

All the properties used in css grid
![Image of CSS grid properties](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/css_grid_properties.png)

`grid cells` are the smaller rectangles, there are the intersection of `grid columns` and `grid rows`

`grid columns` and `grid rows` are collectively called `grid tracks`
there are also `grid lines` space between grid tracks
arbituary sections of the cells are `grid areas`

> grid-template-columns(rows): Defines the number of columns(rows) in a grid container and their width(height), for example if you want 2 columns of 200px width each then

```css
[grid container] {
  grid-template-columns: 200px 200px;
}
```

> grid-column-start: is applied to a grid item and takes in a number, tells the item where to start

> min-content: tells css that the contianer should be large enough to help it's content and no more
