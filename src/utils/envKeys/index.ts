const _env = import.meta.env;

const envKeys = {
  sentryDsn: _env.VITE_SENTRY_DSN,
  tolgee: {
    apiKey: _env.VITE_APP_TOLGEE_API_KEY,
    apiUrl: _env.VITE_APP_TOLGEE_API_URL,
    baseLanguage: 'en',
  },
} as const;

export default envKeys;
