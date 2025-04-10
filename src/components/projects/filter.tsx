import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';
import { InfoButton } from '../ui/buttons';
import { FilterIcon, PlusIcon, SearchIcon } from '../ui/icons/svgs';
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
                  <SearchIcon color={colors.secondary_700} />
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
                <div>
                  <FilterIcon />
                </div>
                <span className="text-secondary-700 fw-bold px-1 d-none d-lg-inline-block">
                  Filter
                </span>
              </Button>

              <InfoButton classes="d-flex align-items-center justify-content-center ms-2">
                <span>
                  <PlusIcon color={colors.white} />
                </span>
                <span className="px-2 d-none fw-bold d-lg-inline-block">
                  Add New
                </span>
              </InfoButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}

export default Filter;
