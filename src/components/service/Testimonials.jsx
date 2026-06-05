export default function Testimonials({ items = [] }) {
  if (!items.length) return null

  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ backgroundColor: '#2b2118' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-3">
          <span
            className="font-inter text-[11px] tracking-[0.34em] uppercase"
            style={{ color: '#b99663' }}
          >
            Depoimentos
          </span>
          <h2
            className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl"
            style={{ color: '#f4efe7' }}
          >
            O que dizem os clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-8 p-8 md:p-10"
              style={{
                backgroundColor: 'rgba(200, 184, 158, 0.06)',
                border: '1px solid rgba(200, 184, 158, 0.1)',
              }}
            >
              <span
                className="font-sora font-bold text-5xl leading-none select-none"
                style={{ color: '#b99663', opacity: 0.6 }}
                aria-hidden
              >
                "
              </span>

              <p
                className="font-inter text-[15px] leading-loose flex-1"
                style={{ color: '#c8b89e', opacity: 0.8 }}
              >
                {item.text}
              </p>

              <div
                className="flex flex-col gap-1 pt-5"
                style={{ borderTop: '1px solid rgba(200, 184, 158, 0.12)' }}
              >
                <span
                  className="font-sora font-semibold text-sm"
                  style={{ color: '#f4efe7' }}
                >
                  {item.name}
                </span>
                <span
                  className="font-inter text-[11px] tracking-[0.2em] uppercase"
                  style={{ color: '#b99663', opacity: 0.65 }}
                >
                  {item.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
