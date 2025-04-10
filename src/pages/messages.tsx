import { Col, Container, Row } from 'react-bootstrap';
import TopNavbar from '../components/ui/topNavBar/navbar';
import ChatBox from '../components/messages/chatbox';
import Chatroom from '../components/messages/chatroom';
import { useEffect, useState } from 'react';
import MobileNavbar from '../components/ui/topNavBar/mobileNavbar';

function Messages() {
  const [messages, setMessages] = useState<boolean>(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    setTimeout(() => {
      setMessages(true);
    }, 1000);
  }, []);

  return (
    <Container fluid className="h-inherit">
      <Row className="h-inherit">
        <Col xs={12} className="px-0">
          <MobileNavbar road={'messages'} />
          <TopNavbar
            road={'messages'}
            nextRoad=""
            classes="d-none d-lg-block"
          />
          <Container fluid className="h-inherit">
            <Row className="border-top border-secondary-200 h-inherit">
              <Col xs={12} md={5} lg={4} xl={3}>
                <Chatroom chatList={messages} />
              </Col>
              {!isMobile && (
                <Col xs={12} md={7} lg={8} xl={9} className="px-0">
                  <ChatBox />
                </Col>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Messages;
