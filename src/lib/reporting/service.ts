/** The driven port of the application for reporting errors to an external service. */
export abstract class ReportingService {
	abstract reportError(error: any, message?: string): Promise<void>;
}
