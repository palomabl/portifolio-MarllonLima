import { Link, useParams } from 'react-router-dom'
import ServiceHeader from '../components/service/ServiceHeader'
import ServiceHero from '../components/service/ServiceHero'
import AboutService from '../components/service/AboutService'
import IncludedSection from '../components/service/IncludedSection'
import PortfolioGrid from '../components/service/PortfolioGrid'
import Testimonials from '../components/service/Testimonials'
import CallToAction from '../components/service/CallToAction'
import { servicesData } from '../data/servicesData'

export default function ServicePage() {
  const { serviceKey } = useParams()
  const service = servicesData[serviceKey]

  if (!service) {
    return (
      <div
        className="min-h-screen flex items-center justify-center font-inter text-sm"
        style={{ backgroundColor: '#2b2118', color: '#c8b89e' }}
      >
        Serviço não encontrado.
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#2b2118' }}>
      <ServiceHeader serviceTitle={service.title} />

      <main>
        <ServiceHero
          title={service.title}
          tagline={service.tagline}
          description={service.description}
        />

        <AboutService
          forWho={service.about.forWho}
          problem={service.about.problem}
          result={service.about.result}
        />

        <IncludedSection items={service.included} />

        <PortfolioGrid items={service.portfolio} />

        <Testimonials items={service.testimonials} />

        <CallToAction serviceTitle={service.title} />
      </main>

      <footer
        className="px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{
          backgroundColor: '#1a140f',
          borderTop: '1px solid rgba(200, 184, 158, 0.07)',
        }}
      >
        <span
          className="font-inter text-[11px] tracking-[0.2em] uppercase"
          style={{ color: '#c8b89e', opacity: 0.32 }}
        >
          © {new Date().getFullYear()} Marllon Lima
        </span>
        <Link
          to="/"
          className="font-inter text-[11px] transition-opacity hover:opacity-70"
          style={{ color: '#c8b89e', opacity: 0.28 }}
        >
          ← Voltar ao início
        </Link>
      </footer>
    </div>
  )
}
