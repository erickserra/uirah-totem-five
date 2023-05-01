import './index.scss'
import backgroundScreenOne from '../../assets/01_bg.png'
import botaoSaibaMais from '../../assets/01_botao_saiba_mais.png'
import boxAtendimento from '../../assets/01_box_atendimento.png'
import boxConciliador from '../../assets/01_box_conciliador.png'
import boxCSOnline from '../../assets/01_box_csonline.png'
import boxSeguranca from '../../assets/01_box_seguranca.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { useRef, useEffect } from 'react'
import 'animate.css';

export function ScreenOne() {
  const { updateScreen } = useApp()
  const buttonOneRef = useRef()
  const buttonTwoRef = useRef()
  const buttonThreeRef = useRef()
  const buttonFourRef = useRef()

  function handleButtonOne() {
    buttonOneRef.current.classList.add('animate__animated', 'animate__backInLeft');
    buttonOneRef.current.addEventListener('animationend', () => {
      buttonOneRef.current.classList.remove('animate__animated', 'animate__backInLeft')
      buttonOneRef.current.classList.add('animate__animated', 'animate__tada', 'animate__infinite');
    });
  }

  function handleButtonTwo() {
    buttonTwoRef.current.classList.add('animate__animated', 'animate__backInRight', 'animate__delay-1s');
    buttonTwoRef.current.addEventListener('animationend', () => {
      buttonTwoRef.current.classList.remove('animate__animated', 'animate__backInRight', 'animate__delay-1s')
      buttonTwoRef.current.classList.add('animate__animated', 'animate__tada', 'animate__infinite');
    });
  }

  function handleButtonThree() {
    buttonThreeRef.current.classList.add('animate__animated', 'animate__backInLeft', 'animate__delay-2s');
    buttonThreeRef.current.addEventListener('animationend', () => {
      buttonThreeRef.current.classList.remove('animate__animated', 'animate__backInLeft', 'animate__delay-2s')
      buttonThreeRef.current.classList.add('animate__animated', 'animate__tada', 'animate__infinite');
    });
  }

  function handleButtonFour() {
    buttonFourRef.current.classList.add('animate__animated', 'animate__backInRight', 'animate__delay-3s');
    buttonFourRef.current.addEventListener('animationend', () => {
      buttonFourRef.current.classList.remove('animate__animated', 'animate__backInRight', 'animate__delay-3s')
      buttonFourRef.current.classList.add('animate__animated', 'animate__tada', 'animate__infinite');
    });
  }

  useEffect(() => {
    handleButtonOne()
    handleButtonTwo();
    handleButtonThree()
    handleButtonFour()
  }, [])


  function next(screen) {
    fetch('https://api4.convencaoraizen2023.com.br/checkintotem/', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 20,
      })
    });
    updateScreen(screen)
  }

  return (
    <div className="screen-one-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <div className="botoes-wrapper">
        <div className="box-conciliador">
          <img src={boxConciliador} />
          <button ref={buttonOneRef} onClick={() => next(ScreenComponent.SCREEN_TWO)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
        <div className="box-atendimento">
          <img src={boxAtendimento} />
          <button ref={buttonTwoRef} onClick={() => next(ScreenComponent.SCREEN_FOUR)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
        <div className="box-csonline">
          <img src={boxCSOnline} />
          <button ref={buttonThreeRef} onClick={() => next(ScreenComponent.SCREEN_SIX)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
        <div className="box-seguranca">
          <img src={boxSeguranca} />
          <button ref={buttonFourRef} onClick={() => next(ScreenComponent.SCREEN_FIVE)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
      </div>
    </div>
  )
}