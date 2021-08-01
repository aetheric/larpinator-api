import {
	Body,
	Controller,
	HttpException,
	HttpStatus,
	Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginStatus, RegistrationStatus } from './auth.interface';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('register')
	public async register(
		@Body() createUserDto: CreateUserDto,
	): Promise<RegistrationStatus> {
		const result: RegistrationStatus = await this.authService.register(
			createUserDto,
		);
		if (!result.success) {
			throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
		}
		return result;
	}

	@Post('login')
	public async login(@Body() loginUserDto: LoginUserDto): Promise<LoginStatus> {
		return await this.authService.login(loginUserDto);
	}
}
