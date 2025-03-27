import {Container, Row} from 'react-bootstrap'

function TopNavbar() {
  return (
    <Container className='fs-18s py-3'>
      <Row>
        <div>
          <span className='pe-2'>Projects</span>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.19727 11.6209L9.0006 7.81753C9.44977 7.36836 9.44977 6.63336 9.0006 6.18419L5.19727 2.38086'
              stroke='#BEBEC8'
              stroke-width='1.5'
              stroke-miterlimit='10'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <span className='ps-2 fw-bold'>Marketing Campaign</span>
        </div>
      </Row>
    </Container>
  )
}

export default TopNavbar
