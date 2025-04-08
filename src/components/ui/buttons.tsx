import { ReactNode } from 'react';
import { colors } from '../../layout/theme/colors';
import { Button } from 'react-bootstrap';

export function InfoButton({
  children,
  type = 'button',
  classes,
  onClick,
}: {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  classes?: string;
  onClick?: () => {};
}) {
  return (
    <Button
      className={`${classes} border text-white border-secondary-200 fs-14 rounded-10 bg-info-600 px-2 py-1`}
      type={type}
      style={{
        outline: `solid 1px ${colors.info_600}`,
        minWidth: '40px',
        minHeight: '40px',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
