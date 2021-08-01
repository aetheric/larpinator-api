import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UserDto } from '../users/dto/user.dto';
import { JwtPayload, LoginStatus, RegistrationStatus } from './auth.interface';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {}

	async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
		let status: RegistrationStatus = {
			success: true,
			message: 'user registered',
		};
		try {
			await this.usersService.create(userDto);
		} catch (err) {
			status = {
				success: false,
				message: err,
			};
		}
		return status;
	}

	async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
		// find user in db
		const user = await this.usersService.findByLogin(loginUserDto);

		// generate and sign token
		const token = this._createToken(user);

		return {
			username: user.email,
			...token,
		};
	}

	private _createToken({ email }: UserDto): any {
		const user: JwtPayload = { email };
		const accessToken = this.jwtService.sign(user);
		return {
			expiresIn: process.env.JWT_EXPIRES_IN,
			accessToken,
		};
	}

	async validateUser(payload: JwtPayload): Promise<UserDto> {
		const user = await this.usersService.findByPayload(payload);
		if (!user) {
			throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
		}
		return user;
	}
}
