import { DropdownButton } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function DropDownList() {
  return (
    <div>
      <DropdownButton
        key={'up-centered'}
        id={`dropdown-button-drop-${'up-centered'}`}
        drop={'up-centered'}
        variant="secondary"
        title={`Drop ${'up-centered'}`}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropDownList;
