// place files you want to import through the `$lib` alias in this folder.

import {
	API_URL,
	IS_DEVELOPMENT_BUILD
} from './config';
import { Log } from './log';

const init_start = performance.now();

export const log = new Log(IS_DEVELOPMENT_BUILD ? Log.TRACE : Log.INFO);

log.debug(init_start, 'Initializing...');
log.debug('Config:', { IS_DEVELOPMENT_BUILD, API_URL });

log.debug(performance.now() - init_start, 'Initialized.');
