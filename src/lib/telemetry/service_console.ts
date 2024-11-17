import { log } from '$lib';

import { TelemetryService } from './service';

/**
 * Console adapter for the telemetry service.
 */
export class TelemetryServiceConsole extends TelemetryService {
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
