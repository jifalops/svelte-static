/** See https://vite.dev/guide/env-and-mode#modes */
export const BUILD_MODE = import.meta.env.MODE;
export const IS_PRODUCTION_BUILD = BUILD_MODE === 'production';

/** Check if running on localhost or a local network. */
export const IS_LOCAL_ENVIRONMENT =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.includes('.local');

/** The base URL for the backend API. */
export const API_URL = import.meta.env.VITE_API_URL as string;

/** The Google Analytics measurement ID. */
export const GOOGLE_ANALYTICS_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID as string;

/** The Google Ads ID. */
export const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string;

/** The AdSense Client ID. */
export const GOOGLE_ADSENSE_ID = import.meta.env.VITE_GOOGLE_ADSENSE_ID as string;

/** The Sentry DSN. */
export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN as string;
