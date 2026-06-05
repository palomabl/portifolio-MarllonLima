export default function ServiceHero({ title, tagline, description }) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center md:justify-end overflow-hidden px-6 md:px-12 lg:px-20 pb-20 md:pb-28 pt-32"
      style={{ backgroundColor: '#2b2118' }}
    >
      {/* Decorative background word */}
      <div
        className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden leading-none"
        aria-hidden
      >
        <span
          className="font-sora font-bold text-[160px] md:text-[260px] uppercase leading-none"
          style={{ color: '#c8b89e', opacity: 0.04 }}
        >
          {title.split(' ')[0]}
        </span>
      </div>

      <div className="relative z-10 max-w-5xl flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <div className="w-10 h-px" style={{ backgroundColor: '#b99663' }} />
          <span
            className="font-inter text-[11px] tracking-[0.36em] uppercase"
            style={{ color: '#b99663' }}
          >
            Serviço
          </span>
        </div>

        <h1
          className="font-sora font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none"
          style={{ color: '#f4efe7' }}
        >
          {title}
        </h1>

        <p
          className="font-sora font-light text-lg md:text-xl leading-relaxed max-w-2xl"
          style={{ color: '#c8b89e', opacity: 0.85 }}
        >
          {tagline}
        </p>

        <p
          className="font-inter text-sm md:text-[15px] leading-loose max-w-xl"
          style={{ color: '#c8b89e', opacity: 0.55 }}
        >
          {description}
        </p>

        <a
          href="#cta"
          className="self-start font-inter text-[11px] tracking-[0.22em] uppercase px-8 py-4 mt-2 transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#a45c40', color: '#f4efe7' }}
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  )
}
