import { TelemetryService } from './service';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Google Analytics 4 adapter for the telemetry service.
 */
export class TelemetryServiceGoogleAnalytics extends TelemetryService {
  constructor(measurementId: string) {
    super();
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    this.gtag('js', new Date());
    this.gtag('config', measurementId);
  }

  private gtag(..._: any[]): void {
    window.dataLayer.push(arguments);
  }

  pageView(path: string): void {
    this.gtag('event', 'page_view', {
      page_path: path
    });
  }

  event(name: string, params?: Record<string, any>): void {
    this.gtag('event', name, params);
  }

  timing(name: string, value: number): void {
    this.gtag('event', 'timing_complete', {
      name,
      value
    });
  }
}
