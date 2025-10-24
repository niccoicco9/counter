import React, { lazy, Suspense } from 'react';
import type { JokeState } from '../../types';
import './LazyJokeDisplay.scss';

const JokeDisplay = lazy(() => import('../JokeDisplay/JokeDisplay'));

interface LazyJokeDisplayProps {
  jokeState: JokeState;
}

const JokeSkeleton = () => (
  <div className="joke-skeleton">
    <div className="joke-skeleton__title"></div>
    <div className="joke-skeleton__text"></div>
    <div className="joke-skeleton__text joke-skeleton__text--short"></div>
  </div>
);

const LazyJokeDisplay: React.FC<LazyJokeDisplayProps> = ({ jokeState }) => {
  if (!jokeState.joke && !jokeState.isLoading) {
    return null;
  }

  return (
    <Suspense fallback={<JokeSkeleton />}>
      <JokeDisplay jokeState={jokeState} />
    </Suspense>
  );
};

export default LazyJokeDisplay;
