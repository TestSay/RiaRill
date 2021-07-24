import React, { useState, useEffect, useRef, ReactElement } from 'react'
import firebase from 'firebase/app'
import { db, Storage, auth } from '../../initFirebase'
import { Todos } from '../Components'

function Todo(): ReactElement {
  const Productinputoption = { todo: '', image: '' }
  const [form, setForm] = useState(Productinputoption)
  const [imageToPost, setImageToPost] = useState(null)
  const inputRef = useRef(null)
  const [posts, setPosts] = useState([])
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputRef.current.value) return
    db.collection('todos')
      .add({
        todo: form.todo,
        user: auth.currentUser.email,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = Storage.ref(`posts/${form.todo}`).putString(imageToPost, 'data_url')
          removeImage()
          uploadTask.on(
            'state_change',
            null,
            (error) => console.log(error),
            () => {
              Storage.ref(`posts`)
                .child(form.todo)
                .getDownloadURL()
                .then((url) => {
                  db.collection('todos').doc(doc.id).set(
                    {
                      image: url,
                    },
                    { merge: true }
                  )
                })
            }
          )
        }
      })

    inputRef.current.value = ''
    console.log(form.todo, 'is done')
  }
  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
        }))
      )
    })
  }, [])
  const addImage = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }

  const removeImage = () => {
    setImageToPost(null)
  }

  const deleteTodo = (doc) => {
    db.collection('todos').doc(doc.id).delete()
  }

  return (
    <>
      <Todos>
        <Todos.H1>To do List</Todos.H1>
        <Todos.InfoBox>
          <Todos.Smalltext>* 할 일과 목표 스텟 경험치를 설정해주세요.</Todos.Smalltext>
          <Todos.Smalltext>* 할 일과 목표 스텟 경험치를 설정해주세요.</Todos.Smalltext>
          <Todos.Smalltext>* 할 일과 목표 스텟 경험치를 설정해주세요.</Todos.Smalltext>
        </Todos.InfoBox>
        <form onSubmit={handleSubmit}>
          <Todos.Label>Todo</Todos.Label>
          <input type="string" name="todo" onChange={handleChange} />
          {/* <Todos.Label>productName</Todos.Label>
          <Todos.Input type="string" name="productName" onChange={handleChange} placeholder={`${form.productPrize}`} />
          <Todos.Label>productPrize</Todos.Label>
          <Todos.Input type="string" name="productPrize" onChange={handleChange} /> */}
          <input type="file" name="productImage" ref={inputRef} onChange={addImage} accept="image/jpeg" />
          <button style={{ marginTop: '15px' }} type="submit">
            등록
          </button>
        </form>
        {imageToPost && (
          <div onClick={removeImage}>
            <img style={{ width: '100%', height: '100%' }} src={imageToPost} />
          </div>
        )}
        <Todos.Todobox>
          {posts.map((post) => (
            <Todos.Todowrap key={post.id}>
              <Todos.Smalltext>당신의 목표 : {post.todo}</Todos.Smalltext>
              <button onClick={deleteTodo}>삭제</button>
            </Todos.Todowrap>
          ))}
        </Todos.Todobox>
      </Todos>
    </>
  )
}

export default Todo
