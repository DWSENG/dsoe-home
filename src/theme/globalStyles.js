import { createGlobalStyle } from 'styled-components'

// 'CSS reset' file
const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    // getting rid of scrollbars
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* firefox */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
    }
  }
`
export default GlobalStyles
