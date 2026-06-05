const SERVICE_META = {
  'Pacotes Mensais': {
    num: '01',
    desc: 'Produções mensais pensadas para manter sua marca presente, relevante e visualmente forte.',
  },
  Eventos: {
    num: '02',
    desc: 'Captação completa de casamentos, corporativos e celebrações, do registro ao audiovisual.',
  },
  'Pacote de Vídeos': {
    num: '03',
    desc: 'Vídeos pensados para engajar: roteiro, gravação e edição para campanhas e redes sociais.',
  },
}

export default function ServiceCard({ title }) {
  const meta = SERVICE_META[title] ?? { num: '—', desc: '' }

  return (
    <div
      className="flex flex-col justify-between p-7 md:p-8 gap-8 w-full min-h-[220px] md:min-h-[300px] bg-brand-card hover:bg-brand-hover transition-colors duration-300 cursor-pointer"
      style={{
        border: '1px solid rgba(185, 150, 99, 0.15)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <span
        className="font-sora text-[11px] tracking-[0.28em] uppercase"
        style={{ color: '#B99663' }}
      >
        {meta.num}
      </span>

      <div className="flex flex-col gap-2.5">
        <p
          className="font-sora font-light text-[13px] md:text-sm leading-relaxed"
          style={{ color: '#C8B89E', opacity: 0.72 }}
        >
          {meta.desc}
        </p>
        <h3
          className="font-sora font-semibold text-lg md:text-xl"
          style={{ color: '#EFE6D8' }}
        >
          {title}
        </h3>
      </div>
    </div>
  )
}
