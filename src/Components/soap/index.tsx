import React from 'react'
import { Container, SoapItem, Title, Price, Description, Category, Image, Button } from './style/SoapStyle'

export default function Soap({ children, ...restProps }) {
  return <SoapItem {...restProps}> {children} </SoapItem>
}

Soap.Container = function SoapContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Soap.Title = function SoapTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Soap.Price = function SoapPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>
}

Soap.Description = function SoapDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>
}

Soap.Category = function SoapCategory({ children, ...restProps }) {
  return <Category {...restProps}>{children}</Category>
}

Soap.Image = function SoapImage({ ...restProps }) {
  return <Image {...restProps} />
}

Soap.Button = function SoapButton({ ...restProps }) {
  return <Button {...restProps} />
}
