import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ArrowDown } from '../icons/svgs';

function Others() {
  const navLinkClasses =
    'd-flex align-items-center text-secondary-500 fw-bold py-1 rounded-2 ';
  return (
    <>
      <Row className="mt-4">
        <span className="text-secondary fs-12">Other</span>
      </Row>
      {/* links */}
      <Row className="fs-14">
        <Col xs={12}>
          <NavLink
            to={'/dashboard'}
            className={({ isActive }) =>
              isActive ? navLinkClasses + ` activeLink` : navLinkClasses
            }
          >
            <div className="py-1 px-2">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 14.3223H9.75L6.41249 16.5423C5.91749 16.8723 5.25 16.5198 5.25 15.9198V14.3223C3 14.3223 1.5 12.8223 1.5 10.5723V6.07227C1.5 3.82227 3 2.32227 5.25 2.32227H12.75C15 2.32227 16.5 3.82227 16.5 6.07227V10.5723C16.5 12.8223 15 14.3223 12.75 14.3223Z"
                  stroke="#44444A"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99986 9.01953V8.86206C8.99986 8.35206 9.31488 8.08205 9.62988 7.86455C9.93738 7.65455 10.2448 7.38456 10.2448 6.88956C10.2448 6.19956 9.68986 5.64453 8.99986 5.64453C8.30986 5.64453 7.75488 6.19956 7.75488 6.88956"
                  stroke="#44444A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99662 10.8125H9.00337"
                  stroke="#44444A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={`ms-2 `}>Help & Center</span>
            </div>
          </NavLink>
          <NavLink
            to={'/settings'}
            className={({ isActive }) =>
              isActive ? navLinkClasses + ` activeLink` : navLinkClasses
            }
          >
            <div className="py-1 px-2">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 7.33203V11.6595C2.25 13.2495 2.25 13.2495 3.75 14.262L7.875 16.647C8.4975 17.007 9.51 17.007 10.125 16.647L14.25 14.262C15.75 13.2495 15.75 13.2495 15.75 11.667V7.33203C15.75 5.74953 15.75 5.74953 14.25 4.73703L10.125 2.35203C9.51 1.99203 8.4975 1.99203 7.875 2.35203L3.75 4.73703C2.25 5.74953 2.25 5.74953 2.25 7.33203Z"
                  stroke="#44444A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11.75C10.2426 11.75 11.25 10.7426 11.25 9.5C11.25 8.25736 10.2426 7.25 9 7.25C7.75736 7.25 6.75 8.25736 6.75 9.5C6.75 10.7426 7.75736 11.75 9 11.75Z"
                  stroke="#44444A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={`ms-2 `}>Settings</span>
            </div>
          </NavLink>
        </Col>
        <Col>
          <div className="border-bottom border-secondary-200 my-4"></div>
        </Col>

        <Col xs={12}>
          <div className="cursor-pointer d-flex align-items-center py-xs-1">
            <div>
              <img
                width="30"
                src="../../assets/images/json.png"
                alt="profile"
              />
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 ps-2">
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-semibold fs-12 mb-1">Abolfazl Zarei</h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-normal fs-12 text-secondary-400">
                    Johncornor@mail.com
                  </p>
                </div>
              </div>
              <div>
                <ArrowDown />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Others;
