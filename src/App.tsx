import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />

      <Home />

      <Footer />

      <GlobalStyle />
    </>
  )
}
