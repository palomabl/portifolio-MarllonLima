import TiltedCard from './TiltedCard'

const CARD_H = '100px'
const BG_SRC = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'><rect width='1' height='1' fill='%232f4057'/></svg>"

export default function ServiceCard({ title }) {
  return (
    <TiltedCard
      imageSrc={BG_SRC}
      altText={title}
      containerHeight={CARD_H}
      containerWidth="100%"
      imageHeight={CARD_H}
      imageWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.03}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <div
          className="flex items-center px-8 font-inter font-medium text-xl md:text-2xl tracking-wide cursor-pointer"
          style={{ width: '100%', height: CARD_H, color: '#b99663' }}
        >
          {title}
        </div>
      }
    />
  )
}
