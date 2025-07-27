import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  useGSAP(() => {
    if (sectionRef.current) {
      const projects = [
        project1Ref.current,
        project2Ref.current,
        project3Ref.current,
      ]

      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
        }
      )

      projects.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: 0.3 * (idx + 1),
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
            },
          }
        )
      })
    }
  }, [])

  return (
    <div id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* left side view */}
          <div ref={project1Ref} className='first-project-wrapper'>
            <div className='image-wrapper'>
              <img src='/images/project1.png' alt='Ryde' />
            </div>
            <div className='text-content'>
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <p className='text-white-50 md:text-xl'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </p>
            </div>
          </div>
          {/* right side view */}
          <div className='project-list-wrapper overflow-hidden'>
            <div ref={project2Ref} className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src='/images/project2.png' alt='Library Management' />
              </div>
              <h2>Library Mnanagement Platfrom</h2>
            </div>
            <div ref={project3Ref} className='project'>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <img src='/images/project3.png' alt='YC Directory' />
              </div>
              <h2>YC Directory - A startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
