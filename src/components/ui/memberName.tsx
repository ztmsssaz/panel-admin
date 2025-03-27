import {styled} from 'styled-components'

const Style = styled.span`
  .height-34 {
    height: 34px;
  }
  .max-w-content {
    max-width: fit-content;
  }
`
function MemberName({image = '', name = 'Rainder Brown'}: {image: string; name: string}) {
  return (
    <Style>
      <div className='border border-secoundery-100 max-w-content rounded-5 me-3 ps-1 pe-3 d-flex align-items-center height-34'>
        <img src={image || '../assets/images/jack.png'} alt='' width={`${26}px`} />
        <span className='fs-16 fw-bold mx-1'>{name}</span>
      </div>
    </Style>
  )
}

export default MemberName
