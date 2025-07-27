import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import TitleHeader from '../components/TitleHeader'
import GlowCard from '../components/GlowCard'

import { expCards } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      })
    })

    gsap.to('.timeline', {
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline', {
            scaleY: 1 - self.progress,
          })
        },
      },
    })

    gsap.utils.toArray<HTMLElement>('.expText').forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        },
      })
    })
  }, [])

  return (
    <section
      id='experience'
      className='w-full md:mt-40 mt-20 section-padding xl:px-0'
    >
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader
          title='Professional Work Experience'
          sub='💼 My career Overview'
        />
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map(
              (
                { review, title, imgPath, logoPath, date, responsibilities },
                idx
              ) => (
                <div key={`${title}-${idx + 1}`} className='exp-card-wrapper'>
                  <div className='xl:w-2/6'>
                    <GlowCard index={idx} review={review}>
                      <div>
                        <img src={imgPath} alt={title} />
                      </div>
                    </GlowCard>
                  </div>
                  <div className='xl:w-4/6'>
                    <div className='flex items-start'>
                      <div className='timeline-wrapper'>
                        <div className='timeline' />
                        <div className='gradient-line w1 h-full' />
                      </div>
                      <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                        <div className='timeline-logo'>
                          <img src={logoPath} alt='logo' />
                        </div>
                        <div>
                          <h1 className='font-semibold text-3xl'>{title}</h1>
                          <p className='my-5 text-white-50'>📅 {date}</p>
                          <p className='text-[#839cb5] italic'>
                            Responsibilities
                          </p>
                          <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                            {responsibilities.map((text, idx) => (
                              <li
                                key={`${text}-${idx + 1}`}
                                className='text-lg'
                              >
                                {text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
