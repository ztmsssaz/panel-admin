import { Card, CardBody, CardTitle } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Task } from '../../types/types';
import CircleProgress from './circle-progress';
import { CalendarIcon, CommentIcon } from './icons/svgs';
import LevelLabel from './levelLabel';
import CardDropdownItems from './dropDowns/cardDropDown';

const CardSection = ({
  data,
  firstRender,
}: {
  data: Task;
  firstRender: boolean;
}) => {
  return (
    <Card className="border-secondary-200 rounded-10 mb-2 mx-auto z-4">
      <CardBody>
        <div className="d-flex justify-content-between align-items-center fs-12 no-touch-action">
          <LevelLabel level={!firstRender ? data.level : 0} />
          <div className="cursor-pointer position-relative">
            <CardDropdownItems id={data.id} />
          </div>
        </div>
        <div className="no-drag-zone">
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
        </div>
      </CardBody>
    </Card>
  );
};

export default CardSection;
