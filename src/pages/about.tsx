import React, { useState, useEffect, useRef } from 'react'
import firebase from 'firebase/app'
import { db, Storage, auth } from '../../initFirebase'
import KKakkContainer from '../containers/kka'
import Posts from './Posts'
import { Upload } from '../Components'

function About() {
  const Productinputoption = { productNum: '', productName: '', productPrize: '', image: '' }
  const [form, setForm] = useState(Productinputoption)
  const [imageToPost, setImageToPost] = useState(null)
  const inputRef = useRef(null)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return
    db.collection('productdata')
      .add({
        productNum: form.productName,
        productName: form.productName,
        productPrize: form.productPrize,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = Storage.ref(`posts/${form.productName}`).putString(imageToPost, 'data_url')
          removeImage()
          uploadTask.on(
            'state_change',
            null,
            (error) => console.log(error),
            () => {
              Storage.ref(`posts`)
                .child(form.productName)
                .getDownloadURL()
                .then((url) => {
                  db.collection('productdata').doc(doc.id).set(
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
  }

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

  return (
    <Upload>
      <Upload.Wrap>
        <Upload.Colum>
          <Upload.Row>
            <Upload.Form onSubmit={handleSubmit}>
              <label>productNum</label> <Upload.Input type="string" name="productNum" onChange={handleChange} />
              <label>productName</label>
              <Upload.Input
                type="string"
                name="productName"
                onChange={handleChange}
                placeholder={`${form.productPrize}`}
              />
              <label>productPrize</label>
              <Upload.Input type="string" name="productPrize" onChange={handleChange} />
              <input type="file" name="productImage" ref={inputRef} onChange={addImage} accept="image/jpeg" />
              <button style={{ marginTop: '15px' }} type="submit">
                등록
              </button>
            </Upload.Form>
            {imageToPost && (
              <Upload.Imgbox onClick={removeImage}>
                <img style={{ width: '100%', height: '100%' }} src={imageToPost} />
              </Upload.Imgbox>
            )}
          </Upload.Row>
        </Upload.Colum>
      </Upload.Wrap>
    </Upload>
  )
}

export default About