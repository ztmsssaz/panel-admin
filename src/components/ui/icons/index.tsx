import { colors } from '../../../layout/theme/colors';
import { CommentIcon } from './svgs';

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
export function VideoCameraIcon({
  size = 20,
  classes,
}: {
  size: number;
  classes?: string;
}) {
  return (
    <div
      className={`${classes} `}
      style={{
        width: size * 2 + 'px',
        height: size * 2 + 'px',
        position: 'relative',
      }}
    >
      <div className="centered">
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.442 17.5158H5.17533C2.54199 17.5158 1.66699 15.7658 1.66699 14.0074V6.99076C1.66699 4.35742 2.54199 3.48242 5.17533 3.48242H10.442C13.0753 3.48242 13.9503 4.35742 13.9503 6.99076V14.0074C13.9503 16.6408 13.067 17.5158 10.442 17.5158Z"
            stroke="#161618"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.2669 14.7501L13.9502 13.1251V7.86678L16.2669 6.24178C17.4002 5.45011 18.3335 5.93344 18.3335 7.32511V13.6751C18.3335 15.0668 17.4002 15.5501 16.2669 14.7501Z"
            stroke="#161618"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.58301 9.66602C10.2734 9.66602 10.833 9.10637 10.833 8.41602C10.833 7.72566 10.2734 7.16602 9.58301 7.16602C8.89265 7.16602 8.33301 7.72566 8.33301 8.41602C8.33301 9.10637 8.89265 9.66602 9.58301 9.66602Z"
            stroke="#161618"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
export function PhoneIcon({
  size = 20,
  classes,
}: {
  size: number;
  classes?: string;
}) {
  return (
    <div
      className={`${classes} `}
      style={{
        width: size * 2 + 'px',
        height: size * 2 + 'px',
        position: 'relative',
      }}
    >
      <div className="centered">
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3087 15.7743C18.3087 16.0743 18.242 16.3827 18.1003 16.6827C17.9587 16.9827 17.7753 17.266 17.5337 17.5327C17.1253 17.9827 16.6753 18.3077 16.167 18.516C15.667 18.7244 15.1253 18.8327 14.542 18.8327C13.692 18.8327 12.7837 18.6327 11.8253 18.2244C10.867 17.816 9.90866 17.266 8.95866 16.5744C8.00033 15.8744 7.09199 15.0993 6.22533 14.241C5.36699 13.3743 4.59199 12.466 3.90033 11.516C3.21699 10.566 2.66699 9.61602 2.26699 8.67435C1.86699 7.72435 1.66699 6.81602 1.66699 5.94935C1.66699 5.38268 1.76699 4.84102 1.96699 4.34102C2.16699 3.83268 2.48366 3.36602 2.92533 2.94935C3.45866 2.42435 4.04199 2.16602 4.65866 2.16602C4.89199 2.16602 5.12533 2.21602 5.33366 2.31602C5.55033 2.41602 5.74199 2.56602 5.89199 2.78268L7.82533 5.50768C7.97533 5.71602 8.08366 5.90768 8.15866 6.09102C8.23366 6.26602 8.27533 6.44102 8.27533 6.59935C8.27533 6.79935 8.21699 6.99935 8.10033 7.19102C7.99199 7.38268 7.83366 7.58268 7.63366 7.78268L7.00033 8.44102C6.90866 8.53268 6.86699 8.64102 6.86699 8.77435C6.86699 8.84102 6.87533 8.89935 6.89199 8.96602C6.91699 9.03268 6.94199 9.08268 6.95866 9.13268C7.10866 9.40768 7.36699 9.76602 7.73366 10.1993C8.10866 10.6327 8.50866 11.0743 8.94199 11.516C9.39199 11.9577 9.82533 12.366 10.267 12.741C10.7003 13.1077 11.0587 13.3577 11.342 13.5077C11.3837 13.5243 11.4337 13.5493 11.492 13.5743C11.5587 13.5993 11.6253 13.6077 11.7003 13.6077C11.842 13.6077 11.9503 13.5577 12.042 13.466L12.6753 12.841C12.8837 12.6327 13.0837 12.4743 13.2753 12.3743C13.467 12.2577 13.6587 12.1993 13.867 12.1993C14.0253 12.1993 14.192 12.2327 14.3753 12.3077C14.5587 12.3827 14.7503 12.491 14.9587 12.6327L17.717 14.591C17.9337 14.741 18.0837 14.916 18.1753 15.1243C18.2587 15.3327 18.3087 15.541 18.3087 15.7743Z"
            stroke="#161618"
            strokeWidth="1.4"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
}
export function VerticalDots({
  size = 20,
  classes,
  color = `${colors.secondary_700}`,
}: {
  size: number;
  classes?: string;
  color: string;
}) {
  return (
    <div
      className={`${classes} `}
      style={{
        width: size * 2 + 'px',
        height: size * 2 + 'px',
        position: 'relative',
      }}
    >
      <div className="centered">
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33301 16.3333C8.33301 17.25 9.08301 18 9.99967 18C10.9163 18 11.6663 17.25 11.6663 16.3333C11.6663 15.4167 10.9163 14.6667 9.99967 14.6667C9.08301 14.6667 8.33301 15.4167 8.33301 16.3333Z"
            fill={color}
          />
          <path
            d="M8.33301 4.66732C8.33301 5.58398 9.08301 6.33398 9.99967 6.33398C10.9163 6.33398 11.6663 5.58398 11.6663 4.66732C11.6663 3.75065 10.9163 3.00065 9.99967 3.00065C9.08301 3.00065 8.33301 3.75065 8.33301 4.66732Z"
            fill={color}
          />
          <path
            d="M8.33301 10.4993C8.33301 11.416 9.08301 12.166 9.99967 12.166C10.9163 12.166 11.6663 11.416 11.6663 10.4993C11.6663 9.58268 10.9163 8.83268 9.99967 8.83268C9.08301 8.83268 8.33301 9.58268 8.33301 10.4993Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
}
export function RingIcon({
  size = 20,
  classes,
  color = '#161618',
}: {
  size: number;
  classes?: string;
  color?: string;
}) {
  return (
    <div
      className={`${classes} `}
      style={{
        width: size * 2 + 'px',
        height: size * 2 + 'px',
        position: 'relative',
      }}
    >
      <div className="centered">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0165 2.42578C7.25816 2.42578 5.0165 4.66745 5.0165 7.42578V9.83411C5.0165 10.3424 4.79983 11.1174 4.5415 11.5508L3.58316 13.1424C2.9915 14.1258 3.39983 15.2174 4.48316 15.5841C8.07483 16.7841 11.9498 16.7841 15.5415 15.5841C16.5498 15.2508 16.9915 14.0591 16.4415 13.1424L15.4832 11.5508C15.2332 11.1174 15.0165 10.3424 15.0165 9.83411V7.42578C15.0165 4.67578 12.7665 2.42578 10.0165 2.42578Z"
            stroke={color}
            strokeWidth="1.4"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M11.5579 2.66719C11.2996 2.59219 11.0329 2.53385 10.7579 2.50052C9.95794 2.40052 9.19128 2.45885 8.47461 2.66719C8.71628 2.05052 9.31628 1.61719 10.0163 1.61719C10.7163 1.61719 11.3163 2.05052 11.5579 2.66719Z"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5166 15.8828C12.5166 17.2578 11.3916 18.3828 10.0166 18.3828C9.33327 18.3828 8.69993 18.0995 8.24993 17.6495C7.79993 17.1995 7.5166 16.5661 7.5166 15.8828"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
}
export function MessageIcon({
  size = 20,
  classes,
  color = '#161618',
}: {
  size: number;
  classes?: string;
  color?: string;
}) {
  return (
    <div
      className={`${classes} `}
      style={{
        width: size * 2 + 'px',
        height: size * 2 + 'px',
        position: 'relative',
      }}
    >
      <div className="centered">
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.08366 15.8327H6.66699C3.33366 15.8327 1.66699 14.9993 1.66699 10.8327V6.66602C1.66699 3.33268 3.33366 1.66602 6.66699 1.66602H13.3337C16.667 1.66602 18.3337 3.33268 18.3337 6.66602V10.8327C18.3337 14.166 16.667 15.8327 13.3337 15.8327H12.917C12.6587 15.8327 12.4087 15.9577 12.2503 16.166L11.0003 17.8327C10.4503 18.566 9.55033 18.566 9.00033 17.8327L7.75033 16.166C7.61699 15.9827 7.30866 15.8327 7.08366 15.8327Z"
            stroke={color}
            strokeWidth="1.4"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83301 6.66602H14.1663"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83301 10.834H10.833"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
