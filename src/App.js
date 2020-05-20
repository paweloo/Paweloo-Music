import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import WhiteWrapper from "./components/MainWrapper/WhiteWrapper";
import PurpleTop from "./components/PurpleTop/PurpleTop";
import { lightTheme } from "./themes/mainTheme.js";
import GlobalStyles from "./themes/GlobalTheme.js";

export const UserContext = createContext({});
export const ColorContext = createContext({});

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [backColor, setBackColor] = useState("#A719D2");
  return (
    <UserContext.Provider value={[theme, setTheme]}>
      <ColorContext.Provider value={[backColor, setBackColor]}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <PurpleTop></PurpleTop>
          <WhiteWrapper></WhiteWrapper>
        </ThemeProvider>
      </ColorContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
