import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import LightboxProvider from './components/LightboxProvider'
import ScrollReveal from './components/ScrollReveal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import DetailPage from './pages/DetailPage'

function Layout() {
  const location = useLocation()

  return (
    <>
      <ScrollReveal />
      <Navbar key={location.pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<DetailPage group="services" />} />
        <Route path="/projects/:slug" element={<DetailPage group="projects" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LightboxProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LightboxProvider>
  )
}
