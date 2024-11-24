import { log } from '$lib';

import { ReportingService } from './service';

/**
 * Mock adapter for the reporting service that logs to the console.
 */
export class ReportingServiceMock extends ReportingService {
	override async reportError(error: any, message?: string): Promise<void> {
		log.error('Reporting:', message, error);
	}
}
