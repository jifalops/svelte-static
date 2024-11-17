import { log } from '$lib';

export type ErrorData = {
	/** A well-defined error code such as `user/not-found` */
	code: string;

	/** A message to log to the console. */
	logMessage?: string;

	/** A message for displaying to the user. */
	displayMessage?: string;

	/** The cause of the error. */
	exception?: Error;

	/** Any additional data. */
	extra?: any;
};

/** The base class for errors in the application. */
export class AppError extends Error {
	constructor(data: ErrorData) {
		super(data.code);
		this.data = data;
		log.error(data.code, data.logMessage ?? data.extra, data.exception);
	}
	data: ErrorData;
}
