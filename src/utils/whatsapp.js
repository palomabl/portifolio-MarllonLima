const PHONE = '553399704373'

export function buildWhatsAppUrl(serviceTitle) {
  const message = `Olá, Marllon! Vi seu portfólio e tenho interesse em *${serviceTitle}*. Podemos conversar sobre um orçamento?`
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}
