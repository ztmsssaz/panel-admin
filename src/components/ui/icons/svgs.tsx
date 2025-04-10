import { colors } from '../../../layout/theme/colors';

export function ArrowDown({
  color = '#BEBEC8',
  width = 14,
}: {
  color?: string;
  width?: number;
}) {
  return (
    <svg width={width} height={width} viewBox="0 0 12 7" fill="none">
      <path
        d="M10.6199 1.2207L6.81655 5.02404C6.36738 5.4732 5.63238 5.4732 5.18322 5.02404L1.37988 1.2207"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function CommentIcon({
  width = 16,
  color = '#5B5A64',
}: {
  width?: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66634 12.6673H5.33301C2.66634 12.6673 1.33301 12.0007 1.33301 8.66732V5.33398C1.33301 2.66732 2.66634 1.33398 5.33301 1.33398H10.6663C13.333 1.33398 14.6663 2.66732 14.6663 5.33398V8.66732C14.6663 11.334 13.333 12.6673 10.6663 12.6673H10.333C10.1263 12.6673 9.92634 12.7673 9.79967 12.934L8.79967 14.2673C8.35967 14.854 7.63967 14.854 7.19967 14.2673L6.19967 12.934C6.09301 12.7873 5.84634 12.6673 5.66634 12.6673Z"
        stroke={color}
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66699 5.33398H11.3337"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66699 8.66602H8.66699"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function CalendarIcon({ width = 16 }: { width?: number }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33301 1.33398V3.33398"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 1.33398V3.33398"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.33301 6.06055H13.6663"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5.66732V11.334C14 13.334 13 14.6673 10.6667 14.6673H5.33333C3 14.6673 2 13.334 2 11.334V5.66732C2 3.66732 3 2.33398 5.33333 2.33398H10.6667C13 2.33398 14 3.66732 14 5.66732Z"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4635 9.13411H10.4694"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4635 11.1341H10.4694"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99666 9.13411H8.00265"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99666 11.1341H8.00265"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.52987 9.13411H5.53585"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.52987 11.1341H5.53585"
        stroke="#5B5A64"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SearchIcon({
  width = 20,
  color = colors.secondary_400,
}: {
  width?: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.58366 17.4993C13.9559 17.4993 17.5003 13.9549 17.5003 9.58268C17.5003 5.21043 13.9559 1.66602 9.58366 1.66602C5.2114 1.66602 1.66699 5.21043 1.66699 9.58268C1.66699 13.9549 5.2114 17.4993 9.58366 17.4993Z"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3337 18.3327L16.667 16.666"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SingleCheckIcon({ width = 11 }: { width?: number }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.96837 5.96875L9.26525 0.671875C9.39025 0.546875 9.53608 0.484375 9.70275 0.484375C9.86942 0.484375 10.0152 0.546875 10.1402 0.671875C10.2652 0.796875 10.3277 0.945417 10.3277 1.1175C10.3277 1.28958 10.2652 1.43792 10.1402 1.5625L4.40587 7.3125C4.28087 7.4375 4.13504 7.5 3.96837 7.5C3.80171 7.5 3.65587 7.4375 3.53087 7.3125L0.843374 4.625C0.718374 4.5 0.658374 4.35167 0.663374 4.18C0.668374 4.00833 0.733583 3.85979 0.858999 3.73438C0.984416 3.60896 1.13296 3.54646 1.30462 3.54688C1.47629 3.54729 1.62462 3.60979 1.74962 3.73438L3.96837 5.96875Z"
        fill="#3863C6"
      />
    </svg>
  );
}
export function SendIcon({ width = 14 }: { width?: number }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.54977 2.74012L9.91727 0.617616C12.7748 -0.334884 14.3273 1.22512 13.3823 4.08262L11.2598 10.4501C9.83477 14.7326 7.49477 14.7326 6.06977 10.4501L5.43977 8.56012L3.54977 7.93012C-0.732734 6.50512 -0.732734 4.17262 3.54977 2.74012Z"
        fill="white"
      />
    </svg>
  );
}
export function SidebarIcon({
  width = 24,
  color = '#161618',
}: {
  width?: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function ArrowLeftIcon({
  width = 16,
  color = '#161618',
}: {
  width?: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.37967 3.95312L2.33301 7.99979L6.37967 12.0465"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6663 8H2.44629"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function PlusIcon({
  width = 20,
  color = colors.secondary_400,
}: {
  width?: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10H15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FilterIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.0498 1.57422H13.9498C14.7748 1.57422 15.4498 2.24922 15.4498 3.07422V4.72422C15.4498 5.32422 15.0748 6.07422 14.6998 6.44922L11.4748 9.29922C11.0248 9.67422 10.7248 10.4242 10.7248 11.0242V14.2492C10.7248 14.6992 10.4248 15.2992 10.0498 15.5242L8.9998 16.1992C8.02481 16.7992 6.6748 16.1242 6.6748 14.9242V10.9492C6.6748 10.4242 6.3748 9.74922 6.0748 9.37422L3.2248 6.37422C2.8498 5.99922 2.5498 5.32422 2.5498 4.87422V3.14922C2.5498 2.24922 3.2248 1.57422 4.0498 1.57422Z"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.1975 1.57422L4.5 7.49922"
        stroke="#161618"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function VerticalDotsIcon({ width = 20, color = colors.secondary_400 }) {
  return (
    <svg
      width={width}
      height={width}
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
  );
}
export function TrashIcon({ width = 24, color = colors.error_800 }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.0002 6.72998C20.9802 6.72998 20.9502 6.72998 20.9202 6.72998C15.6302 6.19998 10.3502 5.99998 5.12016 6.52998L3.08016 6.72998C2.66016 6.76998 2.29016 6.46998 2.25016 6.04998C2.21016 5.62998 2.51016 5.26998 2.92016 5.22998L4.96016 5.02998C10.2802 4.48998 15.6702 4.69998 21.0702 5.22998C21.4802 5.26998 21.7802 5.63998 21.7402 6.04998C21.7102 6.43998 21.3802 6.72998 21.0002 6.72998Z"
        fill={color}
      />
      <path
        d="M8.49977 5.72C8.45977 5.72 8.41977 5.72 8.36977 5.71C7.96977 5.64 7.68977 5.25 7.75977 4.85L7.97977 3.54C8.13977 2.58 8.35977 1.25 10.6898 1.25H13.3098C15.6498 1.25 15.8698 2.63 16.0198 3.55L16.2398 4.85C16.3098 5.26 16.0298 5.65 15.6298 5.71C15.2198 5.78 14.8298 5.5 14.7698 5.1L14.5498 3.8C14.4098 2.93 14.3798 2.76 13.3198 2.76H10.6998C9.63977 2.76 9.61977 2.9 9.46977 3.79L9.23977 5.09C9.17977 5.46 8.85977 5.72 8.49977 5.72Z"
        fill={color}
      />
      <path
        d="M15.2099 22.7501H8.7899C5.2999 22.7501 5.1599 20.8201 5.0499 19.2601L4.3999 9.19007C4.3699 8.78007 4.6899 8.42008 5.0999 8.39008C5.5199 8.37008 5.8699 8.68008 5.8999 9.09008L6.5499 19.1601C6.6599 20.6801 6.6999 21.2501 8.7899 21.2501H15.2099C17.3099 21.2501 17.3499 20.6801 17.4499 19.1601L18.0999 9.09008C18.1299 8.68008 18.4899 8.37008 18.8999 8.39008C19.3099 8.42008 19.6299 8.77007 19.5999 9.19007L18.9499 19.2601C18.8399 20.8201 18.6999 22.7501 15.2099 22.7501Z"
        fill={color}
      />
      <path
        d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z"
        fill={color}
      />
      <path
        d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z"
        fill={color}
      />
    </svg>
  );
}
export function GripDotsIcon({ width = 24, color = colors.secondary_400 }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 15H6.01M6 9H6.01M12 9H12.01M18 9H18.01M18 15H18.01M12 15H12.01M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9ZM7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15ZM13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9ZM13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15ZM19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9ZM19 15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15C17 14.4477 17.4477 14 18 14C18.5523 14 19 14.4477 19 15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export function GripDotsHorizontalIcon({
  width = 24,
  color = colors.secondary_400,
}) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
    >
      <path
        d="M9 6H9.01M15 6H15.01M15 12H15.01M9 12H9.01M9 18H9.01M15 18H15.01M10 6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5C9.55228 5 10 5.44772 10 6ZM16 6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 14.4477 5 15 5C15.5523 5 16 5.44772 16 6ZM10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12ZM16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12ZM10 18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18C8 17.4477 8.44772 17 9 17C9.55228 17 10 17.4477 10 18ZM16 18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
