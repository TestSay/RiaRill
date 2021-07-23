import React, { useState } from 'react'
import { auth, GoogleauthProvider, GuestauthProvider } from '../../initFirebase'
import firebase from 'firebase/app'
import { Form } from '../Components'
import * as ROUTES from '../constants/routes'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Login() {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const histroy = useRouter()
  const isInvalid = password === '' || emailAddress === ''
  const handleSignIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        //push to browsepage
        histroy.push(ROUTES.BROWSE)
      })
      .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  const signIn = () => {
    auth.signInWithPopup(GoogleauthProvider).catch(alert)
  }
  const guestsignIn = () => {
    auth.signInWithPopup(GuestauthProvider).catch(alert)
  }
  return (
    <div>
      <Form>
        <Form.Title>아랑아랄아</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base>
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
          <Form.Submit type="submit"> 로그인 </Form.Submit>
          <Form.Text>
            회원가입을 진행해주세요 <Link href="/Signup">가입하기</Link>
          </Form.Text>
        </Form.Base>
        <Form.Submit onClick={signIn}> Google login </Form.Submit>
        <Form.Submit onClick={guestsignIn}> Guest login </Form.Submit>
      </Form>
    </div>
  )
}

export default Login
