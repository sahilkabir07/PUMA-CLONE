import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import HomePage from './Components/HomePage'
import NewPage from './Components/Trending/NewPage'
import WomenPage from './Components/Women/WomenPage'
import { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'
import MenPage from './Components/Men/MenPage'
import KidsPage from './Components/Kids/KidsPage'
import MotorSportsPage from './Components/MotorSports/MotorSportsPage'
import CartPage from './Components/Cart/CartPage'
import CollaborationPage from './Components/Collaborations/CollaborationPage'
import SportsPage from './Components/Sports/SportsPage'
import { ContactsPage } from './Components/Contacts/ContactsPage'
import AboutUsPage from './Components/AboutUs/AboutUsPage'

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
          <Route path='/Men' element={<MenPage />} />
          <Route path='/Kids' element={<KidsPage />} />
          <Route path='/MotorSports' element={<MotorSportsPage />} />
          <Route path='/Cart' element={<CartPage />} />
          <Route path='/Collaborations' element={<CollaborationPage />} />
          <Route path='/Sports' element={<SportsPage />} />
          <Route path='/Contacts' element={<ContactsPage />} />
          <Route path='/AboutUs' element={<AboutUsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter >
  )
}

export default App
