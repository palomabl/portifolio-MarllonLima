import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(26, 20, 15, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(200, 184, 158, 0.1)'
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a
            href="#"
            className="font-sora font-semibold text-[13px] tracking-[0.2em] uppercase"
            style={{ color: '#c8b89e' }}
          >
            Marllon Lima
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="font-sora text-[11px] tracking-[0.24em] uppercase transition-all duration-200 hover:opacity-100"
                style={{ color: '#c8b89e', opacity: 0.52 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="font-sora text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 hover:bg-[#c8b89e] hover:text-[#2b2118] hover:border-[#c8b89e]"
              style={{ borderColor: 'rgba(200, 184, 158, 0.4)', color: '#c8b89e' }}
            >
              Orçamento
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }}
              transition={{ duration: 0.22 }}
              className="block w-[22px] h-[1.5px]"
              style={{ backgroundColor: '#c8b89e' }}
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.18 }}
              className="block w-[15px] h-[1.5px]"
              style={{ backgroundColor: '#c8b89e' }}
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }}
              transition={{ duration: 0.22 }}
              className="block w-[22px] h-[1.5px]"
              style={{ backgroundColor: '#c8b89e' }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[65px] left-0 right-0 z-40 flex flex-col px-6 py-8 gap-6"
            style={{
              backgroundColor: 'rgba(26, 20, 15, 0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(200, 184, 158, 0.1)',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.055 }}
                className="font-sora text-sm tracking-[0.22em] uppercase"
                style={{ color: '#c8b89e', opacity: 0.82 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
