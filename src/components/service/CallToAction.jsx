import { buildWhatsAppUrl } from '../../utils/whatsapp'

export default function CallToAction({ serviceTitle }) {
  return (
    <section
      id="cta"
      className="relative px-6 md:px-12 lg:px-20 py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#241A14' }}
    >

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-9">
        <div className="flex flex-col gap-5">
          <h2
            className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: '#EFE6D8' }}
          >
            Vamos transformar sua ideia em conteúdo visual?
          </h2>
          <p
            className="font-inter text-base md:text-lg leading-relaxed max-w-lg mx-auto"
            style={{ color: '#C8B89E', opacity: 0.72 }}
          >
            Entre em contato para entender o melhor formato para o seu projeto.
          </p>
        </div>

        <a
          href={buildWhatsAppUrl(serviceTitle)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-[11px] tracking-[0.24em] uppercase px-10 py-4 transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#B99663', color: '#1C130F' }}
        >
          Solicitar orçamento
        </a>

        <p
          className="font-inter text-xs"
          style={{ color: '#C8B89E', opacity: 0.38 }}
        >
          Resposta em até 24h
        </p>
      </div>
    </section>
  )
}
