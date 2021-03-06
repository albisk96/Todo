import HttpException from './HttpException';

class WrongUserCredentialsException extends HttpException {
    constructor() {
        super(401, 'Invalid username or password');
    }
}

export default WrongUserCredentialsException;
