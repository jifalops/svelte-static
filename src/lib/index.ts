// place files you want to import through the `$lib` alias in this folder.

import { base } from '$app/paths';

import { AdvertisingServiceGoogleAdsense } from './advertising/service_google_adsense';
import { AdvertisingServiceMock } from './advertising/service_mock';
import { App } from './app';
import {
	ADSENSE_CLIENT_ID,
	API_URL,
	BUILD_MODE,
	GA_MEASUREMENT_ID,
	IS_LOCAL_ENVIRONMENT,
	IS_PRODUCTION_BUILD
} from './config';
import { Log } from './log';
import { TelemetryServiceGoogleAnalytics } from './telemetry/service_google_analytics';
import { TelemetryServiceMock } from './telemetry/service_mock';

const init_start = performance.now();

export const log = new Log(IS_PRODUCTION_BUILD ? Log.INFO : Log.TRACE);

log.debug(init_start, 'Initializing...');
log.debug('Config:', {
	BUILD_MODE,
	API_URL,
	IS_PRODUCTION_BUILD,
	IS_LOCAL_ENVIRONMENT,
	GA_MEASUREMENT_ID,
	ADSENSE_CLIENT_ID
});

export const app = new App(
	ADSENSE_CLIENT_ID && IS_PRODUCTION_BUILD && !IS_LOCAL_ENVIRONMENT
		? new AdvertisingServiceGoogleAdsense(ADSENSE_CLIENT_ID)
		: new AdvertisingServiceMock(),
	GA_MEASUREMENT_ID && IS_PRODUCTION_BUILD && !IS_LOCAL_ENVIRONMENT
		? new TelemetryServiceGoogleAnalytics(GA_MEASUREMENT_ID)
		: new TelemetryServiceMock()
);

log.info(performance.now(), base ? `Initialized at ${base}.` : 'Initialized.');
