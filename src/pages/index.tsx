import React from 'react'

import Posts from './Posts'
import { Ma } from '../Components'
import Todo from '../containers/Todo'

// styledButton 에서 CSS 값 출력 테스트.. 스타일컴포넌트 어렵다...

function Home() {
  return (
    <>
      <Ma>
        <Todo />
      </Ma>
    </>
  )
}

export default Home
