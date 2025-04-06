import { colors } from '../../layout/theme/colors';
import { PhoneIcon, VerticalDots, VideoCameraIcon } from '../ui/icons';

function CallAndOthers() {
  const isMobile = window.innerWidth < 768;
  const mobileClasses = 'rounded-10 rounded-10 light-shadow';
  return (
    <div className="d-flex align-items-center">
      <VideoCameraIcon
        size={isMobile ? 16 : 20}
        classes={`${isMobile ? mobileClasses : 'border border-secondary-100 border-2 rounded-12'} cursor-pointer me-1`}
      />
      <PhoneIcon
        size={isMobile ? 16 : 20}
        classes={`${isMobile ? mobileClasses : 'border border-secondary-100 border-2 rounded-12'} cursor-pointer me-1`}
      />
      <VerticalDots
        color={colors.secondary_900}
        size={isMobile ? 16 : 20}
        classes={`${isMobile ? mobileClasses : 'border border-secondary-100 border-2 rounded-12'} cursor-pointer me-1`}
      />
    </div>
  );
}

export default CallAndOthers;
