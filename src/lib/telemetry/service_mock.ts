import { log } from '$lib';

import { TelemetryService } from './service';

/**
 * Mock adapter for the telemetry service that logs to the console.
 */
export class TelemetryServiceMock extends TelemetryService {
	pageView(path: string): void {
		log.trace('Telemetry:', 'page_view', path);
	}

	event(name: string, params?: Record<string, any>): void {
		log.trace('Telemetry:', 'event', name, params);
	}

	timing(name: string, value: number): void {
		log.trace('Telemetry:', 'timing_complete', name, value);
	}
}
