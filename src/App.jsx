import './App.css'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import SecondBanner from './Components/SecondBanner'
import SliderCards from './Components/SliderCards'
import SoftrideBanner from './Components/SoftrideBanner'
import Squidgame from './Components/Squidgame'
import ThirdBanner from './Components/ThirdBanner'
import TravelBanner from './Components/TravelBanner'
import WinterBanner from './Components/winterBanner'


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <SecondBanner />
      <ThirdBanner />
      <WinterBanner />
      <TravelBanner />
      <Squidgame />
      <SoftrideBanner />
      <SliderCards />
      <Footer />
    </>
  )
}

export default App
