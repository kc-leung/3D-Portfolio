const LogoIcon = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className='flex-none flex-center marquee-item'>
      <img src={icon} alt={name} />
    </div>
  )
}

export default LogoIcon
