import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './auth.interface';
import { RegisterInput } from './dto/register.input';
import { RegisterStatusDto } from './dto/register-status.dto';
import { LoginStatusDto } from './dto/login-status.dto';
import { User } from '../users/entities/user.entity';
import { LoginInput } from './dto/login.input';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {}

	async register(registerInput: RegisterInput): Promise<RegisterStatusDto> {
		let status: RegisterStatusDto = {
			success: true,
			message: 'user registered',
		};
		try {
			await this.usersService.create(registerInput);
		} catch (err) {
			status = {
				success: false,
				message: err,
			};
		}
		return status;
	}

	async login(loginInput: LoginInput): Promise<LoginStatusDto> {
		// find user in db
		const user = await this.usersService.findByLogin(loginInput);

		// generate and sign token
		const token = this._createToken(user);

		return {
			email: user.email,
			...token,
		};
	}

	private _createToken({ email }: User): any {
		const user: JwtPayload = { email };
		const accessToken = this.jwtService.sign(user);
		return {
			expiresIn: process.env.JWT_EXPIRES_IN,
			accessToken,
		};
	}

	async validateUser(payload: JwtPayload): Promise<User> {
		const user = await this.usersService.findByPayload(payload);
		if (!user) {
			throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
		}
		return user;
	}
}
