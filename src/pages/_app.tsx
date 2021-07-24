import type { AppProps } from 'next/app'
//
import { ThemeProvider } from 'styled-components'
// styled-component // theme 테마 적용
import { Provider } from 'mobx-react'
// mobex Provider 적용
import GlobalStyle from '../../styles/reset'
// 전체 스타일 초기화
import theme from '../../styles/theme'
// styled-component // theme 테마 적용
import todostore from '../store/Rootstore'
// store provid 해주기 위한 전체적용 store
import FooterContainer from '../containers/Footer'
import HeaderContainer from '../containers/Header'
import React, { useEffect } from 'react'
import { auth, db } from '../../initFirebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './Login'
import Loding from '../constants/Loading'
import firebase from 'firebase/app'
import Signup from './Signup'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      )
    }
  }, [user])

  if (loading) return <Loding />

  if (!user) return <Login />

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, minimal-ui, viewport-fit=cover" />
      </Head>
      <Provider {...todostore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <HeaderContainer />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
