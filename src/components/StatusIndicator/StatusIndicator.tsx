import React from 'react';
import type { CounterState } from '../../types';
import './StatusIndicator.css';

interface StatusIndicatorProps {
  counterState: CounterState;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ counterState }) => {
  const { count } = counterState;
  const isZero = count === 0;

  return (
    <div className="status-indicator">
      <span className="status-indicator__text">
        {isZero ? 'Counter is at zero' : 'Counter is active'}
      </span>
    </div>
  );
};

export default StatusIndicator;
