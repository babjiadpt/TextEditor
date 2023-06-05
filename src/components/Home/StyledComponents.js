import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  height: 500px;
  width: 60%;
  background-color: #1b1c22;
  display: flex;
  align-items: center;
`
export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #f8fafc;
  font-weight: 600;
`
export const Image = styled.img`
  width: 60%;
  height: 70%;
`

export const TextContainer = styled.div`
  background-color: #25262c;
  height: 95%;
  width: 48%;
  border: 0.5px solid #334155;
  border-radius: 10px;
  padding: 10px;
`

export const ButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 0px;
`
export const ButtonItem = styled.li`
  list-style-type: none;
`
export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.outline ? '#faff00' : '#f1f5f9')};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

export const Hr = styled.hr`
  border: 0.1px solid #334155;
  width: 100%;
`

export const TextAreaInput = styled.textarea`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f8fafc;
  background-color: transparent;
  margin-top: 10px;
  border: none;
  outline: none;
  font-weight: ${props => (props.bold ? '600' : '')};
  font-style: ${props => (props.italic ? 'italic' : '')};
  text-decoration: ${props => (props.underline ? 'underline' : '')};
`

export default styled
