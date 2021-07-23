/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Input, Row, Colum, Label, Header, Text, Wrap, Form, Imgbox } from './style/uploadStyle'

export default function Dataset({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Dataset.Wrap = function DatasetWrap({ children, ...restProps }) {
  return <Wrap {...restProps}>{children}</Wrap>
}

Dataset.Input = function Datasetinput({ ...restProps }) {
  return <Input {...restProps}></Input>
}
Dataset.Row = function DatasetRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}
Dataset.Colum = function DatasetColum({ children, ...restProps }) {
  return <Colum {...restProps}>{children}</Colum>
}
Dataset.Label = function Datasetlabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
}
Dataset.Header = function DatasetHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>
}
Dataset.Text = function DatasetText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Dataset.Form = function DatasetForm({ ...restProps }) {
  return <Form {...restProps}></Form>
}
Dataset.Imgbox = function DatasetImgbox({ children, ...restProps }) {
  return <Imgbox {...restProps}>{children}</Imgbox>
}
