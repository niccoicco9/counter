import React from 'react';
import Button from '../Button/Button';
import './ButtonContainer.css';

interface ButtonContainerProps {
  onIncrement: () => void;
  onReset: () => void;
  isIncrementDisabled?: boolean;
  isResetDisabled?: boolean;
  incrementButtonText?: string;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  onIncrement,
  onReset,
  isIncrementDisabled = false,
  isResetDisabled = false,
  incrementButtonText = 'Increment',
}) => {
  return (
    <div className="button-container">
      <Button
        variant="increment"
        onClick={onIncrement}
        disabled={isIncrementDisabled}
        aria-label="Increment counter by 1"
      >
        {incrementButtonText}
      </Button>
      
      <Button
        variant="reset"
        onClick={onReset}
        disabled={isResetDisabled}
        aria-label="Reset counter to zero"
      >
        Reset
      </Button>
    </div>
  );
};

export default ButtonContainer;
