import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';
import { InfoButton } from '../ui/buttons';
import { PlusIcon, SearchIcon } from '../ui/icons/svgs';
const Style = styled.div`
  input {
    padding: 12px 20px 12px 36px;
    max-width: 186px;
    &::placeholder {
      font-size: 14px;
      color: ${colors.secondary_400};
    }
  }
  .inputIcons {
    @media screen and(max-width:768px) {
      min-width: 30px !important;
      min-height: 30px !important;
    }
  }
`;
function Filter() {
  return (
    <Style>
      <Container fluid className="px-0">
        <Row>
          <Col xs={12}>
            <Form className="d-flex align-items-center justify-content-end">
              <Form.Group
                className="position-relative d-none d-md-inline-block"
                controlId="search"
              >
                <Form.Control
                  type="text"
                  className="rounded-10 py-2 "
                  placeholder="Search here "
                />
                <div className="inputIcons">
                  <PlusIcon />
                </div>
              </Form.Group>
              <div
                className="border border-secondary-100 mx-2 d-none d-md-block"
                style={{ width: '1px', height: '40px' }}
              ></div>
              <Button
                style={{
                  minWidth: '41px',
                  minHeight: '41px',
                }}
                className="d-flex align-items-center justify-content-center px-2 py-1 bg-white bordder border-secondary-200 rounded-10"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.0498 1.57422H13.9498C14.7748 1.57422 15.4498 2.24922 15.4498 3.07422V4.72422C15.4498 5.32422 15.0748 6.07422 14.6998 6.44922L11.4748 9.29922C11.0248 9.67422 10.7248 10.4242 10.7248 11.0242V14.2492C10.7248 14.6992 10.4248 15.2992 10.0498 15.5242L8.9998 16.1992C8.02481 16.7992 6.6748 16.1242 6.6748 14.9242V10.9492C6.6748 10.4242 6.3748 9.74922 6.0748 9.37422L3.2248 6.37422C2.8498 5.99922 2.5498 5.32422 2.5498 4.87422V3.14922C2.5498 2.24922 3.2248 1.57422 4.0498 1.57422Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.1975 1.57422L4.5 7.49922"
                    stroke="#161618"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-secondary-700 fw-bold px-1 d-none d-md-inline-block">
                  Filter
                </span>
              </Button>

              <InfoButton classes="d-flex  align-items-center justify-content-center ms-2">
                <SearchIcon />
                <span className="px-2 d-none d-md-inline-block">Add New</span>
              </InfoButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}

export default Filter;
