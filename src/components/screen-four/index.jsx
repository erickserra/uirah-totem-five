import './index.scss'
import backgroundScreenOne from '../../assets/04.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'
import chatIconImage from '../../assets/chatbot_icon.png'
import { useEffect, useRef } from 'react'

export function ScreenFour() {
  const { updateScreen } = useApp()
  const chatIconRef = useRef()

  function handleImageAnimation() {
    chatIconRef.current.classList.add('animate__animated', 'animate__backInRight');
    chatIconRef.current.addEventListener('animationend', () => {
      chatIconRef.current.classList.remove('animate__animated', 'animate__backInRight')
      chatIconRef.current.classList.add('animate__animated', 'animate__tada', 'animate__infinite');
    });
  }


  useEffect(() => {
    handleImageAnimation()
  }, [])


  return (
    <div className="screen-four-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <img ref={chatIconRef} className="chat-icon" src={chatIconImage} alt="Chat Icon" />
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_THREE)}
        beginning={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        next={() => updateScreen(ScreenComponent.SCREEN_FIVE)}
      />
    </div>
  )
}