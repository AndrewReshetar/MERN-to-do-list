import React from 'react'
import styled from 'styled-components';

function Alert({ children }) {
  return (
    <AlertStyle>
      {children}
    </AlertStyle>
  )
}

const AlertStyle = styled.div`
  font-size: 1.5rem;
  color: #fc871a;
`

export default Alert
