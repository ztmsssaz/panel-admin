import Dropdown from 'react-bootstrap/Dropdown';
import { memo, useState } from 'react';
import { TrashIcon, VerticalDotsIcon } from '../icons/svgs';
import { colors } from '../../../layout/theme/colors';
import styled from 'styled-components';

const Style = styled.div`
  .fade-dropdown {
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.2s ease;
    display: block !important;
    &.show {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
`;

const CardDropdownItems = memo(
  ({ id = Math.random() * 100 }: { id: string | number }) => {
    const [show, setShow] = useState(false);

    return (
      <Style>
        <Dropdown>
          <Dropdown.Toggle
            as="div"
            variant="transparent"
            id={`dropdown-${id}-${Math.random() * 100}`}
            className="custom-toggle z-3"
            onClick={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <span>
              <VerticalDotsIcon color={colors.secondary_300} width={20} />
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu
            as="div"
            className={`fade-dropdown ${show ? 'show' : ''} border-secondary-100 light-shadow rounded-10`}
          >
            <div className="p-2">
              <div>
                <span>
                  <TrashIcon width={20} />
                </span>
                <span>Delete</span>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Style>
    );
  },
);

export default CardDropdownItems;
