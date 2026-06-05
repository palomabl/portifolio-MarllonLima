import ServiceCard from './ServiceCard'
import SplitText from './SplitText'

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
      style={{ backgroundColor: '#c8b89e' }}
    >
      <div className="max-w-2xl md:max-w-6xl mx-auto flex flex-col gap-10">
        <SplitText
          text="Encontre o serviço ideal para você"
          tag="h2"
          className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-brand-dark"
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
            <div key={service} className="w-full md:flex-1 min-w-0 cursor-pointer">
              <ServiceCard title={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
