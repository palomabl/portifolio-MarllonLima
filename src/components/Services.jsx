import ServiceCard from './ServiceCard'

const services = [
  'Pacotes Mensais',
  'Eventos',
  'Pacote de Vídeos',
]

export default function Services() {
  return (
    <section
      className="px-6 py-20 md:py-28"
      style={{ backgroundColor: '#c8b89e' }}
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-10">
        <h2
          className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
          style={{ color: '#2b2118' }}
        >
          Encontre o serviço ideal para você
        </h2>

        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <ServiceCard key={service} title={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
