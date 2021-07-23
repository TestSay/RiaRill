import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import color from '../../../../styles/theme'

export const StyledButton = styled.button`
  width:100px;
  height:50px;
  padding: 13px
  border-radius: 4px
  font-size: 25px
  line-height: 10px;
  border: 1px solid lightgray;
  color: black;
  backgroud: white;


`

export const MainStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-item: center;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
`
const big = keyframes`
  0% {
    transform: scale(1);
  }
  
  100% {
    transform: scale(2);
  }


`

export const SoapItem = styled.div`
  width: 20%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  hegiht: 100%;
  background-color: ${(props) => props.theme.color.gray0};
  justify-content: center;
  margin: 5px;
  padding: 10px;
  border-radius: 20px;

  &:hover {
    background-color: lightblue;
    cursor: grabbing;
  }
`

export const Title = styled.h1`
  font-size: 15px;
`
export const Price = styled.h2`
  font-size: 10px;
`
export const Description = styled.div``
export const Category = styled.div``
export const Image = styled.img``
export const Button = styled.button``
