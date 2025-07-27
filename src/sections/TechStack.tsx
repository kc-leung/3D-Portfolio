import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import TitleHeader from '../components/TitleHeader'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { techStackIcons } from '../constants'
// for regular image if can't find 3d models
// import { techStackImgs } from '../constants'

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      }
    )
  })

  return (
    <div id='skills' className='flex-center section-padding'>
      <div>
        <TitleHeader
          title='My Tech Stack'
          sub='🤝 The skills I bring to the Table'
        />
        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'
            >
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <TechIcon model={icon} />
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
          {/* {techStackImgs.map((icon) => (  // for regular image if can't find 3d models
            <div
              key={icon.name}
              className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'
            >
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  <img src={icon.imgPath} alt={icon.name} />
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default TechStack
