import { logoIconsList } from '../constants'
import LogoIcon from '../components/LogoIcon'

const Logo = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge'></div>
      <div className='gradient-edge'></div>
      <div className='marquee h-52'>
        <div className='marquee-box md:gap12 gap-5'>
          {logoIconsList.map(({ imgPath, name }, idx) => (
            <LogoIcon key={`${name}-${idx + 1}`} icon={imgPath} name={name} />
          ))}
          {logoIconsList.map(({ imgPath, name }, idx) => (
            <LogoIcon
              key={`${name}-${idx + 1 / 2}`}
              icon={imgPath}
              name={name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Logo
