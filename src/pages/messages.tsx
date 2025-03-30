import { Col, Container, Row } from 'react-bootstrap';
import TopNavbar from '../components/ui/navbar';
import ChatBox from '../components/messages/chatbox';
import Chatroom from '../components/messages/chatroom';

function Messages() {
  return (
    <Container fluid className="h-inherit">
      <Row className="h-inherit ">
        <Col xs={12} className="px-0">
          <TopNavbar road={'messages'} />
          <div className="border-bottom border-secondary-200"></div>
          <Container fluid className="h-inherit">
            <Row className="h-inherit">
              <Col xs={12} md={5} lg={3}>
                <Chatroom />
              </Col>
              <Col xs={12} md={7} lg={9} className="position-relative px-0">
                <ChatBox />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
