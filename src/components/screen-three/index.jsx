import './index.scss'
import backgroundScreenOne from '../../assets/03.png'
import { ScreenComponent } from '../../constants'
import { useApp } from '../../contexts/AppContext'
import { ArrowButtons } from '../arrow-buttons'
import leftHand from '../../assets/left_hand.png'

export function ScreenThree() {
  const { updateScreen } = useApp()

  return (
    <div className="screen-three-wrapper" style={{ backgroundImage: `url(${backgroundScreenOne})` }}>
      <img className="left-hand" src={leftHand} />
      <ArrowButtons
        back={() => updateScreen(ScreenComponent.SCREEN_TWO)}
        beginning={() => updateScreen(ScreenComponent.SCREEN_ONE)}
        next={() => updateScreen(ScreenComponent.SCREEN_FOUR)}
      />
    </div>
  )
}