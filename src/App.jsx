import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import NewPage from './Components/Trending/NewPage'
import WomenPage from './Components/Women/WomenPage'
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const loadingBarRef = useRef(null);
  return (
    <BrowserRouter>
      <LoadingBar color="#f11946" ref={loadingBarRef} height={3} />
      <Header loadingBarRef={loadingBarRef} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/New" element={<NewPage />} />
          <Route path='/Women' element={<WomenPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter >
  )
}

export default App
