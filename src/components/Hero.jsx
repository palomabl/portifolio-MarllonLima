import { useState } from 'react'

function ProfileAvatar() {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-[#c8b89e]/30 shadow-2xl flex-shrink-0 flex items-center justify-center"
      style={{ backgroundColor: '#3d2e22' }}
    >
      {imgError ? (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Foto de perfil"
        >
          <circle cx="50" cy="42" r="22" fill="#c8b89e" opacity="0.45" />
          <ellipse cx="50" cy="90" rx="32" ry="22" fill="#c8b89e" opacity="0.45" />
        </svg>
      ) : (
        <img
          src="/profile.jpg"
          alt="Marllom Lima"
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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ backgroundColor: '#2b2118' }}
    >
      <div className="flex flex-col items-center text-center max-w-xl w-full gap-8">
        <ProfileAvatar />

        <div className="flex flex-col gap-4">
          <h1
            className="font-sora font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
            style={{ color: '#c8b89e' }}
          >
            Marllom Lima
          </h1>

          <p
            className="font-sora font-light text-base md:text-lg leading-relaxed tracking-wide max-w-sm md:max-w-md mx-auto"
            style={{ color: '#c8b89e', opacity: 0.8 }}
          >
            Direção criativa, captação e edição para marcas, eventos e conteúdos digitais
          </p>
        </div>
      </div>
    </section>
  )
}
