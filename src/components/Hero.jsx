import { useState } from 'react'
import profileImg from '../assets/profile.PNG'
import backgroundImg from '../assets/background.jpg'

function ProfileAvatar() {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-[#B99663]/20 shadow-2xl flex-shrink-0 flex items-center justify-center"
      style={{ backgroundColor: '#2B2118' }}
    >
      {imgError ? (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Foto de perfil"
        >
          <circle cx="50" cy="42" r="22" fill="#C8B89E" opacity="0.4" />
          <ellipse cx="50" cy="90" rx="32" ry="22" fill="#C8B89E" opacity="0.4" />
        </svg>
      ) : (
        <img
          src={profileImg}
          alt="Marllon Lima"
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{ backgroundColor: '#1C130F' }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <img
          src={backgroundImg}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.2 }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full gap-8">
        <ProfileAvatar />

        <div className="flex flex-col gap-4">
          <h1
            className="font-sora font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
            style={{ color: '#EFE6D8' }}
          >
            Marllon Lima
          </h1>

          <p
            className="font-sora font-light text-base md:text-lg leading-relaxed tracking-wide max-w-sm md:max-w-md mx-auto"
            style={{ color: '#C8B89E', opacity: 0.75 }}
          >
            Produção audiovisual, direção criativa e marketing para marcas, eventos e conteúdos digitais.
          </p>
        </div>
      </div>
    </section>
  )
}
