import { Col, Container, Row } from 'react-bootstrap';
import TopNavbar from '../components/ui/topNavBar/navbar';
import AppTableDnd from '../components/batchTable';
// import ButtonSwitcher from '../components/ui/buttonsSwitcher';
// import DropdownMenu from '../components/ui/dropDown';

function Dashboard() {
  return (
    <Container className="vh-100">
      <Row>
        <Col xs={12}>
          <TopNavbar road={'Dasboard'} />
          {/* <ButtonSwitcher />
          <DropdownMenu /> */}
          <AppTableDnd />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
