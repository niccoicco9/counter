export const config = {
  api: {
    chuckNorrisUrl: import.meta.env.VITE_CHUCK_NORRIS_API_URL || 'https://api.chucknorris.io/jokes/random',
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Counter App',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  },
  debug: {
    enabled: import.meta.env.VITE_DEBUG_MODE === 'true',
  },
} as const;
