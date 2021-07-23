import styled from 'styled-components'

//styled-components 로 스타일을 작성해 줍니다.
// ex) export const Container = styled.div`
//  width: 300px;
//  height: 300px;
//  background-color: black;
//
//`

export const Container = styled.div`
  width: 100%;
  padding-top: 10px;
`
export const Wrap = styled.div`
  width: 100%;
`
export const Input = styled.input`
  width: 100%;
  padding-top: 10px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const Colum = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.div``
export const Header = styled.h1``
export const Text = styled.p``
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  hegith: 800px;
  justify-content: space-around;
`
export const Imgbox = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
`
