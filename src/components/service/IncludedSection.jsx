export default function IncludedSection({ items = [] }) {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ backgroundColor: '#2B2118' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span
              className="font-inter text-[11px] tracking-[0.34em] uppercase"
              style={{ color: '#B99663' }}
            >
              Incluso
            </span>
            <h2
              className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#EFE6D8' }}
            >
              O que está incluso
            </h2>
          </div>
          <p
            className="font-inter text-sm max-w-xs"
            style={{ color: '#C8B89E', opacity: 0.42 }}
          >
            Tudo que você precisa para um resultado profissional completo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-7"
              style={{
                backgroundColor: 'rgba(239, 230, 216, 0.04)',
                border: '1px solid rgba(185, 150, 99, 0.14)',
              }}
            >
              <span
                className="font-inter text-[11px] tracking-[0.3em]"
                style={{ color: '#B99663' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="font-sora font-semibold text-[15px]"
                style={{ color: '#EFE6D8' }}
              >
                {item.title}
              </h3>
              <p
                className="font-inter text-sm leading-relaxed"
                style={{ color: '#C8B89E', opacity: 0.6 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
