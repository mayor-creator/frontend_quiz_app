import { ThemeContextProvider } from "./component/Theme/ThemeContext.jsx";

import { QuizStartMenu } from "./component/QuizMenu/QuizStartMenu.jsx";
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
