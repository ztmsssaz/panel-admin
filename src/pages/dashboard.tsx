import {Col, Container, Row} from 'react-bootstrap'
import TopNavbar from '../components/ui/navbar'

function Dashboard() {
  return (
    <Container className=''>
      <Row>
        <Col xs={12}>
          <TopNavbar />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
