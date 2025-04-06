import Skeleton from 'react-loading-skeleton';
import { SingleCheckIcon } from '../ui/icons/svgs';

function ChatItem({ data = true }: { data: boolean }) {
  return (
    <div className="chat-item cursor-pointer d-flex align-items-center pb-3 py-xs-1 text-primary:hover">
      <div>
        {data ? (
          <img width="32" src="../../assets/images/jack.png" alt="profile" />
        ) : (
          <Skeleton circle width={32} height={32} />
        )}
      </div>
      <div className="w-100 ps-2">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-semibold fs-14 mb-1">
            {data ? 'Abolfazl Zarei' : <Skeleton width={120} />}
          </h4>
          <time className="fs-12 fw-normal text-secondary-400" dateTime="09:00">
            {data ? ' 9.00' : <Skeleton width={35} />}
          </time>
        </div>
        {data ? (
          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-normal fs-12 text-secondary-400">
              'Can you share the updated design files?'
            </p>
            <SingleCheckIcon />
          </div>
        ) : (
          <Skeleton count={1} />
        )}
      </div>
    </div>
  );
}

export default ChatItem;
