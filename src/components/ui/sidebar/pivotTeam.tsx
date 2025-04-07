import { Dropdown } from 'react-bootstrap';
import { Logo } from '../icons';

function PivotTeamDropDown({ open = true }: { open?: boolean }) {
  return (
    <Dropdown className="w-100">
      <Dropdown.Toggle
        id="dropdown-basic"
        className={`position-relative d-flex align-items-center bg-white border border-1 rounded-10 cursor-pointer pl-10 py-8
                  ${open ? ' pr-16' : 'p-1'}`}
        as="div"
      >
        <Logo size={28} classes="ml-5" />
        <div
          className={`${!open && 'opacity-0'} d-flex align-items-center justify-content-between`}
        >
          <span className="fs-14 fw-bold ml-10">Pivot Team</span>
          <div
            className="position-absolute dropDown-icon"
            style={{ right: '10px' }}
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6199 5.9375L7.81655 9.74083C7.36738 10.19 6.63238 10.19 6.18322 9.74083L2.37988 5.9375"
                stroke="#BEBEC8"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="w-100">
        <Dropdown.Item href="#action1">xxx</Dropdown.Item>
        <Dropdown.Item href="#action2">xxx</Dropdown.Item>
        <Dropdown.Item href="#action3">xxx</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default PivotTeamDropDown;
