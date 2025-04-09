import { useEffect, useState } from 'react';
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import InviteMember from '../components/inviteMember';
import Kanban from '../components/kanban/kanban';
import Filter from '../components/projects/filter';
import BreakLine from '../components/ui/breakLine';
import { Doc } from '../components/ui/icons';
import MemberName from '../components/ui/memberName';
import MobileNavbar from '../components/ui/topNavBar/mobileNavbar';
import TopNavbar from '../components/ui/topNavBar/navbar';
import { colors } from '../layout/theme/colors';

const Style = styled.div`
  .nav-tabs .nav-item .nav-link {
    color: ${colors.secondary_400};
    font-weight: 600;
    font-size: 14px;
    border-radius: 8px;
    margin-right: 1px;
  }
  .nav-tabs .nav-item .nav-link:hover {
    border: solid 1px #77777786;
  }

  .nav-tabs .nav-item .nav-link.active {
    background-color: #fff;
    border-color: ${colors.secondary_200} !important;
    box-shadow: 0px 1px 2px 0px rgba(82, 88, 102, 0.06);
  }
  .projectTeam img {
    outline: solid 3px ${colors.white};
    border-radius: 50%;
  }
`;
function Projects() {
  const [progressValue, setProgressValue] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string | null>('kanban');

  useEffect(() => {
    setTimeout(() => {
      setProgressValue(80);
    }, 1000);
  }, []);

  return (
    <Style>
      <Container fluid className="overflow-y-scroll hideScroll px-3">
        <Row className="h-inherit">
          <Col xs={12} className="inherit px-0">
            <MobileNavbar road={'messages'} />
            <TopNavbar road={'Projects'} nextRoad="Marketing Campaign" />
            <BreakLine classes="d-none d-md-block" />
            <Container fluid className="py-4">
              <Row>
                <Col xs={12} className="d-flex align-items-center">
                  <Doc
                    size={32}
                    iconSize={20}
                    classes="rounded-10"
                    bacColor={colors.secondary_600}
                  />
                  <h2 className="fs-24 fw-semibold ms-3">Marketing Campaign</h2>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs={12}>
                  <Row className="text-secondary-400 fs-16 mb-3">
                    <Col xs={3} md={2}>
                      Project Status:
                    </Col>
                    <Col xs={9} md={10}>
                      {progressValue ? (
                        <span className="text-center fw-semibold text-primary-600 rounded-4 py-1 px-2 bg-primary-50 fs-12 text-light">
                          Completed
                        </span>
                      ) : (
                        <Skeleton width={80} height={20} borderRadius={10} />
                      )}
                    </Col>
                  </Row>
                  <Row className="text-secondary-400 fs-16 my-3">
                    <Col xs={3} md={2}>
                      Progress:
                    </Col>
                    <Col xs={9} md={10} className="d-flex align-items-center">
                      <h6 className="text-secondary-500 fs-16 fw-bold pe-4">
                        {progressValue ? (
                          progressValue + '%'
                        ) : (
                          <Skeleton width={23} height={19} className="pe-4" />
                        )}
                      </h6>
                      {
                        <div
                          className="progress bg-primary-50 w-50 w-md-25 max-w-50 rounded-3 h-2"
                          style={{ height: '10px' }}
                        >
                          <div
                            className="progress-bar bg-primary-500"
                            role="progressbar"
                            style={{ width: `${progressValue}%` }}
                          ></div>
                        </div>
                      }
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-start align-items-center text-secondary-400 fs-16 my-3">
                    <Col xs={3} md={2}>
                      Dates:
                    </Col>
                    <Col
                      xs={9}
                      md={10}
                      className="text-secondary-500  fw-bold pe-4"
                    >
                      {progressValue ? (
                        `October 15, 2024 -> December 20, 2024`
                      ) : (
                        <Skeleton count={1} width={400} />
                      )}
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-start align-items-center text-secondary-400 fs-16 my-3">
                    <Col xs={3} md={2}>
                      Projetct Manager:
                    </Col>
                    <Col
                      xs={9}
                      md={10}
                      className="text-secondary-500 fw-bold pe-4"
                    >
                      <MemberName
                        name={progressValue ? 'Rainder Brown' : ''}
                        image="../assets/images/jack.png"
                      />
                    </Col>
                  </Row>
                  <Row className="projectTeam d-flex justify-content-start align-items-center text-secondary-400 fs-16 mt-3 my-1">
                    <Col xs={3} md={2}>
                      Projetct Team:
                    </Col>
                    <Col
                      xs={9}
                      md={10}
                      className="text-secondary-500 d-flex flex-wrap align-items-center fw-bold pe-1 pe-md-4"
                    >
                      <MemberName
                        classes="position-relative"
                        name={progressValue ? 'Alex Johnson' : ''}
                        image="../assets/images/rihana.png"
                      />
                      <MemberName
                        classes="position-relative"
                        styles={{ left: '-7px' }}
                        name={progressValue ? 'Maria Lopez' : ''}
                        image="../assets/images/json.png"
                      />
                      <MemberName
                        classes="position-relative"
                        styles={{ left: '-14px' }}
                        name={progressValue ? 'James Lee' : ''}
                        image="../assets/images/mina.png"
                      />
                      <InviteMember />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <BreakLine />
              <Row className="align-items-center">
                <Col xs={8} sm={6}>
                  <Tabs
                    activeKey={activeTab as string}
                    onSelect={(k) => setActiveTab(k)}
                    defaultActiveKey="kanban"
                    id="kanban-tabs"
                    className="bg-secondary-100 p-1 rounded border-0"
                    style={{ maxWidth: 'max-content', minWidth: 'max-content' }}
                  >
                    <Tab eventKey="kanban" title="Kanban" />
                    <Tab eventKey="table" title="Table" />
                    <Tab eventKey="calendar" title="Calendar" />
                  </Tabs>
                </Col>
                <Col xs={4} sm={6}>
                  <Filter />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col xs={12}>
                  <div
                    className={`${activeTab === 'kanban' ? 'd-block' : 'd-none'}`}
                  >
                    <Kanban />
                  </div>

                  <div
                    className={`${activeTab === 'table' ? 'd-block' : 'd-none'}`}
                  >
                    Tab content for table
                  </div>
                  <div
                    className={`${activeTab === 'calendar' ? 'd-block' : 'd-none'}`}
                  >
                    Tab content for calendar
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}

export default Projects;
