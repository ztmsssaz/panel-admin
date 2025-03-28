import {Col, Container, Row} from 'react-bootstrap'
import TopNavbar from '../components/ui/navbar'
import ChatBox from '../components/messages/chatbox'

function Messages() {
  return (
    <Container fluid className='mt-3'>
      <Row>
        <Col xs={12} className='bg-white rounded-top-3 px-0'>
          <TopNavbar road={'messages'} />
          <div className='border-bottom border-secondary-200'></div>
          <Container fluid className='py-4'>
            <ChatBox />
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Messages
