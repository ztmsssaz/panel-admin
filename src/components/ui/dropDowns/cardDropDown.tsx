import Dropdown from 'react-bootstrap/Dropdown';
import { TrashIcon, VerticalDotsIcon } from '../icons/svgs';
import { colors } from '../../../layout/theme/colors';
import styled from 'styled-components';

const Style = styled.div`
  .fade-dropdown {
    opacity: 0;
    transition: all 0.2s ease;
    display: block !important;
    &.show {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .hover-bg-secondary-100 {
    transition-duration: 0.3s;
    &:hover {
      background-color: ${colors.secondary_100};
    }
  }
`;

const CardDropdownItems = ({ id }: { id: string | number }) => {
  return (
    <Style>
      <Dropdown>
        <Dropdown.Toggle
          as="div"
          variant="transparent"
          id={`dropdown-${id}-${Math.random() * 30}`}
          className="custom-toggle z-3 p-0"
        >
          <VerticalDotsIcon color={colors.secondary_300} width={15} />
        </Dropdown.Toggle>

        <Dropdown.Menu
          as="div"
          className={`fade-dropdown border-secondary-200 p-0 light-shadow rounded-10`}
        >
          <ul className="fs-14">
            <li
              className="d-flex align-items-center hover-bg-secondary-100 p-2"
              onClick={() => console.log(id)}
            >
              <TrashIcon width={15} color={colors.error_500} />
              <p className="ms-1">Delete {id}</p>
            </li>
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    </Style>
  );
};

export default CardDropdownItems;
