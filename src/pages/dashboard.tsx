import { Col, Container, Row } from 'react-bootstrap';
import TopNavbar from '../components/ui/navbar';
import ButtonSwitcher from '../components/ui/buttonsSwitcher';
import DropdownMenu from '../components/ui/dropDown';

function Dashboard() {
  return (
    <Container className="vh-100">
      <Row>
        <Col xs={12}>
          <TopNavbar road={'Dasboard'} />
          <ButtonSwitcher />
          <DropdownMenu />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
