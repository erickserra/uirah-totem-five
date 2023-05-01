import "./App.css";
import { MatchScreen } from "./components/MatchScreen";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <MatchScreen />
    </AppProvider>
  );
}

export default App;
