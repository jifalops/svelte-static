export abstract class TelemetryService {
  abstract pageView(path: string): void;
  abstract event(name: string, params?: Record<string, any>): void;
  abstract timing(name: string, value: number): void;
}
