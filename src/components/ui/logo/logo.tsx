function Logo({size = 28}: {size: number}) {
  return (
    <div
      className='bg-primary'
      style={{width: size + 'px', height: size + 'px', borderRadius: '30%'}}
    ></div>
  )
}

export default Logo
