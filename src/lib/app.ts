import type { TelemetryService } from '$lib/telemetry/service';

export class App {
	telemetry: TelemetryService;

	constructor(telemetry: TelemetryService) {
		this.telemetry = telemetry;
	}
}
