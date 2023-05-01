import './index.scss'
import backgroundScreenOne from '../../assets/04.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'

export function ScreenFour() {
  const { updateScreen } = useApp()

  return (
    <div className="screen-four-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_THREE)}
        beginning={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        next={() => updateScreen(ScreenComponent.SCREEN_FIVE)}
      />
    </div>
  )
}