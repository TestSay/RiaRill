/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Wrap, Card, Input, Block, Link, Text, Image, Title, Colum } from './style/masterStyle'

export default function Master({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>
}

Master.Wrap = function MasterWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>
}
Master.Colum = function MasterColum({ children }) {
  return <Colum>{children}</Colum>
}
Master.Card = function MasterCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>
}
Master.Input = function MasterInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>
}
Master.Block = function MasterBlock({ children, ...restProps }) {
  return <Block {...restProps}>{children}</Block>
}
Master.Link = function MasterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
Master.Image = function MasterImage({ src }) {
  return <Image src={src} />
}
Master.Text = function MasterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Master.Title = function MasterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
