import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'context/themeProvider'
import { GlobalStyle } from 'theme/GlobalStyle'
import Header from 'components/common/Header'
import Main from 'components/main/Main'
import Point from 'components/portfolio/Point'
import Lists from 'components/portfolio/Lists'
import About from 'components/about/About'
import Contact from 'components/contact/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/point" element={<Point />} />
            <Route exact path="/portfolio" element={<Lists />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}
