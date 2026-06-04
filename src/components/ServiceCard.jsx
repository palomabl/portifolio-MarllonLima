import TiltedCard from './TiltedCard'

const BG_SRC = "src/assets/card-1.jpg"

export default function ServiceCard({ title }) {
  return (
    <div className="h-[100px] md:h-[280px] w-full">
      <TiltedCard
        imageSrc={BG_SRC}
        altText={title}
        containerHeight="100%"
        containerWidth="100%"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={8}
        scaleOnHover={1.03}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={true}
        overlayContent={
          <div
            className="flex items-center px-6 py-4 md:px-8 h-full w-full font-inter font-medium text-lg md:text-2xl tracking-wide cursor-pointer"
            style={{ color: '#b99663' }}
          >
            {title}
          </div>
        }
      />
    </div>
  )
}
