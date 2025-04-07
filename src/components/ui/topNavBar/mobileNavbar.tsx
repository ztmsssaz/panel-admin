import { Col, Container, Row } from 'react-bootstrap';
import Notifications from './notifications';
import { SidebarIcon } from '../icons/svgs';
import MobileSidebar from '../sidebar/mobileSidebar';
import { useState } from 'react';

function MobileNavbar({ road }: { road: string }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container fluid className="py-3 d-block d-md-none">
      <Row>
        <Col xs={12}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div onClick={() => setShow(true)}>
                <SidebarIcon />
              </div>

              <h1 className="text-capitalize text-secondary-700 fw-bold fs-20 ps-3">
                {road}
              </h1>
            </div>
            <Notifications classes="d-md-none" />
          </div>
        </Col>
      </Row>
      <MobileSidebar show={show} onHide={() => setShow(false)} />
    </Container>
  );
}

export default MobileNavbar;
