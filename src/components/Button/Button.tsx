import { memo, useCallback } from 'react';
import type { ButtonProps } from '../../types';
import './Button.scss';

const Button = memo<ButtonProps>(({
  variant,
  onClick,
  disabled = false,
  children,
  'aria-label': ariaLabel,
}) => {
  const buttonClass = `button button--${variant}`;
  
  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);
  
  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
