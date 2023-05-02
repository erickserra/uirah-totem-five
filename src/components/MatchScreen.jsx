import { AnimatePresence, motion } from "framer-motion";
import { ScreenComponent } from "../constants";
import { useApp } from "../contexts/AppContext";
import { ScreenOne } from "./screen-one";
import { ScreenTwo } from "./screen-two";
import { ScreenThree } from "./screen-three";
import { ScreenFour } from "./screen-four";
import { ScreenFive } from "./screen-five";
import { ScreenSix } from "./screen-six";
import { useIdleTimer } from "react-idle-timer";

export function MatchScreen() {
  const { currentScreen, updateScreen } = useApp();

  const bg =
    currentScreen === ScreenComponent.SCREEN_ONE
      ? "#641964"
      : currentScreen === ScreenComponent.SCREEN_TWO
      ? "#641964"
      : currentScreen === ScreenComponent.SCREEN_THREE
      ? "#997299"
      : currentScreen === ScreenComponent.SCREEN_FOUR
      ? "#f3e191"
      : currentScreen === ScreenComponent.SCREEN_FIVE
      ? "#d3c6d4"
      : "#f3e191";

  const onIdle = () => {
    updateScreen(ScreenComponent.SCREEN_ONE);
  };

  useIdleTimer({
    onIdle,
    timeout: 1000 * 60 * 1,
    throttle: 500,
  });

  function GetCurrentScreen() {
    switch (currentScreen) {
      case ScreenComponent.SCREEN_ONE:
        return <ScreenOne />;
      case ScreenComponent.SCREEN_TWO:
        return <ScreenTwo />;
      case ScreenComponent.SCREEN_THREE:
        return <ScreenThree />;
      case ScreenComponent.SCREEN_FOUR:
        return <ScreenFour />;
      case ScreenComponent.SCREEN_FIVE:
        return <ScreenFive />;
      case ScreenComponent.SCREEN_SIX:
        return <ScreenSix />;
      default:
        return <ScreenOne />;
    }
  }

  return (
    <div style={{ height: "100%", backgroundColor: bg }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ height: "100%" }}
        >
          {GetCurrentScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
