import React, { useEffect, useState } from 'react'
import { MainStyled } from '../../styles/SoapStyle'
import { SoapContainer } from '../containers/Soap'
import { db, auth } from '../../initFirebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import Posts from './Posts'
import { Ma } from '../Components'

// styledButton 에서 CSS 값 출력 테스트.. 스타일컴포넌트 어렵다...

function Home() {
  return (
    <>
      <Ma>
        <Posts />
      </Ma>
    </>
  )
}

export default Home
