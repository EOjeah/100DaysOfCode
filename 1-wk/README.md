# #100DaysOfCode

## Day #1

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

## Day #2

`grid track` one track option to use is the `fr` for fractional unit

can use dynamic track sizes that respond to the view port or content in them
![Image of viewport vs content](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/viewport_vs_content_responsive.png)

`min-content` will make the track as small as possible to fit its content. There is also `max-content`

You don't have to decide track size that respond either to the content or viewport, use the powerfull `minmax(min size, max size)`

## Grid Shorthands

> `repeat(number of repititions, track sizes)`

For example, to split grid columns into 5 equal cells, use

```css
[grid container] {
  grid-template-columns: repeat(5, 1fr);
}
```

Instead of

```css
[grid container] {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
```

can also something like `repeat(6, 1fr 2fr)`

1fr 2fr x 6

|--|----||--|----||--|----||--|----||--|----||--|----||

Using `repeat` you can define the size of your columns and display as many as will fit in the grid
`repeat(auto-fill, 30em)` can also use `repeat(auto-fill, minmax(15em, 1fr))` auto-fill is similar to `auto-fit` as this will fill the row with the items

> grid-template: 20em 10em / repeat(6, 1fr)

lets you define `grid-template-rows` / `grid-template-columns` shorthand

## Implicit Grid (watch again, doesn't make any sense) [Pluralsight](https://app.pluralsight.com/course-player?clipId=f8b1f72b-959f-48c8-a24f-2c425c966843)

> The implicit grid refers to any columns or rows CSS has to create itself to accomoodate your grid items, because it wasn't defined in your grid layout. For example, defining a 8 cell grid with `grid: repeat(4, 10em) / repeat(2, 10em)` and having 9 grid items in the grid. 8 explicit grids and 1 implicit grid

The cells get created implicitly. So how do you change its size?? The property to use is `grid-auto-rows`

![Image of grid-auto-rows](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/grid_auto_rows.png)

the `grid` property has a shorthand for defining how implicit cells are created. `auto-flow`

```css
[grid container] {
  grid: auto-flow 10em / 10em 10em;
}
```

> code above will tell CSS two things 1. What axis to create the new cells (row, create new rows) and the size of the new cells (10em)

can use the code above instead of

```css
[grid container] {
  grid: 10em 10em / 10em 10em;
  grid-auto-rows: 10em;
}
```

`grid-auto-rows: track-size` specifies the size of any implicitly-created rows

`grid-gap: row-gap column-gap` or use one value to represent both if there're the same
