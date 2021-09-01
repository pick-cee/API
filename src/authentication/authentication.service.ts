import { HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AccManService } from 'src/AccountManager/Acc_Man-Services';
export class AuthenticationService {
  constructor(private readonly accmanService: AccManService) {}

  public async register(accmanData) {
    const hashedPassword = await bcrypt.hash(accmanData.password, 10);
    try {
      const createdUser = await this.accmanService.createaccMan({
        ...accmanData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      return error;
    }
  }

  public async getAuthenticatedUser(email: string, hashedPassword: string) {
    try {
      const user = await this.accmanService.getByEmail(email);
      const isPasswordMatching = await bcrypt.compare(
        hashedPassword,
        user.password,
      );
      if (!isPasswordMatching) {
        throw new HttpException(
          'Wrong credentials provided',
          HttpStatus.BAD_REQUEST,
        );
      }
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

/*const passwordInPlaintext = '12345678';
const hash = async () => {
  await bcrypt.hash(passwordInPlaintext, 10);
};
const Hash: any = hash;

const isPasswordMatching = async () => {
  await bcrypt.compare(passwordInPlaintext, Hash);
};

console.log(isPasswordMatching); // true*/
