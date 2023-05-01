import './index.scss'
import backgroundScreenOne from '../../assets/06.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'

export function ScreenSix() {
  const { updateScreen } = useApp()

  return (
    <div className="screen-six-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_FOUR)}
        beginning={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        hideNext
      />
    </div>
  )
}