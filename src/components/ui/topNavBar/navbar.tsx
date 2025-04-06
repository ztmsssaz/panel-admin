import { Col, Container, Row } from 'react-bootstrap';
import Notifications from './notifications';

function TopNavbar({ road }: { road: string }) {
  return (
    <Container fluid className="fs-18s py-3">
      <Row>
        <Col xs={12}>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="text-capitalize fw-bold fs-18 pe-2">{road}</span>
              {road !== 'messages' && (
                <>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.19727 11.6209L9.0006 7.81753C9.44977 7.36836 9.44977 6.63336 9.0006 6.18419L5.19727 2.38086"
                      stroke="#BEBEC8"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ps-2 fw-bold">Example Title</span>
                </>
              )}
            </div>
            <Notifications />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TopNavbar;
