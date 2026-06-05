import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'
import SplitText from './SplitText'
import { serviceSlugByTitle } from '../data/servicesData'

const services = [
  'Pacotes Mensais',
  'Eventos',
  'Pacote de Vídeos',
]

export default function Services() {
  return (
    <section
      id="servicos"
      className="px-6 py-20 md:py-28"
      style={{ backgroundColor: '#241A14' }}
    >
      <div className="max-w-2xl md:max-w-6xl mx-auto flex flex-col gap-10">
        <SplitText
          text="Encontre o serviço ideal para você"
          tag="h2"
          className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-[#efe6d8]"
          delay={40}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 36 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-60px"
          textAlign="left"
        />

        <div className="flex flex-col gap-3 md:flex-row md:gap-5 md:items-stretch">
          {services.map((service) => (
            <Link
              key={service}
              to={`/servicos/${serviceSlugByTitle[service]}`}
              className="w-full md:flex-1 min-w-0 block no-underline"
            >
              <ServiceCard title={service} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
