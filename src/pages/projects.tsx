import {Col, Container, ProgressBar, Row} from 'react-bootstrap'
import TopNavbar from '../components/ui/navbar'
import Logo from '../components/ui/logo/logo'
import MemberName from '../components/ui/memberName'

function Projects() {
  return (
    <Container fluid className='mt-3'>
      <Row>
        <Col xs={12} className='bg-light rounded-top-3 px-0'>
          <TopNavbar />
          <div className='border-bottom border-secondary-100'></div>
          <Container className='py-4'>
            <Row>
              <Col xs={12} className='d-flex align-items-center'>
                <Logo size={32} />
                <h2 className='fs-24 fw-semibold ms-3'>Marketing Campaign</h2>
              </Col>
            </Row>
            <Row className='my-4'>
              <Col xs={12}>
                <Row className='text-secondary-400 fs-16 my-3'>
                  <Col xs={2}>Project Status:</Col>
                  <Col xs={10}>
                    <span className='tetx-start rounded-4 py-1 px-2 bg-success fs-12 text-light'>
                      Completed
                    </span>
                  </Col>
                </Row>
                <Row className='text-secondary-400 fs-16 my-3'>
                  <Col xs={2}>Progress:</Col>
                  <Col xs={10} className='d-flex align-items-center'>
                    <span className='text-secondary-500 fw-bold pe-4'>80%</span>
                    <div className='progress w-25 max-w-50 rounded-3 h-2' style={{height: '10px'}}>
                      <div
                        className='progress-bar bg-success'
                        role='progressbar'
                        style={{width: '80%'}}
                      ></div>
                    </div>
                  </Col>
                </Row>
                <Row className='d-flex justify-content-start text-secondary-400 fs-16 my-3'>
                  <Col xs={2}>Dates:</Col>
                  <Col xs={10} className='text-secondary-500  fw-bold pe-4'>
                    October 15, 2024 {`->`} December 20, 2024
                  </Col>
                </Row>
                <Row className='d-flex justify-content-start text-secondary-400 fs-16 my-3'>
                  <Col xs={2}>Projetct Manager:</Col>
                  <Col xs={10} className='text-secondary-500 fw-bold pe-4'>
                    <MemberName name='Rainder Brown' image='../assets/images/jack.png' />
                  </Col>
                </Row>
                <Row className='d-flex justify-content-start text-secondary-400 fs-16 my-3'>
                  <Col xs={2}>Projetct Team:</Col>
                  <Col xs={10} className='text-secondary-500 d-flex fw-bold pe-4'>
                    <MemberName name='Alex Johnson' image='../assets/images/jack.png' />
                    <MemberName name='Maria Lopez' image='../assets/images/jack.png' />
                    <MemberName name='James Lee' image='../assets/images/jack.png' />
                    <div></div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
