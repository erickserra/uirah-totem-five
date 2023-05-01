import './index.scss'
import backgroundScreenOne from '../../assets/02.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'
import conciliadorGif from '../../assets/conciliador.gif'

export function ScreenTwo() {
  const { updateScreen } = useApp()

  return (
    <div className="screen-two-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <img className='conciliador-gif' src={conciliadorGif} alt="Conciliador GIF" />
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        beginning={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        next={() => updateScreen(ScreenComponent.SCREEN_THREE)}
      />
    </div>
  )
}