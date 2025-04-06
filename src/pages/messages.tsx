import { Col, Container, Row } from 'react-bootstrap';
import TopNavbar from '../components/ui/topNavBar/navbar';
import ChatBox from '../components/messages/chatbox';
import Chatroom from '../components/messages/chatroom';
import { useEffect, useState } from 'react';

function Messages() {
  const [messages, setMessages] = useState<boolean>(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    setTimeout(() => {
      setMessages(true);
    }, 4000);
  }, []);

  return (
    <Container fluid className="h-inherit">
      <Row className="h-inherit ">
        <Col xs={12} className="px-0">
          <TopNavbar road={'messages'} />
          <div className="border-bottom border-secondary-200"></div>
          <Container fluid className="h-inherit">
            <Row className="h-inherit">
              <Col xs={12} md={5} lg={4} xl={3}>
                <Chatroom chatList={messages} />
              </Col>
              {!isMobile && (
                <Col
                  xs={12}
                  md={7}
                  lg={8}
                  xl={9}
                  className="position-relative px-0"
                >
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
