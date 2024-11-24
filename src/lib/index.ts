// place files you want to import through the `$lib` alias in this folder.

import { base } from '$app/paths';

import { AdCampaignServiceGoogleAds } from './ad_campaign/service_google_ads';
import { AdCampaignServiceMock } from './ad_campaign/service_mock';
import { AdDisplayServiceGoogleAdsense } from './ad_display/service_google_adsense';
import { AdDisplayServiceMock } from './ad_display/service_mock';
import { App } from './app';
import {
  API_URL,
  BUILD_MODE,
  GOOGLE_ADS_ID,
  GOOGLE_ADSENSE_ID,
  GOOGLE_ANALYTICS_ID,
  IS_LOCAL_ENVIRONMENT,
  IS_PRODUCTION_BUILD,
  SENTRY_DSN
} from './config';
import { Log } from './log';
import type { ReportingService } from './reporting/service';
import { ReportingServiceMock } from './reporting/service_mock';
import { ReportingServiceSentry } from './reporting/service_sentry';
import { TelemetryServiceGoogleAnalytics } from './telemetry/service_google_analytics';
import { TelemetryServiceMock } from './telemetry/service_mock';

const init_start = performance.now();

export const log = new Log(IS_PRODUCTION_BUILD ? Log.INFO : Log.TRACE);

log.debug(init_start, 'Initializing...');
log.debug('Config:', {
  API_URL,
  BUILD_MODE,
  IS_PRODUCTION_BUILD,
  IS_LOCAL_ENVIRONMENT,
  GOOGLE_ANALYTICS_ID,
  GOOGLE_ADS_ID,
  GOOGLE_ADSENSE_ID,
  SENTRY_DSN
});

// Initialize app with services.
const reporting: ReportingService =
  SENTRY_DSN && IS_PRODUCTION_BUILD && !IS_LOCAL_ENVIRONMENT
    ? new ReportingServiceSentry(SENTRY_DSN)
    : new ReportingServiceMock();

let _app;
try {
  _app = new App(
    GOOGLE_ADS_ID && IS_PRODUCTION_BUILD && !IS_LOCAL_ENVIRONMENT
      ? new AdCampaignServiceGoogleAds(GOOGLE_ADS_ID)
      : new AdCampaignServiceMock(),
    GOOGLE_ADSENSE_ID && IS_PRODUCTION_BUILD && !IS_LOCAL_ENVIRONMENT
      ? new AdDisplayServiceGoogleAdsense(GOOGLE_ADSENSE_ID)
      : new AdDisplayServiceMock(),
    reporting,
    GOOGLE_ANALYTICS_ID && IS_PRODUCTION_BUILD && !IS_LOCAL_ENVIRONMENT
      ? new TelemetryServiceGoogleAnalytics(GOOGLE_ANALYTICS_ID)
      : new TelemetryServiceMock()
  );
} catch (error) {
  reporting.reportError(error, 'Failed to initialize app.');
  throw error;
}
export const app = _app;

log.info(performance.now(), base ? `Initialized at ${base}.` : 'Initialized.');
