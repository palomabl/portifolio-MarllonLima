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
      className="flex flex-col justify-between p-7 md:p-8 gap-8 w-full min-h-[220px] md:min-h-[300px] transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: '#F4F1EA',
        border: '1px solid rgba(43, 33, 24, 0.08)',
        boxShadow: '0 4px 24px rgba(43, 33, 24, 0.06)',
      }}
    >
      <span
        className="font-sora text-[11px] tracking-[0.28em] uppercase"
        style={{ color: '#b99663' }}
      >
        {meta.num}
      </span>

      <div className="flex flex-col gap-2.5">
        <p
          className="font-sora font-light text-[13px] md:text-sm leading-relaxed"
          style={{ color: '#5c4635', opacity: 0.72 }}
        >
          {meta.desc}
        </p>
        <h3
          className="font-sora font-semibold text-lg md:text-xl"
          style={{ color: '#2b2118' }}
        >
          {title}
        </h3>
      </div>
    </div>
  )
}
