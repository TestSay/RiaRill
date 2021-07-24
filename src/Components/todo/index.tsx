import React, { MutableRefObject, ReactElement, useRef, forwardRef, ForwardedRef } from 'react'
import { Container, InfoBox, Input, Todobox, Label, H1, Smalltext, Todowrap } from './todostyle'
import { db, Storage, auth } from '../../../initFirebase'

interface Props {
  children: any
  restProps?: ReactElement
}

export default function Todos({ children }: any): ReactElement {
  return <Container>{children}</Container>
}

Todos.InfoBox = function TodosInfoBox({ children, ...restProps }: Props): ReactElement {
  return <InfoBox {...restProps}>{children}</InfoBox>
}

Todos.Input = function TodosInput({
  name,
  onChange,
  type,
  ...restProps
}: {
  restProps?: ReactElement
  type: string | File
  name?: string
  onChange?: (e: any) => void
  placeholder?: string
  ref?: any
}) {
  return <Input {...restProps} name={name} />
}

Todos.Todobox = function TodosTodobox({ children, ...restProps }: Props): ReactElement {
  return <Todobox {...restProps}>{children}</Todobox>
}
Todos.Label = function TodosLabel({ children, ...restProps }: Props): ReactElement {
  return <Label {...restProps}>{children}</Label>
}
// font
Todos.H1 = function TodosH1({ children, ...restProps }: Props): ReactElement {
  return <H1 {...restProps}>{children}</H1>
}
Todos.Smalltext = function TodosSmalltext({ children, ...restProps }: Props): ReactElement {
  return <Smalltext {...restProps}>{children}</Smalltext>
}
Todos.Todowrap = function TodosTodowrap({ children, ...restProps }: Props): ReactElement {
  return <Todowrap {...restProps}>{children}</Todowrap>
}
