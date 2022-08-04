---
title: Create equal height cards in CSS grid
slug: cards
date: June 4, 2022
createdAt: March 2, 2022 21:53 PM
author: Douglas Richards
issue: Creating equal height cards in CSS grid
solution: Use 1fr for grid-template-rows
thumbnail: 'v1619638137/squares_pwjy6f.jpg'
heroImage: 'v1619638137/squares_pwjy6f.jpg'
postColor: 'bg-orange-600 dark:bg-blue-600'
exampleImage: ''
imagealt: 'cards'
category: 'CSS'
---

Cards are a good way to display content in a grid. However, cards with different amounts of content, will not be equal height.

The solution is to use 1fr for grid-template-rows. Specified in the grid template, the 1fr value will automatically apply to all rows in the grid. If each card has a height of 100% of its containing element, the card will expand vertically to fill the height of the containing element (the 1fr grid row). Since the grid rows increase by the number of cards, each row will be the same height given its equal 1fr portion of the grid.
