import { useState } from 'react'
import Ferrofluid from './Ferrofluid'
import profileImg from '../assets/profile.PNG'

function ProfileAvatar() {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden ring-2 ring-[#c8b89e]/30 shadow-2xl flex-shrink-0 flex items-center justify-center"
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
      style={{ backgroundColor: '#2b2118' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <Ferrofluid
          colors={['#a45c40', '#a45c40', '#a45c40']}
          speed={0.2}
          scale={1.9}
          turbulence={0.8}
          fluidity={0.12}
          rimWidth={0.22}
          sharpness={1.9}
          shimmer={1.2}
          glow={2.2}
          flowDirection="down"
          opacity={0.25}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.3}
          mouseDampening={0.2}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full gap-8">
        <ProfileAvatar />

        <div className="flex flex-col gap-4">
          <h1
            className="font-sora font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
            style={{ color: '#c8b89e' }}
          >
            Marllon Lima
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
