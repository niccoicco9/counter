export interface ChuckNorrisJoke {
  value: string;
}

export interface CounterState {
  count: number;
  isAnimating: boolean;
}

export interface JokeState {
  joke: string;
  isLoading: boolean;
}

export type ButtonVariant = 'increment' | 'reset';

export interface ButtonProps {
  variant: ButtonVariant;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  'aria-label'?: string;
}
