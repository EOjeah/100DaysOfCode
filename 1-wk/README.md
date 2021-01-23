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

## Day #3

so far you can create a 8 column grid and and tell an item to occupy the whole row with `grid-column: 1 / 8` but you can also use -1 instead of 8 like `grid-column: 1 / -1`

![Image of grid posititioning with -1](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/grid_1.png)

can use `grid-column-end: span 2;` to span two columns

`span` keyword instructs a grid item to span a certain number of tracks

`grid-area: row-start / row-end / column-start / column-end` -- meh don't use this

> You can only align an item when it's inside a container that has extra space

![Image of body not 100% by default](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/height_not_100.png)

adjust html and body to 100% and now you can align vertically as well as horizontally

`justify-content` and `align-content` will move the grid around without affeting the contents of the grid itself

![Justify and align-content: center](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/justify_align_center.png)

`justify-content` and `align-content` have the same possible properties

- start (default)
- center
- end
- space-around
- space-between
- space-evenly

`justify-items` and `align-items` will position the content of each item within the cell

Naming Grid Lines

![Justify and align-content: center](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/naming_grid_lines.png)

![Grid column names](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/grid_column_names.png)

Grid template areas
![Grid tempate areas](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/grid_template_areas.png)

You can define an empty area by having elipsis

```css
[grid container] {
  grid-template-area:
    'area1 ... ...'
    'area2 area2 ...'
    'area3 area3 area3';
}
```

## Day #4 :smile: Creating Responsive Pages with CSS FlexBox [Pluralsight](https://app.pluralsight.com/library/courses/css-flexbox-creating-responsive-pages/table-of-contents)

> understand the basics of flexbox in the pluralsight video with link above

![Flexbox overview](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/flexbox_overview.png)

![Flexbox properties](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/flex_containers.png)

[css-triks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

not much of an update but there are some useful resources here to learn about the flexbox model for css

## Day #5

not really in the mood today but will try 20 minutes
the pluralsight course is not very good, moving back to youtube
[Learn Flexbox in 15 minutes](https://www.youtube.com/watch?v=fYq5PXgSsbE)

in flexbox, `align-items: stretch` is the default config for flex items, means the items will stretch to fill the most amount of space vertically that they can

to preserve the height of the items use `align-items: flex-start`

the flex items automatically resize based on the size of the parent container or window, you can assign a property to the individual items to prevent the size from changing. Use `flex-shrink: 0` for this

use `flex-grow: 1` to tell a flex item to fill the remaining space in the contianer

what `flex-grow` actually does is divide the remaining space in the container relative to the items fles grow number.

For example

```css
[flex item-a] {
  flex-grow: 1;
}
```

```css
[flex item-b] {
  flex-grow: 2;
}
```

> item-b will grow twice as much as item-a to fill up the remaining space in the flex container

use `flex-basis` to tell the flex item where to start growing from, setting `flex-basis: 0` on both item-a and item-b then both items will starting growing from 0 pixels and item-b will be twice as large as item-a. Also lookup `flex-shrink`

`align-self: center` will ovewride the default vertical alignment (from containers `align-item` property) of the flex item, assigned by

change the order of flex items with `order: <number>` number indicating the position of the flex item in the flex container - highly advised not to use for screenreaders and pressing tab on the html

## Day #6 Styling websites with CSS [Pluralsight](https://app.pluralsight.com/library/courses/styling-websites-css/table-of-contents)

moving on from css flexbox and grid to styling websites with css on pluralsight

There are 3 different methods for adding CSS to a webpage/website; embedded, inline and external

first two modules on the pluralsight course shows how to add styles to your page and basic intro to css, can skip...

> Styling Text

changin the size of text `font-size` default is `16px`. can change the weight of the text wih `font-weight` for value, you can use values or pre-defined words (e.g normal)

can change the style of text with `font-style` e.g `italic, normal or oblique`

change the amount of white space in or around text. `line-height: 1` if your font-size is 16px then `line-height` will be 16px, for line height of 2 then it'll be 32px and so on. you can also use the static value of `line-height: 16px` if you wanted. For easy text visibility, use `line-height: 1.5`

change the space between individual characters with `letter-space: 2px`

change the alignment of text within a container with `text-align : center|left|right|justify(similar to MS word justify)`.

use `text-transform: capitalize|full-width|inherit|lowercase|none|uppercase` to alter texts

change font you use with `font-family` can use a list and webpage will apply ifs statement from left and if not installed on OS continue, that kinda thing e.g. `font-family: Verdana, Arial, sans-serif`

![Websafe fonts](https://github.com/EOjeah/100DaysOfCode/blob/main/1-wk/images/websafe_fonts.png)

> lookup font compactibility with operating systems with [CSS Font stack](https://www.cssfontstack.com/)
