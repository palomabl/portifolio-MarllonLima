import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const BG = 'src/assets/card-1.jpg'


function WorkCard({ num, title, category, year, tint, index, aspectClass }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden cursor-pointer ${aspectClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={BG}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-600"
        style={{ backgroundColor: tint, opacity: hovered ? 0.42 : 0.88 }}
      />
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span
            className="font-sora text-[11px] tracking-[0.3em] uppercase"
            style={{ color: '#c8b89e', opacity: 0.72 }}
          >
            {category}
          </span>
          <span
            className="font-sora text-[11px]"
            style={{ color: '#c8b89e', opacity: 0.38 }}
          >
            {year}
          </span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <h3
            className="font-sora font-bold text-xl md:text-2xl lg:text-3xl leading-tight"
            style={{ color: '#f4efe7' }}
          >
            {title}
          </h3>
          <span
            className="font-cormorant font-light text-6xl md:text-7xl leading-none flex-shrink-0"
            style={{ color: '#c8b89e', opacity: 0.2 }}
          >
            {num}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const titleRef = useRef(null)
  const inView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="portfolio" className="px-6 md:px-10 py-24 md:py-32" style={{ backgroundColor: '#1e1710' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div className="flex flex-col gap-3">
            <span
              className="font-sora text-[11px] tracking-[0.36em] uppercase"
              style={{ color: '#b99663' }}
            >
              Portfólio
            </span>
            <h2
              className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{ color: '#f4efe7' }}
            >
              Trabalhos{' '}
              <span className="font-cormorant font-light italic" style={{ color: '#b99663' }}>
                Recentes
              </span>
            </h2>
          </div>
          <a
            href="#contato"
            className="self-start md:self-auto font-sora text-[11px] tracking-[0.28em] uppercase transition-opacity duration-200 hover:opacity-80"
            style={{ color: '#c8b89e', opacity: 0.42 }}
          >
            Solicitar portfólio completo →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div className="md:col-span-2">
            <WorkCard {...WORKS[0]} index={0} aspectClass="aspect-[16/7] min-h-[220px]" />
          </div>
          <WorkCard {...WORKS[1]} index={1} aspectClass="aspect-[4/5] md:aspect-[3/4]" />
          <WorkCard {...WORKS[2]} index={2} aspectClass="aspect-[4/5] md:aspect-[3/4]" />
          <div className="md:col-span-2">
            <WorkCard {...WORKS[3]} index={3} aspectClass="aspect-[16/6] min-h-[200px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
