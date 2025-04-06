import Skeleton from 'react-loading-skeleton';
import { SingleCheckIcon } from '../ui/icons/svgs';
import { NavLink } from 'react-router';
import styled from 'styled-components';
import { colors } from '../../layout/theme/colors';
const Style = styled.div`
  a {
    transition: 0.3s;
    &:hover {
      background-color: ${colors.secondary_50};
    }
    &.activeLink {
      background-color: ${colors.secondary_100};
      font-weight: 600 !important;
      color: ${colors.secondary_700} !important;
      img {
        outline: solid 3px ${colors.white};
      }
    }
  }
`;
function ChatItem({
  data = true,
  id,
  active,
  onActive,
}: {
  data: boolean;
  id: number;
  active: number;
  onActive: Function;
}) {
  const isMobile = window.innerWidth < 768;
  const classes =
    'chat-item cursor-pointer text-secondary-700 d-flex align-items-center mb-16 p-10 rounded-8';
  return (
    <Style>
      <NavLink
        to={`/messages${isMobile ? `/${id}` : `?chatId=${id}`}`}
        className={`${classes} ${active === id && 'activeLink'}`}
        onClick={() => onActive(id)}
      >
        <div>
          {data ? (
            <img
              width="32"
              src="../../assets/images/jack.png"
              alt="profile"
              className="rounded-circle"
            />
          ) : (
            <Skeleton circle width={32} height={32} />
          )}
        </div>
        <div className="w-100 ps-2">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="fw-semibold fs-14 mb-1">
              {data ? 'Abolfazl Zarei' : <Skeleton width={120} />}
            </h4>
            <time
              className="fs-12 fw-normal text-secondary-400"
              dateTime="09:00"
            >
              {data ? ' 12 Dec' : <Skeleton width={35} />}
            </time>
          </div>
          {data ? (
            <div className="d-flex justify-content-between align-items-center">
              <p className="fw-normal fs-12 text-secondary-400">
                Can you share the updated design files?
              </p>
              <SingleCheckIcon />
            </div>
          ) : (
            <Skeleton count={1} />
          )}
        </div>
      </NavLink>
    </Style>
  );
}

export default ChatItem;
