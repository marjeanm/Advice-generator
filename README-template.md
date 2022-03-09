# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- click on the dice button on the bottom of the screen and a quote will populate in the box.

### Screenshot

![](./images/projectfend.JPG)

### Links

- Solution URL: [https://github.com/marjeanm/Advice-generator](https://github.com/marjeanm/Advice-generator)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I learned you have to set the width of the paragraph element to a specific px. Or when you generate the quote the added space will mess up css.
Also, you can set flexbox on the body to make sure everything is either in rows or columns to your specifications with out alot of guess work.
Also, i used Axios (npm) for the api fetch. I feel it works better for me, and javascript promises. it is a library that is good to work with and get familar with for client side node.js work.

This code centers the container, and makes sure the elements are stacked.

```css
body {
  background-color: hsl(218, 23%, 16%);
  font-family: 'Manrope';
  font-size: 18px;
  height: 94vh;
  display: flex;
  flex-direction: column;
}
```

This Css below sets up the quote body and sets a width on the quote body to stay put and not expand.

```css
#quote {
  font-weight: 800;
  margin: 0;
  text-align: center;
  width: 295px;
}
```

This is the axios code that i used to pull the api request. I like it becuase it is short and sweet,and not alot of lines of code.

```js
const digit = document.getElementById('digits');
const quote = document.getElementById('quote');
const generate = document.querySelector('.btn');
const adviceQuote = async () => {
  const res = await axios.get('https://api.adviceslip.com/advice');
  try {
    digit.textContent = res.data.slip.id;
    quote.textContent = `"${res.data.slip.advice}"`;
  } catch (e) {
    console.log('error', e);
  }
};
generate.addEventListener('click', adviceQuote);
```

### Continued development

Plans i have are to add a background changer, and a pop up greeting name and date.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/) - This is a great source for people starting out. Also, helps with looking up solutions and reworking your code.

## Author

- Website - [Marjean Mayo-Baker](https://www.your-site.com)
- Frontend Mentor - [@marjeanm](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@Matty_Mayonaise](https://www.twitter.com/Matty_Mayonaise)
