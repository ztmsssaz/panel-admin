import { Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';
import { InfoButton } from '../ui/buttons';
import { PlusIcon, SearchIcon } from '../ui/icons/svgs';
const Style = styled.div`
  input {
    padding: 12px 20px 12px 36px;
    &::placeholder {
      font-size: 14px;
      color: ${colors.secondary_400};
    }
  }
`;
function Search() {
  return (
    <Style className="py-3 pt-md-4 pb-md-1">
      <Container fluid className="px-0">
        <Row>
          <Col xs={12}>
            <Form className="d-flex align-items-center">
              <Form.Group
                className="position-relative w-100"
                controlId="search"
              >
                <Form.Control
                  type="text"
                  className="rounded-10 py-2"
                  placeholder="Search here"
                />
                <div className="inputIcons">
                  <PlusIcon />
                </div>
              </Form.Group>
              <InfoButton classes="d-flex align-items-center ms-2">
                <SearchIcon />
                <span className="px-2">New</span>
              </InfoButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </Style>
  );
}

export default Search;
