import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root{
    --body-clr: #2A2A2A;
    --primary-color: #FBA92C;
    --secondary-color: #373b69;
    --ff-primary: 'Poppins', sans-serif;
    --fw-400: 500;
    --fw-700: 600;

    --fs-300: 0.6875rem;
    --fs-400: 0.8125rem;
    --fs-500: 1.25rem;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}


body{
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: var(--ff-primary);
    font-weight: var(--fw-400);
    background-color: var(--body-clr);
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

h1,
h2,
h3 {
  font-weight: var(--fw-700);
}

/* utilities */
.flex {
  display: flex;
  gap: var(--gap, 1rem);
}

`
interface ColProps{
    size: number
}

export const Grid = styled.div`
    
`
;
