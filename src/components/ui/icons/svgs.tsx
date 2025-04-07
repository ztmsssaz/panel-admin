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
export function SearchIcon({ width = 12 }: { width?: number }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0C6.41421 0 6.75 0.335786 6.75 0.75V11.25C6.75 11.6642 6.41421 12 6 12C5.58579 12 5.25 11.6642 5.25 11.25V0.75C5.25 0.335786 5.58579 0 6 0Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 6C0 5.58579 0.335786 5.25 0.75 5.25H11.25C11.6642 5.25 12 5.58579 12 6C12 6.41421 11.6642 6.75 11.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6Z"
        fill="white"
      />
    </svg>
  );
}
export function PlusIcon({ width = 20 }: { width?: number }) {
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
        stroke="#161618"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3337 18.3327L16.667 16.666"
        stroke="#161618"
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
      <path d="M3 7H21" stroke={color} strokWidth="1.5" strokeLinecap="round" />
      <path
        d="M3 12H21"
        stroke={color}
        stroke-width="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke={color}
        stroke-width="1.5"
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
