import React from 'react'
import { Container, Row, Colum, Link, Title, Text, Break } from './style/footer'

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}
Footer.Colum = function FooterColum({ children, ...restProps }) {
  return <Colum {...restProps}>{children}</Colum>
}

Footer.Link = function FooterLink({ ...restProps }) {
  return <Link {...restProps}></Link>
}
Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Footer.Break = function FooterBreak({ ...restProps }) {
  return <Break {...restProps} />
}
