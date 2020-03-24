import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

describe('UserEntity', () => {
    let user: User;

    beforeEach(() => {
        user = new User();
        user.password = 'testPassword';
        user.salt = 'testSalt';
        bcrypt.hash = jest.fn();
    });
    describe('validatePassword', () => {
        it('returns true as password is valid', () => {

        });

        it('returns false as password is not valid', () => {

        });
    });
});
