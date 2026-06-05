const LABELS = [
  { num: '01', heading: 'Para quem é' },
  { num: '02', heading: 'O que resolve' },
  { num: '03', heading: 'O resultado' },
]

export default function AboutService({ forWho, problem, result }) {
  const contents = [forWho, problem, result]

  return (
    <section
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32"
      style={{ backgroundColor: '#241A14' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-3">
          <span
            className="font-inter text-[11px] tracking-[0.34em] uppercase"
            style={{ color: '#C8B89E', opacity: 0.5 }}
          >
            Sobre o serviço
          </span>
          <h2
            className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl"
            style={{ color: '#EFE6D8' }}
          >
            O que você precisa saber
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {LABELS.map(({ num, heading }, i) => (
            <div key={i} className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <span
                  className="font-inter text-[11px] tracking-[0.28em]"
                  style={{ color: '#B99663' }}
                >
                  {num}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: '#EFE6D8', opacity: 0.08 }} />
              </div>
              <h3
                className="font-sora font-semibold text-base"
                style={{ color: '#EFE6D8' }}
              >
                {heading}
              </h3>
              <p
                className="font-inter text-sm leading-loose"
                style={{ color: '#C8B89E', opacity: 0.7 }}
              >
                {contents[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
