import React from 'react';
import type { JokeState } from '../../types';
import './JokeDisplay.scss';

interface JokeDisplayProps {
  jokeState: JokeState;
}

const JokeDisplay: React.FC<JokeDisplayProps> = ({ jokeState }) => {
  const { joke, isLoading } = jokeState;

  if (!joke && !isLoading) {
    return null;
  }

  return (
    <div className="joke-display">
      <h3 className="joke-display__title">Chuck Norris Joke:</h3>
      <div className="joke-display__content">
        {isLoading ? (
          <div className="joke-display__loading">
            <div className="joke-display__loading-dot"></div>
            <div className="joke-display__loading-dot"></div>
            <div className="joke-display__loading-dot"></div>
          </div>
        ) : (
          <p className="joke-display__text">{joke}</p>
        )}
      </div>
    </div>
  );
};

export default JokeDisplay;
