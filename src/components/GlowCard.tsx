import { useRef, type ReactNode } from 'react'

type GlowCardProps = {
  children: ReactNode
  index: number
  review: string
}

const GlowCard = ({ children, index, review }: GlowCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index]
      if (!card) return

      const rect = card.getBoundingClientRect()
      const mouseX = e.clientX - rect.left - rect.width / 2
      const mouseY = e.clientY - rect.top - rect.height / 2

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)

      angle = (angle + 360) % 360
      //@ts-ignore
      card.style.setProperty('--start', angle + 60)
    }

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el
      }}
      className='card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column'
      onMouseMove={handleMouseMove(index)}
    >
      <div className='glow' />
      <div className='flex item-center gap-1 mb-5'>
        {Array.from({ length: 5 }, (_, idx) => (
          <img className='size-5' key={idx} src='/images/star.png' alt='star' />
        ))}
      </div>
      <div className='mb-5'>
        <p className='text-white-50 text-lg'>{review}</p>
      </div>
      {children}
    </div>
  )
}

export default GlowCard
