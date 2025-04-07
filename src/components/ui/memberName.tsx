import { styled } from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { colors } from '../../layout/theme/colors';

const Style = styled.div`
  .pictures {
    @media screen and (min-width: 768px) {
      height: 34px;
    }
  }
  .max-w-content {
    max-width: fit-content;
  }
`;
function MemberName({
  image = '',
  name = '',
  classes,
  styles = {},
}: {
  image: string;
  name: string;
  classes?: string;
  styles?: React.CSSProperties;
}) {
  return (
    <Style>
      <div
        style={styles}
        className={`${classes} border border-secoundery-100 max-w-content rounded-5 me-md-3 ps-md-1 pe-md-3 d-flex align-items-center pictures`}
      >
        {name ? (
          <img
            src={image || '../assets/images/jack.png'}
            alt={name}
            width={`${26}px`}
            height="26px"
          />
        ) : (
          <Skeleton
            circle
            containerClassName="d-flex"
            width={26}
            height={26}
            baseColor={colors.primary_200}
          />
        )}
        <span className="d-none d-md-block fs-16 fw-bold mx-1">
          {name || <Skeleton count={1} width={100} />}
        </span>
      </div>
    </Style>
  );
}

export default MemberName;
