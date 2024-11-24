/** The driven port of the application for sending telemetry data. */
export abstract class TelemetryService {
  abstract pageView(path: string): void;
  abstract event(name: string, params?: Record<string, any>): void;
  abstract timing(name: string, value: number): void;
}
