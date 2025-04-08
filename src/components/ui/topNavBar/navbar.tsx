import { Col, Container, Row } from 'react-bootstrap';
import Notifications from './notifications';

function TopNavbar({
  road,
  nextRoad,
  classes = '',
}: {
  road: string;
  nextRoad?: string;
  classes?: string;
}) {
  return (
    <Container fluid className={`fs-18 py-md-3 pt-3 ${classes}`}>
      <Row>
        <Col xs={12}>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="text-capitalize text-secondary-300 fw-bold fs-18 pe-2">
                {road}
              </span>
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
                  <span className="ps-2 fw-bold fs-18">{nextRoad}</span>
                </>
              )}
            </div>
            <Notifications classes="d-none d-md-flex" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TopNavbar;
