import { ThemeContextProvider } from "./assets/component/Theme/ThemeContext.jsx";

import { QuizStartMenu } from "./assets/component/QuizMenu/QuizStartMenu.jsx";
import "./App.css";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <QuizStartMenu />
      </ThemeContextProvider>
    </>
  );
}

export default App;
