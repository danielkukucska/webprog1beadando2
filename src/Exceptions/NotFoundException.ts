import HttpException from "./HttpException";

class NotFoundException extends HttpException {
    constructor(id: number) {
        super(404, `Item with id ${id} not found`);
    }
}

export default NotFoundException;
