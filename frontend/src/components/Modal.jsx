import React from 'react'
import styled from 'styled-components';
import ReactDOM from 'react-dom';

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <Background></Background>
      <ModalStyle>
        <i className="fas fa-times cross" onClick={onClose}></i>
        {children}
      </ModalStyle>
    </>,
    document.querySelector('#portal')
  )
}

const ModalStyle = styled.div`
  position: fixed;
  width: 50vw;
  height: 30vh;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: #0e0e0e;
  color: white;
  padding: 50px 5px;
  z-index: 1000;
  form{
    button{
      background-color: transparent;
    }
    input{
      width: 90%;
      margin-top: 10%;
      margin-left:5%;
      padding-bottom: 2vh;
      background-color: transparent;
      outline: none;
      border:none;
      color: #afaeae;
      border-bottom: 1px solid #777777;
      font-size: 1.4rem;
      &:focus{
        font-size: 1.4rem;
        outline: none;
        border: none;
        border-bottom: 1px solid #777777;
        color: #afaeae;
        font-weight: normal;
      }
    }
    i{
      cursor: pointer;
      transition: all 0.5s ease;
      color: #a9b40f;
      &:hover{
        color: #d4df40;
      }
    }
  }
  i.cross{
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 2rem;
      cursor: pointer;
      opacity: 0.1;
  }

  //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80vw;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    width: 96vw;
  }
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.9);
  z-index: 1000;
`

export default Modal
