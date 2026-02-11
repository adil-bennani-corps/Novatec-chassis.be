import Hero from '../components/Hero'
import ServicesDetailles from '../components/ServicesDetailles'
import Benefits from '../components/Benefits'
import Quincailleries from '../components/Quincailleries'
import EmergencyCTA from '../components/EmergencyCTA'
import Marques from '../components/Marques'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <>
      {/* Section Hero */}
      <Hero />
      
      {/* Section Services Détaillés (Texte + Images) */}
      <ServicesDetailles />
      
      {/* Section Avantages */}
      <Benefits />
      
      {/* Section Quincailleries (6 types) */}
      <Quincailleries />
      
      {/* CTA Intermédiaire (Dépannage Urgent) */}
      <EmergencyCTA />
      
      {/* Section Marques (6 marques) */}
      <Marques />
      
      {/* Section Témoignages */}
      <Testimonials />
      
      {/* Section FAQ */}
      <FAQ />
      
      {/* Formulaire de Contact */}
      <ContactForm />
    </>
  )
}

export default Home
