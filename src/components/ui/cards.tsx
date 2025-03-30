import { Card, CardBody, CardTitle } from 'react-bootstrap';
import LevelLabel from './levelLabel';
import CircleProgress from './circle-progress';

function CardSection({ title }: { title: string }) {
  const randomValue = Math.floor(Math.random() * 60 + 1);
  return (
    <Card className="rounded-10 mb-2 w-100 mx-auto">
      <CardBody>
        <div className="d-flex justify-content-between align-items-center fs-12">
          <LevelLabel level={Math.floor(Math.random() * 3) + 1} />
          <div className="cursor-pointer">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66699 12.6667C6.66699 13.4 7.26699 14 8.00033 14C8.73366 14 9.33366 13.4 9.33366 12.6667C9.33366 11.9333 8.73366 11.3333 8.00033 11.3333C7.26699 11.3333 6.66699 11.9333 6.66699 12.6667Z"
                fill="#BEBEC8"
              />
              <path
                d="M6.66699 3.33268C6.66699 4.06602 7.26699 4.66602 8.00033 4.66602C8.73366 4.66602 9.33366 4.06602 9.33366 3.33268C9.33366 2.59935 8.73366 1.99935 8.00033 1.99935C7.26699 1.99935 6.66699 2.59935 6.66699 3.33268Z"
                fill="#BEBEC8"
              />
              <path
                d="M6.66699 8.00065C6.66699 8.73398 7.26699 9.33398 8.00033 9.33398C8.73366 9.33398 9.33366 8.73398 9.33366 8.00065C9.33366 7.26732 8.73366 6.66732 8.00033 6.66732C7.26699 6.66732 6.66699 7.26732 6.66699 8.00065Z"
                fill="#BEBEC8"
              />
            </svg>
          </div>
        </div>
        <CardTitle className="text-secondary-700 fs-14 fw-semibold mt-2 mb-1">
          {title}
        </CardTitle>
        <div className="d-flex align-items-center">
          <div className="me-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33301 1.33398V3.33398"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.667 1.33398V3.33398"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.33301 6.06055H13.6663"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 5.66732V11.334C14 13.334 13 14.6673 10.6667 14.6673H5.33333C3 14.6673 2 13.334 2 11.334V5.66732C2 3.66732 3 2.33398 5.33333 2.33398H10.6667C13 2.33398 14 3.66732 14 5.66732Z"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.4635 9.13411H10.4694"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.4635 11.1341H10.4694"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99666 9.13411H8.00265"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99666 11.1341H8.00265"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.52987 9.13411H5.53585"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.52987 11.1341H5.53585"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <time
              className="fs-12 fw-bold text-secondary-400 ms-1"
              dateTime="2024-03-27"
            >
              March 27, 2024
            </time>
          </div>
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.66634 12.6673H5.33301C2.66634 12.6673 1.33301 12.0007 1.33301 8.66732V5.33398C1.33301 2.66732 2.66634 1.33398 5.33301 1.33398H10.6663C13.333 1.33398 14.6663 2.66732 14.6663 5.33398V8.66732C14.6663 11.334 13.333 12.6673 10.6663 12.6673H10.333C10.1263 12.6673 9.92634 12.7673 9.79967 12.934L8.79967 14.2673C8.35967 14.854 7.63967 14.854 7.19967 14.2673L6.19967 12.934C6.09301 12.7873 5.84634 12.6673 5.66634 12.6673Z"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66699 5.33398H11.3337"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66699 8.66602H8.66699"
                stroke="#5B5A64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="fs-12 fw-bold text-secondary-400 ms-1">{12}</span>
          </div>
        </div>
        <div className="border-bottom border-secondary-200 my-2"></div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="rounded-circle border border-3 border-white z-3">
              <img width={25} src="../../assets/images/json.png" />
            </div>
            <div
              className="rounded-circle border border-3 border-white position-relative z-2"
              style={{ right: '7px' }}
            >
              <img width={25} src="../../assets/images/json.png" />
            </div>
            <div
              className="rounded-circle position-relative"
              style={{ right: '14px' }}
            >
              <img width={25} src="../../assets/images/json.png" />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <CircleProgress width={22} value={randomValue} />
            <span className="fs-12 fw-bold ms-1">{randomValue}%</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CardSection;
