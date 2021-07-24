import React, { useEffect, useState } from 'react'
import { db } from '../../initFirebase'
import { Ma } from '../Components'
function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('productdata').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          proname: doc.data().productName,
          pronum: doc.data().productNum,
        }))
      )
    })
  }, [])

  return (
    <>
      <div></div>
    </>
  )
}

export default Posts
