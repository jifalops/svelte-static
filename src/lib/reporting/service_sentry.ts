import * as Sentry from '@sentry/browser';

import { ReportingService } from './service';

/**
 * Sentry adapter for the reporting service.
 */
export class ReportingServiceSentry extends ReportingService {
	constructor(dsn: string) {
		super();
		Sentry.init({ dsn });
	}

	override async reportError(error: any, message?: string): Promise<void> {
		if (message) {
			Sentry.captureException(error, { extra: { message: message } });
		} else {
			Sentry.captureException(error);
		}
	}
}
