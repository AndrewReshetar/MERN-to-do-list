import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    &::-webkit-scrollbar{
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
      background-color: darkgrey;
    }
    &::-webkit-scrollbar-track{
      background: white;
    }
  }

  body{
    display: flex;
    justify-content: center;
    background-color: rgb(41,41,41);
    font-family: 'Roboto', sans-serif;
  }
`






export default GlobalStyle;