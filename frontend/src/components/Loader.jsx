import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <LoaderSvg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <path d="M27 50A23 23 0 0 0 73 50A23 25 0 0 1 27 50" fill="#e38e0f" stroke="none">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
      </path>
    </LoaderSvg>
  )
}

const LoaderSvg = styled.svg`
  background: none;
  display: block;
  shape-rendering: auto;
  width:50px;
  height:50px;
`

export default Loader;