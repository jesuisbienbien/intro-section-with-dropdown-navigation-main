# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![screenshot](images/screenshot.png)

### Links

- Solution URL: [View codes](https://github.com/jesuisbienbien/intro-section-with-dropdown-navigation-main)
- Live Site URL: [View Live site](https://jesuisbienbien.github.io/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

**_onClick function_**

```html
<div
  class="company nav-item"
  onClick="toggleDropdown('company-expanded-list');"
>
  <p>Company</p>
  <div class="arrow-img"></div>
</div>
```

**_overlay effect over the entire page except sidebar_**

```css
.overlay {
  transition: all 0.2s ease-out;
}

.overlay.open {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in;
}
```

**_features items dropdown_**

```css
.features-expanded-list {
  // display: inline;
  overflow-y: hidden;
  position: absolute;
  z-index: 1;
  top: 3rem;
  left: 0;
  border-radius: 0.5rem;
  background-color: var(--almost-white);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 0;
}
.features-expanded-list.open {
  height: 200px;
  padding: 1.5rem 1.5rem 0 1.5rem;
}
```

### Continued development

### Useful resources

- [Youtube tutorial](https://www.youtube.com/watch?v=wpGNFGqNfdU) - This tutorial helped me learn how to do the slide side menu on mobile.
- [Geeks for Geeks](https://www.geeksforgeeks.org/javascript-pass-string-parameter-in-onclick-function/) - This article helped me learn how to pass a string parameter in onClick function.

## Author

- Github - [Nguyen Nguyen](https://github.com/jesuisbienbien)
- Frontend Mentor - [@jesuisbienbien](https://www.frontendmentor.io/profile/jesuisbienbien)

## Acknowledgments
