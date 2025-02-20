import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import PricingSection from './Components/PricingSection'
import ReviewSection from './Components/TestimonialSection'
import ServicesSection from './Components/ServicesSection'
import TripSection from './Components/TripSection'
import ContactUsSection from './Components/ContactUsSection'


function App() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <TripSection/>
      <ServicesSection/>
      <PricingSection/>
      <ReviewSection/>
      <ContactUsSection/>
    </>
  )
}

export default App

