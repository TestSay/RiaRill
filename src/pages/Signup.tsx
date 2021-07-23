import React, { useState } from 'react'
import { auth, GoogleauthProvider, GuestauthProvider } from '../../initFirebase'
import firebase from 'firebase/app'
import { Form } from '../Components'
import * as ROUTES from '../constants/routes'
import { useRouter } from 'next/router'

export default function Signup() {
  const history = useRouter()
  const [firstName, setFirstName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isIncalid = firstName === '' || password === '' || emailAddress === ''

  const handleSignup = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE)
          })
      )
      .catch((error) => {
        setFirstName('')
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }
  return (
    <>
      <Form>
        <Form.Title>Sign up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Input
            placeholder="Email adress"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit type="submit"> Sign in </Form.Submit>
        </Form.Base>
      </Form>
    </>
  )
}
