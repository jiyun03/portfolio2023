import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./theme/themeProvider";
import { GlobalStyle } from "./theme/GlobalStyle";
import Lists from "./components/portfolio/Lists";
import Visual from "./components/main/Visual";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route exact path="/" element={<Visual />} />
            <Route exact path="/portfolio" element={<Lists />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
