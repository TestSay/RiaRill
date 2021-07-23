import React from 'react'
import { Header } from '../Components'
import { auth, db } from '../../initFirebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import * as EmailValidator from 'email-validator'
export default function HeaderContainer() {
  const [user] = useAuthState(auth)
  const createChat = () => {
    const input = prompt()
    if (!input) return null
    if (EmailValidator.validate(input)) {
      //we nee add the chat in to the DB 'chat' collection
    }
  }
  return (
    <Header>
      <Header.Link href="/">😀</Header.Link>
      <Header.Link href="/about">📝</Header.Link>
      <Header.Link href="/shop">📬</Header.Link>
      <Header.Link href="/kka">📭</Header.Link>
      {/* <Header.Btn onClick={() => auth.signOut()}>chatCreate</Header.Btn> */}

      <Header.Btn onClick={() => auth.signOut()}>Logout</Header.Btn>
    </Header>
  )
}
