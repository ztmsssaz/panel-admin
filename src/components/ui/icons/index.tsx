import { colors } from '../../../layout/theme/colors';

export function Check({ size = 28 }: { size: number }) {
  return (
    <div
      className="rounded-10"
      style={{
        width: size + 'px',
        height: size + 'px',
        backgroundImage: `url('../../../assets/images/bgb.png')`,
        backgroundColor: '#346EF3',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div
        className="centered rounded-2"
        style={{
          width: `${size - 10}px`,
          height: `${size - 10}px`,
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255, 255, 255, 0.5))`,
        }}
      >
        <svg
          className="centered"
          width={size - 10}
          height={size - 10}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3701 8.88H17.6201"
            stroke="#2362f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.37988 8.88L7.12988 9.63L9.37988 7.38"
            stroke="#2362f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3701 15.88H17.6201"
            stroke="#2362f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.37988 15.88L7.12988 16.63L9.37988 14.38"
            stroke="#2362f5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
export function Doc({
  size = 28,
  iconSize = 12,
  bacColor = '#346EF3',
  classes,
}: {
  size?: number;
  iconSize?: number;
  classes?: string;
  bacColor?: string;
}) {
  return (
    <div
      className={`${classes} transparent-light-gray-border`}
      style={{
        width: size + 'px',
        height: size + 'px',
        backgroundImage: `url('../../../assets/images/bgb.png')`,
        backgroundColor: `${bacColor}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        className="centered"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4345 4.03448C19.5668 4.2424 19.3401 4.48461 19.0998 4.43C18.6298 4.29 18.1098 4.22 17.5798 4.22H14.2796C14.1223 4.22 13.9743 4.14605 13.8798 4.02037L12.7298 2.49C12.589 2.29044 12.7221 2 12.9664 2H15.7198C17.2808 2 18.6559 2.81073 19.4345 4.03448Z"
          fill="#fff"
        />
        <path
          d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.33 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.67 12.93 5.26L11.53 3.4C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54ZM14.39 16.34H9.6C9.21 16.34 8.91 16.03 8.91 15.64C8.91 15.26 9.21 14.94 9.6 14.94H14.39C14.78 14.94 15.09 15.26 15.09 15.64C15.09 16.03 14.78 16.34 14.39 16.34Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}
export function Logo({
  size = 28,
  classes,
}: {
  size: number;
  classes?: string;
}) {
  return (
    <div
      className={`rounded-10 ${classes} `}
      style={{
        width: size + 'px',
        height: size + 'px',
        backgroundImage: `url('../../../assets/images/bgb.png'), linear-gradient(40deg, rgba(200,200,200,0.1), rgba(200, 200, 200, 0.3))`,
        backgroundColor: `${colors.secondary_700}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="centered">
        <img width={size - 15} src="../../../assets/images/triangle.png" />
      </div>
    </div>
  );
}
