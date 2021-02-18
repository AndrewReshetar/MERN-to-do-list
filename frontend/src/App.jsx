import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <CornerBottom />
      <CornerTop />
      <AppWrapper />
    </div>
  );
}

const CornerBottom = styled.div`
  position:fixed;
  bottom:0;
  left: 0;
  z-index: -10;
  width:50vw;
  height:50vh;
  background-color: rgb(190,159,100);
`
const CornerTop = styled.div`
  position:fixed;
  top:0;
  right: 0;
  z-index: -10;
  width:50vw;
  height:50vh;
  background-color: rgb(190,159,100);
`

export default App;
