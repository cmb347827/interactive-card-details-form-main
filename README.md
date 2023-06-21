# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot
 
 [screenshot.png](https://postimg.cc/YvLTdFmd)

### Links

- Solution URL: [Github](https://github.com/cmb347827/interactive-card-details-form-main)
- Live Site URL: [Live Github](https://cmb347827.github.io/interactive-card-details-form-main/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap
- Sass/SCSS
- Javascript
- Mobile-first workflow

### What I learned

- accessbility has been the fussies to deal with, as I'm still learning and most seems rather vague to me.
- I wanted to crop the user input ,for month and year so they can't add more than two values (see stackoverflow link)
- I learned I needed to use aria-describedby to connect the user-input error message to the input field (see stackoverflow link) and the use of aria-live="polite"
- I had to figure out how the user would be able to enter a space when typing input in an input field (see stackoverflow link)
- The use of gradient borders was tricky. This has come up before but I had forgotten.
- I struggled with the background image not working correctly as I applied it to the outer section elements and then the figure element background would be white. 
  So I had to apply it to figure as well, but then it would not work correctly as it obviously would not align correctly.
  I finally figured out by making the background color of the figure element opaque and applying cover it would work.
- The next thing I had to figure out was how to rotate the background image as the colors were showing up upside down
  with help of a sitepoint article it worked by use of :before and css transform (see link).

### Continued development

- Daily tutorials and projects in HTML5, CSS3, Javascript, Bootstrap, Sass/SCSS. For now, in time I will go re-learn React ect.

### Useful resources

- [html maxattribute not working](https://stackoverflow.com/questions/9555143/html-maxlength-attribute-not-working-on-chrome-and-safari) - I learned how to use slice to limit user input.
- [Accessible forms](https://stackoverflow.com/questions/71615554/how-to-properly-handle-inline-error-messages-while-the-user-is-typing-aria)  - The use of `aria-live="polite"` where I used role='alert' first
- [User input space bars not working](https://stackoverflow.com/questions/1987439/space-bar-not-working-in-form-fields) - I learned the use of keycode 32 for checking for space bar
- [CSS gradient borders](https://codyhouse.co/nuggets/css-gradient-borders) 
- [How to apply CSS transform to background images](https://www.sitepoint.com/css3-transform-background-image/) 

## Author

- Website - [One of my latest codepens](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [@cmb347827](https://www.frontendmentor.io/profile/cmb347827)




