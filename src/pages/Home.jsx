import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Highlights from '../components/Highlights.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import CustomerFeedback from '../components/CustomerFeedback.jsx'
import HomeAboutSection from '../components/HomeAboutSection.jsx'
import HomeContactSection from '../components/HomeContactSection.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar variant="dark" />
      <main>
        <Hero />
        <Highlights />
        <ServicesSection />
        <CustomerFeedback />
        <HomeAboutSection />
        <HomeContactSection />
      </main>
      <Footer />
    </div>
  )
}
