export const API_URL = import.meta.env.VITE_API_URL as string;

export const IS_DEVELOPMENT_BACKEND =
	API_URL.includes('localhost') ||
	API_URL.includes('127.0.0.1') ||
	API_URL.includes('dummyjson.com');

// https://vite.dev/guide/env-and-mode#modes
export const IS_DEVELOPMENT_BUILD = import.meta.env.DEV as boolean;
