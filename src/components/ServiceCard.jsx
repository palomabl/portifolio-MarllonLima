export default function ServiceCard({ title }) {
  return (
    <div
      className="w-full rounded-2xl px-8 py-7 flex items-center font-inter font-medium text-xl md:text-2xl tracking-wide transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
      style={{ backgroundColor: '#2f4057', color: '#b99663' }}
    >
      {title}
    </div>
  )
}
