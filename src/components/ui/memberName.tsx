import { styled } from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { colors } from '../../layout/theme/colors';

const Style = styled.div`
  .height-34 {
    height: 34px;
  }
  .max-w-content {
    max-width: fit-content;
  }
`;
function MemberName({
  image = '',
  name = '',
}: {
  image: string;
  name: string;
}) {
  return (
    <Style>
      <div className="border border-secoundery-100 max-w-content rounded-5 me-3 ps-1 pe-3 d-flex align-items-center height-34">
        {name ? (
          <img
            src={image || '../assets/images/jack.png'}
            alt=""
            width={`${26}px`}
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
        <span className="fs-16 fw-bold mx-1">
          {name || <Skeleton count={1} width={100} />}
        </span>
      </div>
    </Style>
  );
}

export default MemberName;
