const CARD_COLORS = ['#241A14', '#2B2118', '#3A2A22', '#1C130F', '#241A14']

function PlayIcon() {
  return (
    <div
      className="w-11 h-11 rounded-full border flex items-center justify-center"
      style={{ borderColor: 'rgba(185, 150, 99, 0.45)' }}
    >
      <div
        className="ml-0.5"
        style={{
          width: 0,
          height: 0,
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          borderLeft: '10px solid rgba(185, 150, 99, 0.6)',
        }}
      />
    </div>
  )
}

export default function PortfolioGrid({ items = [] }) {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ backgroundColor: '#241A14' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14 md:gap-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span
              className="font-inter text-[11px] tracking-[0.34em] uppercase"
              style={{ color: '#B99663' }}
            >
              Trabalhos
            </span>
            <h2
              className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#EFE6D8' }}
            >
              Portfólio
            </h2>
          </div>
          <span
            className="self-start md:self-auto font-inter text-xs"
            style={{ color: '#C8B89E', opacity: 0.35 }}
          >
            Projetos reais em breve
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${item.wide ? 'md:col-span-2' : ''}`}
              style={{
                backgroundColor: CARD_COLORS[i % CARD_COLORS.length],
                aspectRatio: item.wide ? '16/9' : '4/5',
                borderRadius: '3px',
                border: '1px solid rgba(185, 150, 99, 0.08)',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 55%)',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayIcon />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <span
                  className="font-inter text-[13px]"
                  style={{ color: '#EFE6D8', opacity: 0.82 }}
                >
                  {item.label}
                </span>
                <span
                  className="font-inter text-[11px] tracking-wide"
                  style={{ color: '#C8B89E', opacity: 0.42 }}
                >
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
