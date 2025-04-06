import CardSection from '../ui/cards';
import { Row, Col, Button, Container } from 'react-bootstrap';

function Kanban() {
  const columns = ['To Do', 'In Progress', 'Review', 'Completed'];

  const NumberBadge = (value: number) => {
    return (
      <span
        className="bg-white rounded-7 fw-bold fs-12 border border-secondary-100 text-center"
        style={{ width: '20px', height: '20px' }}
      >
        {value}
      </span>
    );
  };

  function whatColorIs(text: string) {
    switch (text) {
      case 'To Do':
        return 'bg-secondary-300';
      case 'In Progress':
        return 'bg-info-500';
      case 'Review':
        return 'bg-warning-500';
      case 'Completed':
        return 'bg-primary-500';
      default:
        break;
    }
  }

  return (
    <Container fluid>
      <Row>
        {columns.map((title, index) => (
          <Col xs={3} key={title} className="p-0">
            <div
              className={`bg-secondary-50 rounded-10 ${index != columns.length && 'me-2'}`}
            >
              <div className="p-1">
                <div className="d-flex align-items-center ms-3">
                  <span
                    className={`d-inline-block rounded-circle ${whatColorIs(title)}`}
                    style={{ width: '10px', height: '10px' }}
                  ></span>
                  <h5 className="text-center fw-bold fs-16 py-3 px-2">
                    {title}
                  </h5>
                  {NumberBadge(4)}
                </div>
                {[...Array(4)].map((_, index) => (
                  <CardSection key={index} title="Card Action" />
                ))}
                <Button className="bg-transparent text-secondary-400 border-0 fs-14 fw-bold mt-2 d-flex align-items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 10H15"
                      stroke="#5B5A64"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 15V5"
                      stroke="#5B5A64"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ps-2">Add New</span>
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Kanban;
