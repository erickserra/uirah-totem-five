import './index.scss'
import backgroundScreenOne from '../../assets/05.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'

export function ScreenFive() {
  const { updateScreen } = useApp()

  return (
    <div className="screen-five-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_FOUR)}
        beginning={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        next={() => updateScreen(ScreenComponent.SCREEN_SIX)}
      />
    </div>
  )
}