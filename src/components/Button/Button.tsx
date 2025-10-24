import React from 'react';
import type { ButtonProps } from '../../types';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  disabled = false,
  children,
  'aria-label': ariaLabel,
}) => {
  const buttonClass = `button button--${variant}`;
  
  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
