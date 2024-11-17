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
	private gtag: (...args: any[]) => void;
	private dataLayer: any[] = [];

	constructor(measurementId: string) {
		super();
		this.gtag = function gtag() {
			if (typeof window !== 'undefined' && window.dataLayer != this.dataLayer) {
				const script = document.createElement('script');
				script.async = true;
				script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
				document.head.appendChild(script);
				window.dataLayer = this.dataLayer;
			}
			this.dataLayer.push(arguments);
		};
		this.gtag('js', new Date());
		this.gtag('config', measurementId);
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
