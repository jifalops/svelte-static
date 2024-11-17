// place files you want to import through the `$lib` alias in this folder.

import {
	API_URL,
	IS_DEVELOPMENT_BUILD
} from './config';
import { Log } from './log';

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

log.info(performance.now(), 'Initialized.');
