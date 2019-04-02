import { ErrorCode, ErrorMessage } from "../../constants";
import * as HttpStatus from 'http-status-codes';
class BaseError extends Error {
    private readonly errorCode;
    private readonly status;
    private readonly details;

    constructor(details, message, errorCode, status) {
        super(message);
        this.details = details;
        this.message = message;
        this.errorCode = errorCode;
        this.status = status;
    }

    format() {
        return {
            error_message: this.message,
            error_code: this.errorCode,
            status: this.status,
            details: this.details,
        }
    }

    toString() {
        return JSON.stringify(this.format());
    }
}

export class ValidationError extends BaseError {
    constructor(details, message = ErrorMessage.VALIDATION_ERROR, errorCode = ErrorCode.VALIDATION_ERROR, status = HttpStatus.BAD_REQUEST) {
        super(details ,message, errorCode, status);
    }
}

export class NotFoundError extends BaseError {
    constructor(details, message = ErrorMessage.NOT_FOUND, errorCode = ErrorCode.NOT_FOUND, status = HttpStatus.NOT_FOUND) {
           super(details, message, errorCode, status);
    }
}