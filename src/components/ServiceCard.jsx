import TiltedCard from './TiltedCard'

const BG_SRC = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect width='1' height='1' fill='%232f4057'/></svg>"

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
            className="flex items-center px-6 md:px-8 h-full w-full font-inter font-medium text-lg md:text-2xl tracking-wide cursor-pointer"
            style={{ color: '#b99663' }}
          >
            {title}
          </div>
        }
      />
    </div>
  )
}
