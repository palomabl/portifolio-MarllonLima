import { Link } from 'react-router-dom'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

export default function ServiceHeader({ serviceTitle }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between"
      style={{
        backgroundColor: '#1C130F',
        borderBottom: '1px solid rgba(185, 150, 99, 0.1)',
      }}
    >
      <Link
        to="/"
        className="font-sora font-semibold text-[13px] tracking-[0.2em] uppercase"
        style={{ color: '#c8b89e' }}
      >
        Marllon Lima
      </Link>

      <div className="flex items-center gap-5 md:gap-7">
        <Link
          to="/"
          className="hidden sm:inline-flex items-center gap-2 font-inter text-xs tracking-wide transition-opacity hover:opacity-80"
          style={{ color: '#c8b89e', opacity: 0.52 }}
        >
          <span>←</span>
          <span>Início</span>
        </Link>
        <a
          href={serviceTitle ? buildWhatsAppUrl(serviceTitle) : '#cta'}
          target={serviceTitle ? '_blank' : undefined}
          rel={serviceTitle ? 'noopener noreferrer' : undefined}
          className="font-inter text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 transition-all duration-300 hover:opacity-90"
          style={{ backgroundColor: '#a45c40', color: '#f4efe7' }}
        >
          Orçamento
        </a>
      </div>
    </header>
  )
}
