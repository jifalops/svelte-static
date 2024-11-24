import { log } from '$lib';

import { TelemetryService } from './service';

/**
 * Mock adapter for the telemetry service that logs to the console.
 */
export class TelemetryServiceMock extends TelemetryService {
  pageView(path: string): void {
    log.debug('Telemetry:', 'page_view', path);
  }

  event(name: string, params?: Record<string, any>): void {
    log.debug('Telemetry:', 'event', name, params);
  }

  timing(name: string, value: number): void {
    log.debug('Telemetry:', 'timing_complete', name, value);
  }
}
