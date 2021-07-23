import { Router } from 'next/router'
import React from 'react'
import { Container, Link, Btn, Nav } from './style/HeaderStyle'

// eslint-disable-next-line react/prop-types
export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Link = function HeaderLink({ ...restProps }) {
  return <Link {...restProps}></Link>
}

Header.Btn = function HeaderLink({ ...restProps }) {
  return <Btn {...restProps}></Btn>
}
Header.Nav = function HeaderNav({ ...restProps }) {
  return <Nav {...restProps}></Nav>
}
