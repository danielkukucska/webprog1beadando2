import HttpException from "./HttpException";

class ValidationException extends HttpException {
    constructor(errors: {key: string, value: any}[]) {
        super(422, "Validation failed.");
    }
}

export default ValidationException;
