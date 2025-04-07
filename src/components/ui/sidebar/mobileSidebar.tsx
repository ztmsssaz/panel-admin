import Offcanvas from 'react-bootstrap/Offcanvas';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../layout/theme/colors';
import { Check } from '../icons';
import { NavLink } from 'react-router';
import Others from './others';
const Style = styled.div`
  * {
    transition: all 0.4s;
  }
  a {
    svg path {
      stroke: ${colors.secondary_500};
    }
    &.activeLink {
      background-color: ${colors.secondary_200};
      font-weight: 600 !important;
      color: ${colors.secondary_700} !important;
      svg path {
        stroke: ${colors.info_600};
      }
    }
  }
  .sidebar {
    transition: all 0.3s;
    width: 50px;
  }
`;
export default function MobileSidebar({
  show,
  onHide,
  ...props
}: {
  show: boolean;
  onHide: Function;
}) {
  const navlinkClasses: string =
    'd-flex align-items-center text-secondary-500 fw-bold py-1 rounded-2 ';
  return (
    <Offcanvas show={show} onHide={onHide} {...props}>
      <Container fluid>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container fluid className={`sidebar ps-0`}>
            <Style>
              <Row>
                <Col>
                  <div
                    className={`d-flex  align-items-center pt-3 pb-4 justify-content-center`}
                  >
                    <div
                      className={`d-flex align-items-center ${!open && 'd-none'}`}
                    >
                      <Check size={28} />
                      <h2 className="fs-16 fw-semibold ms-2">Protask</h2>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <span className="text-secondary fs-12">Main Menu</span>
              </Row>
              {/* links */}
              <Row className="fs-14">
                <Col xs={12}>
                  <NavLink
                    to={'/dashboard'}
                    className={({ isActive }) =>
                      isActive ? navlinkClasses + ` activeLink` : navlinkClasses
                    }
                  >
                    <div className="py-1 px-2">
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 7.7168H5.25C6.75 7.7168 7.5 6.9668 7.5 5.4668V3.9668C7.5 2.4668 6.75 1.7168 5.25 1.7168H3.75C2.25 1.7168 1.5 2.4668 1.5 3.9668V5.4668C1.5 6.9668 2.25 7.7168 3.75 7.7168Z"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.75 7.7168H14.25C15.75 7.7168 16.5 6.9668 16.5 5.4668V3.9668C16.5 2.4668 15.75 1.7168 14.25 1.7168H12.75C11.25 1.7168 10.5 2.4668 10.5 3.9668V5.4668C10.5 6.9668 11.25 7.7168 12.75 7.7168Z"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.75 16.7168H14.25C15.75 16.7168 16.5 15.9668 16.5 14.4668V12.9668C16.5 11.4668 15.75 10.7168 14.25 10.7168H12.75C11.25 10.7168 10.5 11.4668 10.5 12.9668V14.4668C10.5 15.9668 11.25 16.7168 12.75 16.7168Z"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.75 16.7168H5.25C6.75 16.7168 7.5 15.9668 7.5 14.4668V12.9668C7.5 11.4668 6.75 10.7168 5.25 10.7168H3.75C2.25 10.7168 1.5 11.4668 1.5 12.9668V14.4668C1.5 15.9668 2.25 16.7168 3.75 16.7168Z"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className={`ms-2 ${!open && 'd-none'}`}>
                        Dashboard
                      </span>
                    </div>
                  </NavLink>
                  <NavLink
                    to={'/projects'}
                    className={({ isActive }) =>
                      isActive ? navlinkClasses + ` activeLink` : navlinkClasses
                    }
                  >
                    <div className="py-1 px-2">
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.99963 16.7168H11.9996C15.0146 16.7168 15.5546 15.5093 15.7121 14.0393L16.2746 8.0393C16.4771 6.2093 15.9521 4.7168 12.7496 4.7168H5.24963C2.04713 4.7168 1.52213 6.2093 1.72463 8.0393L2.28713 14.0393C2.44463 15.5093 2.98463 16.7168 5.99963 16.7168Z"
                          stroke="#3863C6"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 4.7168V4.1168C6 2.7893 6 1.7168 8.4 1.7168H9.6C12 1.7168 12 2.7893 12 4.1168V4.7168"
                          stroke="#3863C6"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.5 9.9668V10.7168C10.5 10.7243 10.5 10.7243 10.5 10.7318C10.5 11.5493 10.4925 12.2168 9 12.2168C7.515 12.2168 7.5 11.5568 7.5 10.7393V9.9668C7.5 9.2168 7.5 9.2168 8.25 9.2168H9.75C10.5 9.2168 10.5 9.2168 10.5 9.9668Z"
                          stroke="#3863C6"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.2375 8.4668C14.505 9.7268 12.525 10.4768 10.5 10.7318"
                          stroke="#3863C6"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.96484 8.66992C3.65234 9.82492 5.55734 10.5224 7.49984 10.7399"
                          stroke="#3863C6"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className={`ms-2 ${!open && ' d-none'}`}>
                        Projects
                      </span>
                    </div>
                  </NavLink>
                  <NavLink
                    end
                    to={'/messages'}
                    className={({ isActive }) =>
                      isActive ? navlinkClasses + ` activeLink` : navlinkClasses
                    }
                  >
                    <div className="py-1 px-2">
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.375 14.4668H6C3 14.4668 1.5 13.7168 1.5 9.9668V6.2168C1.5 3.2168 3 1.7168 6 1.7168H12C15 1.7168 16.5 3.2168 16.5 6.2168V9.9668C16.5 12.9668 15 14.4668 12 14.4668H11.625C11.3925 14.4668 11.1675 14.5793 11.025 14.7668L9.9 16.2668C9.405 16.9268 8.595 16.9268 8.1 16.2668L6.975 14.7668C6.855 14.6018 6.5775 14.4668 6.375 14.4668Z"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.25 6.2168H12.75"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.25 9.9668H9.75"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className={`ms-2 ${!open && ' d-none'}`}>
                        Messages
                      </span>
                    </div>
                  </NavLink>
                  <NavLink
                    to={'/Calendar'}
                    className={({ isActive }) =>
                      isActive ? navlinkClasses + ` activeLink` : navlinkClasses
                    }
                  >
                    <div className="py-1 px-2">
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1.7168V3.9668"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 1.7168V3.9668"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.625 7.03516H15.375"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.75 6.5918V12.9668C15.75 15.2168 14.625 16.7168 12 16.7168H6C3.375 16.7168 2.25 15.2168 2.25 12.9668V6.5918C2.25 4.3418 3.375 2.8418 6 2.8418H12C14.625 2.8418 15.75 4.3418 15.75 6.5918Z"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.7713 10.4922H11.778"
                          stroke="#44444A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.7713 12.7422H11.778"
                          stroke="#44444A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.99686 10.4922H9.00359"
                          stroke="#44444A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.99686 12.7422H9.00359"
                          stroke="#44444A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.22049 10.4922H6.22723"
                          stroke="#44444A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.22049 12.7422H6.22723"
                          stroke="#44444A"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className={`ms-2 ${!open && ' d-none'}`}>
                        Calendar
                      </span>
                    </div>
                  </NavLink>
                  <NavLink
                    to={'/Analytics'}
                    className={({ isActive }) =>
                      isActive ? navlinkClasses + ` activeLink` : navlinkClasses
                    }
                  >
                    <div className="py-1 px-2">
                      <svg
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.16016 13.8298V12.2773"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 13.8296V10.7246"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12.8398 13.8291V9.16406"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12.8402 4.60352L12.4952 5.00852C10.5827 7.24352 8.01766 8.82602 5.16016 9.53852"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10.6426 4.60352H12.8401V6.79352"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.75 16.7168H11.25C15 16.7168 16.5 15.2168 16.5 11.4668V6.9668C16.5 3.2168 15 1.7168 11.25 1.7168H6.75C3 1.7168 1.5 3.2168 1.5 6.9668V11.4668C1.5 15.2168 3 16.7168 6.75 16.7168Z"
                          stroke="#44444A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span className={`ms-2 ${!open && 'opacity-0 d-none'}`}>
                        Analytics
                      </span>
                    </div>
                  </NavLink>
                </Col>
                <Col
                  xs={12}
                  className="position-absolute start-0"
                  style={{ bottom: '10px' }}
                >
                  <Others />
                </Col>
              </Row>
            </Style>
          </Container>
        </Offcanvas.Body>
      </Container>
    </Offcanvas>
  );
}
