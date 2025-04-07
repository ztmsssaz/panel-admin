import Skeleton from 'react-loading-skeleton';
import { MessageIcon, RingIcon } from '../icons';

function Notifications({ classes }: { classes?: string }) {
  const isMobile = window.innerWidth < 768;
  const mobileClasses = 'rounded-10 rounded-10 light-shadow';
  const title: boolean = true;
  return (
    <div className={`d-flex align-items-center ${classes}`}>
      <div className="d-flex align-items-center justify-content-between d-none d-md-block">
        {title ? (
          <div className="d-flex align-items-center">
            <div className="rounded-circle z-1">
              <img width={26} src="../../assets/images/json.png" />
            </div>
            <div
              className="rounded-circle outline-3-white position-relative z-2"
              style={{ right: `${6}px` }}
            >
              <img width={26} src="../../assets/images/json.png" />
            </div>
            <div
              className="rounded-circle outline-3-white z-3 position-relative"
              style={{ right: `${6 * 2 + 1}px` }}
            >
              <img width={26} src="../../assets/images/json.png" />
            </div>
            <div
              className="rounded-circle outline-3-white z-3 position-relative "
              style={{ right: `${6 * 3 + 1}px`, width: '26px', height: '26px' }}
            >
              <div className="bg-secondary-50 text-center text-secondary-400 d-flex align-items-center justify-content-center h-100 w-100 fs-12 fw-bold">
                +10
              </div>
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
      </div>
      <div className="d-flex">
        <RingIcon
          size={isMobile ? 16 : 20}
          classes={`${isMobile ? mobileClasses : 'border border-secondary-200 border-2 rounded-12'} cursor-pointer me-1`}
        />
        <MessageIcon
          size={isMobile ? 16 : 20}
          classes={`${isMobile ? mobileClasses : 'border border-secondary-200 border-2 rounded-12'} cursor-pointer me-1`}
        />
      </div>
    </div>
  );
}

export default Notifications;
