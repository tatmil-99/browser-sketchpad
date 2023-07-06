# browser-sketchpad

Live preview: https://tatmil-99.github.io/browser-sketchpad/

## Purpose and Summary

This project was built with the intention of practicing DOM manipulation and event handling. It features a sketchpad area which dynamically fills in areas of the grid where the user has clicked and moved their mouse. There is also a button which allows the user to prompt for a grid change. Behind the scenes there is a function which validates the input and ensures the user does not overwhelm the browser by inputing numbers that are too big. If the user cancels the modal, then the sketchpad reverts to a default grid of 16x16.

## Nice to Haves

In the future I would like to add functionality that updates the grid when the viewport changes.
Currently, if you change the viewport you have to reload the page to enable new values from the DOM to be applied and the grid to change sizes to fit properly in the new vieport. It is responsive, but the creation of the grid relies on a script which relies on dimension data from the DOM -- a change in viewport without a reload will create a grid with inaccurate dimensions, thus improperly displaying the sketchpad (sketchpad should be a perfect 1:1 square).

In addition, I would like to add functionality that saves the users previous prompts so that in the event they cancel the prompt modal, the grid defaults to their previous value, not 16x16 (the default). If I did not default to a specific value, then a cancelled modal returns null, which coerces to 0. This will create an empty sketchpad, which may be a confusing interaction for the user.

Lastly, I want to add "mobile haptics". It semi-works on a mobile device, but you can't really draw. You can fill in grids, but not in a smooth, drawing motion. It currently works best with a mouse or laptop touchpads.

## Features

- Dynamic web page updates
- Manipulation and storage of program data
- Event handlers
- DOM manipulation
- Responsiveness with Flexbox

## Tools

- JavaScript
- DOM API
- HTML
- CSS
- Git
- Github
