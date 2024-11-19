import type { AdvertisingService } from './advertising/service';
import type { TelemetryService } from './telemetry/service';

export class App {
  advertising: AdvertisingService;
  telemetry: TelemetryService;

  constructor(advertising: AdvertisingService, telemetry: TelemetryService) {
    this.advertising = advertising;
    this.telemetry = telemetry;
  }
}
