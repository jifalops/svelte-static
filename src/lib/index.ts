// place files you want to import through the `$lib` alias in this folder.

import { App } from './app';
import {
	API_URL,
	GA_MEASUREMENT_ID,
	IS_DEVELOPMENT_BUILD
} from './config';
import { Log } from './log';
import { TelemetryServiceConsole } from './telemetry/service_console';
import { TelemetryServiceGoogleAnalytics } from './telemetry/service_google_analytics';

const init_start = performance.now();

/** Check if running on localhost or a local network. */
export function isLocalEnvironment(): boolean {
	if (typeof window === 'undefined') return false;
	return (
		window.location.hostname === 'localhost' ||
		window.location.hostname === '127.0.0.1' ||
		window.location.hostname.includes('.local')
	);
}

export const log = new Log(IS_DEVELOPMENT_BUILD ? Log.TRACE : Log.INFO);

log.debug(init_start, 'Initializing...');
log.debug('Config:', {
	API_URL,
	IS_DEVELOPMENT_BUILD,
	'isLocalEnvironment()': isLocalEnvironment()
});

export const app = new App(
	GA_MEASUREMENT_ID
		? new TelemetryServiceGoogleAnalytics(GA_MEASUREMENT_ID)
		: new TelemetryServiceConsole()
);

log.debug(performance.now(), 'Initialized.');
