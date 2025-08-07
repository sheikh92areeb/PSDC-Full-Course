import BlogList from "./components/BlogList"
import Faq from "./components/FAQ"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Newsletter />
      <BlogList/>
      <Footer />
    </>
  )
}

export default App
