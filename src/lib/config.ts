/** See https://vite.dev/guide/env-and-mode#modes */
export const IS_DEVELOPMENT_BUILD = import.meta.env.DEV as boolean;

/** The base URL for the backend API. */
export const API_URL = import.meta.env.VITE_API_URL as string;
