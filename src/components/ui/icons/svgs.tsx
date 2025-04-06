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
