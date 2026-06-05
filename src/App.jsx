import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Services from './components/Services'
import ServicePage from './pages/ServicePage'

function Home() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos/:serviceKey" element={<ServicePage />} />
    </Routes>
  )
}
