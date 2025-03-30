import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import TopNavbar from '../components/ui/navbar';
import { Doc } from '../components/ui/icons';
import MemberName from '../components/ui/memberName';
import InviteMember from '../components/inviteMember';
import styled from 'styled-components';
import { colors } from '../layout/theme/colors';
import Kanban from '../components/kanban/kanban';
const Style = styled.div`
  .nav-tabs .nav-item .nav-link {
    color: ${colors.secondary_400};
    font-weight: 600;
    font-size: 14px;
    border-radius: 10px;
  }
  .nav-tabs .nav-item .nav-link:hover {
    border: solid 1px #fff;
  }

  .nav-tabs .nav-item .nav-link.active {
    background-color: #fff;
    border-color: ${colors.secondary_200} !important;
    box-shadow: 0px 1px 2px 0px rgba(82, 88, 102, 0.06);
  }
`;
function Projects() {
  return (
    <Container fluid className="vh-100 overflow-y-scroll hideScroll px-3">
      <Row className="h-inherit">
        <Col xs={12} className="inherit px-0">
          <TopNavbar road={'Projects'} />
          <div className="border-bottom border-secondary-200"></div>
          <Container fluid className="py-4">
            <Row>
              <Col xs={12} className="d-flex align-items-center">
                <Doc size={32} />
                <h2 className="fs-24 fw-semibold ms-3">Marketing Campaign</h2>
              </Col>
            </Row>
            <Row className="my-4">
              <Col xs={12}>
                <Row className="text-secondary-400 fs-16 my-3">
                  <Col xs={2}>Project Status:</Col>
                  <Col xs={10}>
                    <span className="text-center fw-semibold text-primary-600 rounded-4 py-1 px-2 bg-primary-50 fs-12 text-light">
                      Completed
                    </span>
                  </Col>
                </Row>
                <Row className="text-secondary-400 fs-16 my-3">
                  <Col xs={2}>Progress:</Col>
                  <Col xs={10} className="d-flex align-items-center">
                    <span className="text-secondary-500 fw-bold pe-4">80%</span>
                    <div
                      className="progress bg-primary-50 w-25 max-w-50 rounded-3 h-2"
                      style={{ height: '10px' }}
                    >
                      <div
                        className="progress-bar bg-primary-500"
                        role="progressbar"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-start text-secondary-400 fs-16 my-3">
                  <Col xs={2}>Dates:</Col>
                  <Col xs={10} className="text-secondary-500  fw-bold pe-4">
                    October 15, 2024 {`->`} December 20, 2024
                  </Col>
                </Row>
                <Row className="d-flex justify-content-start text-secondary-400 fs-16 my-3">
                  <Col xs={2}>Projetct Manager:</Col>
                  <Col xs={10} className="text-secondary-500 fw-bold pe-4">
                    <MemberName
                      name="Rainder Brown"
                      image="../assets/images/jack.png"
                    />
                  </Col>
                </Row>
                <Row className="d-flex justify-content-start text-secondary-400 fs-16 my-3">
                  <Col xs={2}>Projetct Team:</Col>
                  <Col
                    xs={10}
                    className="text-secondary-500 d-flex fw-bold pe-4"
                  >
                    <MemberName
                      name="Alex Johnson"
                      image="../assets/images/jack.png"
                    />
                    <MemberName
                      name="Maria Lopez"
                      image="../assets/images/jack.png"
                    />
                    <MemberName
                      name="James Lee"
                      image="../assets/images/jack.png"
                    />
                    <InviteMember />
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="border-bottom border-secondary-200"></div>
            <Row>
              <Col xs={12}>
                <Style>
                  <Tabs
                    defaultActiveKey="Kanban"
                    id="tab-1"
                    className="bg-secondary-100 rounded-10 my-3 p-1"
                  >
                    <Tab eventKey="Kanban" title="Kanban">
                      <Kanban />
                    </Tab>
                    <Tab eventKey="Table" title="Table">
                      Tab content for table
                    </Tab>
                    <Tab eventKey="Calendar" title="Calendar">
                      Tab content for calendar
                    </Tab>
                  </Tabs>
                </Style>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
