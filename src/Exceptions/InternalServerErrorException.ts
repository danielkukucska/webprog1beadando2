import HttpException from "./HttpException";

class InternalServerErrorException extends HttpException {
    constructor() {
        super(500, "Internal Server Error.");
    }
}

export default InternalServerErrorException;
