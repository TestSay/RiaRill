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
    <Ma>
      <Ma.Wrap>
        {posts.map(({ id, proname, pronum }) => (
          <Ma.Card key={id}>
            <Ma.Block>
              <Ma.Colum>
                <Ma.Title>Dear</Ma.Title>
                <Ma.Title>Dear:{proname}</Ma.Title>
                <Ma.Text>{pronum}</Ma.Text>
              </Ma.Colum>
              <Ma.Image src={proname} />
            </Ma.Block>
          </Ma.Card>
        ))}
      </Ma.Wrap>
    </Ma>
  )
}

export default Posts
