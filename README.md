# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Frontend quiz app solution](#frontend-mentor---frontend-quiz-app-solution)
  - [Table of contents](#table-of-contents)
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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![mobileDark]("./mobileDark.png")
![mobileLight]("./mobileLight.png")
![laptop]("./laptop.png")

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex box
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```js
export function QuizQuestion({
  className,
  type,
  children,
  isSelected,
  ...delegated
}) {
  return (
    <>
      <button
        className={`${styles.button} ${className} ${
          isSelected ? styles.selected : ""
        }`}
        {...delegated}
      >
        <div
          className={`${styles.questionTypeBox} ${
            isSelected ? styles.selectedBox : ""
          }`}
        >
          {type}
        </div>
        <div className={styles.questionBox}>{children}</div>
      </button>
    </>
  );
}
```

### Continued development
Enhance Quiz Functionality:
- Add a feature to review incorrect answers after the quiz is completed.

Testing:
- Write unit tests for all components to ensure they work as expected.
- Implement end-to-end tests to cover the entire user flow.
  
Deployment:
- Deploy the application to a cloud service like Vercel or Netlify.
- Set up continuous integration and continuous deployment (CI/CD) for automated testing and deployment.

### Useful resources

- [React Documentation](https://react.dev/) - This helped me to understanding React concept and API. I really liked how the documentation explain key concepts and provide examples.

## Author

- Frontend Mentor - [@mayor-creator](https://www.frontendmentor.io/profile/mayor-creator)