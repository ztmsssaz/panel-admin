import { ReactNode } from 'react';
import { colors } from '../../layout/theme/colors';
import { Button } from 'react-bootstrap';

export function InfoButton({
  children,
  type = 'button',
  classes,
  onClick,
  minHeight = 39,
}: {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  classes?: string;
  onClick?: () => {};
  minHeight?: number;
}) {
  return (
    <Button
      className={`${classes} text-white fs-14 rounded-10 bg-info-600 px-2 py-1`}
      type={type}
      style={{
        outline: `solid 1px ${colors.info_600}`,
        border: 'solid 1px rgba(225, 225, 225, 0.8)',
        minWidth: 'max-content',
        minHeight: minHeight,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
