import { action, makeAutoObservable, makeObservable, observable } from 'mobx'
import { inject } from 'mobx-react'
import styled, { css } from 'styled-components'

export interface List {
  category: string
  description: string
  id: number
  image: string
  price: number
  title: string
}

const addList = (lists: List[], id?: any): List[] => lists.filter((list) => list.id != id)


//Mobx implemnetation

class Store {
  lists: List[] = []
  newList = ''
  bgColor = 'lightblue'
  widthValue = '300px'
  heightValue = '600px'
  display = 'true'

  constructor() {
    makeAutoObservable(this)
  }

  load(url: string) {
    fetch(url)
      .then((resp) => resp.json())
      .then((lts: List[]) => (store.lists = lts))
  }

  addList() {
    this.lists = addList(this.lists, this.newList)
    this.newList = ''
  }

  WebViewStyled = () => {
    this.widthValue = '100px'
    this.heightValue = '100px'
    this.bgColor = '#fefefe'
  }
  Styleddefalut = () => {
    this.widthValue = '300px'
    this.bgColor = 'lightblue'
  }

  Styledhover = () => {
    this.widthValue = '600px'
    this.bgColor = 'red'
  }
}

const store = new Store()
export default store
