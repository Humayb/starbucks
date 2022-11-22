import Header from './pages/header/header.jsx'
import HeroSection from './pages/heroSection/heroSection.jsx'
import AppSection from './pages/appSection/appSection.jsx'
import Produce from './pages/produce/produce.jsx'
import Footer from './pages/footer/footer.jsx'

import './App.css'



export default function Main(){
  return(
    <main>
      <Header />
      <HeroSection />
      <AppSection />
      <Produce />
      <Footer />
    </main>
  )

}




