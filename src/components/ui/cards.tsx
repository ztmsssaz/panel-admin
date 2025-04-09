import { memo } from 'react';
import { Card, CardBody, CardTitle } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Task } from '../../types/types';
import CircleProgress from './circle-progress';
import { CalendarIcon, CommentIcon } from './icons/svgs';
import LevelLabel from './levelLabel';

const CardSection = memo(
  ({ data, firstRender }: { data: Task; firstRender: boolean }) => {
 
    return (
      <Card className="rounded-10 mb-2 w-100 mx-auto z-4">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center fs-12">
            <LevelLabel level={!firstRender ? data.level : 0} />
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
          <CardTitle className="text-secondary-700 fs-14 fw-semibold mt-3 mb-2">
            {!firstRender ? data.title : <Skeleton count={1} height={16} />}
          </CardTitle>
          <div className="d-flex align-items-center">
            {!firstRender ? (
              <div className="d-flex align-items-center me-xl-4 me-md-2 me-1">
                <CalendarIcon />
                <time
                  className="fs-12 fw-bold text-secondary-400 ms-1"
                  dateTime="2024-03-27"
                >
                  March 27, 2024
                </time>
              </div>
            ) : (
              <Skeleton
                height={14}
                width={90}
                containerClassName="d-flex align-items-center"
              />
            )}
            {!firstRender ? (
              <div className="d-flex align-items-center">
                <CommentIcon />
                <span className="fs-12 fw-bold text-secondary-400 ms-1">
                  {12}
                </span>
              </div>
            ) : (
              <Skeleton
                width={30}
                height={14}
                containerClassName="d-flex align-items-center"
              />
            )}
          </div>
          <div className="border-bottom border-secondary-200 my-3"></div>
          <div className="d-flex align-items-center justify-content-between">
            {!firstRender ? (
              <div className="d-flex align-items-center">
                <div className="rounded-circle border border-3 border-white z-3">
                  <img width={25} src="../../assets/images/json.png" />
                </div>
                <div
                  className="rounded-circle border border-3 border-white position-relative z-2"
                  style={{ right: '7px' }}
                >
                  <img width={25} src="../../assets/images/jack.png" />
                </div>
                <div
                  className="rounded-circle position-relative"
                  style={{ right: '14px' }}
                >
                  <img width={25} src="../../assets/images/json.png" />
                </div>
              </div>
            ) : (
              <Skeleton
                circle
                width={25}
                height={25}
                count={3}
                containerClassName="d-flex align-items-center"
              />
            )}
            <div className="d-flex align-items-center">
              {!firstRender ? (
                <CircleProgress width={22} value={data.progress} />
              ) : (
                <Skeleton
                  circle
                  width={22}
                  height={22}
                  count={1}
                  containerClassName="d-flex align-items-center"
                />
              )}
              <span className="fs-12 fw-bold ms-1">
                {!firstRender ? (
                  `${data.progress}%`
                ) : (
                  <>
                    <Skeleton width={24} height={18} />
                  </>
                )}
              </span>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }
);

export default CardSection;
