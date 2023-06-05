import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  ResponsiveContainer,
  ImageContainer,
  Heading,
  Image,
  TextContainer,
  ButtonsContainer,
  ButtonItem,
  Button,
  Hr,
  TextAreaInput,
} from './StyledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickButtonBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickButtonItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickButtonUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <ImageContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <ButtonsContainer>
              <ButtonItem>
                <Button
                  type="button"
                  outline={isBold}
                  onClick={() => this.onClickButtonBold()}
                  data-testid="bold"
                >
                  <VscBold size={25} />
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button
                  type="button"
                  outline={isItalic}
                  onClick={() => this.onClickButtonItalic()}
                  data-testid="italic"
                >
                  <GoItalic size={25} />
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button
                  type="button"
                  outline={isUnderline}
                  onClick={() => this.onClickButtonUnderline()}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ButtonItem>
            </ButtonsContainer>
            <Hr />
            <TextAreaInput
              type="text"
              rows="27"
              cols="48"
              bold={isBold}
              italic={isItalic}
              underline={isUnderline}
            />
          </TextContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default Home
