export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative px-6 md:px-12 lg:px-20 py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: '#c8b89e' }}
    >

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-9">
        <div className="flex flex-col gap-5">
          <h2
            className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ color: '#2b2118' }}
          >
            Vamos transformar sua ideia em conteúdo visual?
          </h2>
          <p
            className="font-inter text-base md:text-lg leading-relaxed max-w-lg mx-auto"
            style={{ color: '#2b2118', opacity: 0.78 }}
          >
            Entre em contato para entender o melhor formato para o seu projeto.
          </p>
        </div>

        <a
          href="https://wa.me/55"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-[11px] tracking-[0.24em] uppercase px-10 py-4 transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#2b2118', color: '#c8b89e' }}
        >
          Solicitar orçamento
        </a>

        <p
          className="font-inter text-xs"
          style={{ color: '#2b2118', opacity: 0.42 }}
        >
          Resposta em até 24h
        </p>
      </div>
    </section>
  )
}
