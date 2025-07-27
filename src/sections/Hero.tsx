import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { words } from '../constants'
import Button from '../components/Button'
import HeroExperience from '../components/Models/Hero/HeroExperience'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.hero-text h1',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.inOut',
      }
    )
  })

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <img src='/images/bg.png' alt='background' />
      </div>
      <div className='hero-layout'>
        {/* left side view */}
        <header className='flex flex-col jsutify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                Shaping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, idx) => (
                      <span
                        key={`${word.text}-${idx}`}
                        className='flex items-center md:gap-3 gap-1 pb-2'
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button
              id='button'
              className='md:w-80 md:h-16 w-60 h-12'
              text='See my work'
            />
          </div>
        </header>
        {/* right side view */}
        <figure>
          <div className='hero-3d-layout'>
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  )
}

export default Hero
