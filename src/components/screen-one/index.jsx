import './index.scss'
import backgroundScreenOne from '../../assets/01_bg.png'
import botaoSaibaMais from '../../assets/01_botao_saiba_mais.png'
import boxAtendimento from '../../assets/01_box_atendimento.png'
import boxConciliador from '../../assets/01_box_conciliador.png'
import boxCSOnline from '../../assets/01_box_csonline.png'
import boxSeguranca from '../../assets/01_box_seguranca.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'

export function ScreenOne() {
  const { updateScreen } = useApp()

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
          <button onClick={() => next(ScreenComponent.SCREEN_TWO)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
        <div className="box-atendimento">
          <img src={boxAtendimento} />
          <button onClick={() => next(ScreenComponent.SCREEN_FOUR)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
        <div className="box-csonline">
          <img src={boxCSOnline} />
          <button onClick={() => next(ScreenComponent.SCREEN_SIX)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
        <div className="box-seguranca">
          <img src={boxSeguranca} />
          <button onClick={() => next(ScreenComponent.SCREEN_FIVE)}>
            <img src={botaoSaibaMais} />
          </button>
        </div>
      </div>
    </div>
  )
}