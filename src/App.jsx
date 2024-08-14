import Header1 from "./components/headers/Header1";
import Header2 from "./components/headers/header2";
import Header3 from "./components/headers/header3";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/headers/them";
import "@fontsource/open-sans";
import "animate.css";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Hero />
        <Main />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
