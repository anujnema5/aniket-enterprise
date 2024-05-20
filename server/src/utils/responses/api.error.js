class CustomError extends Error {
    statusCode

    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}

class ApiError {
    statusCode;
    message;
    data;
    success;
    errors;

    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
    ) {
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;
    }
}

function getStatusCodeFromError(error) {
    if (error.message.includes('validation')) {
        return 400;
    } else if (error.message.includes('unauthorized')) {
        return 401;
    } else {
        return 500;
    }
}


export { ApiError, CustomError, getStatusCodeFromError }