const CARD_COLORS = ['#2b2118', '#2f4057', '#3d2e22', '#1e2d3d', '#2b2118']

function PlayIcon() {
  return (
    <div
      className="w-11 h-11 rounded-full border flex items-center justify-center"
      style={{ borderColor: 'rgba(200, 184, 158, 0.4)' }}
    >
      <div
        className="ml-0.5"
        style={{
          width: 0,
          height: 0,
          borderTop: '6px solid transparent',
          borderBottom: '6px solid transparent',
          borderLeft: '10px solid rgba(200, 184, 158, 0.5)',
        }}
      />
    </div>
  )
}

export default function PortfolioGrid({ items = [] }) {
  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ backgroundColor: '#f4f1ea' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14 md:gap-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span
              className="font-inter text-[11px] tracking-[0.34em] uppercase"
              style={{ color: '#a45c40' }}
            >
              Trabalhos
            </span>
            <h2
              className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl"
              style={{ color: '#2b2118' }}
            >
              Portfólio
            </h2>
          </div>
          <span
            className="self-start md:self-auto font-inter text-xs"
            style={{ color: '#2b2118', opacity: 0.38 }}
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
                borderRadius: '4px',
              }}
            >
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)',
                }}
              />

              {/* Play icon centered */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayIcon />
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <span
                  className="font-inter text-[13px]"
                  style={{ color: '#f4efe7', opacity: 0.85 }}
                >
                  {item.label}
                </span>
                <span
                  className="font-inter text-[11px] tracking-wide"
                  style={{ color: '#c8b89e', opacity: 0.45 }}
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
