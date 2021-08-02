import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { RegisterStatusDto } from './dto/register-status.dto';
import { RegisterInput } from './dto/register.input';
import { HttpException, HttpStatus } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { LoginStatusDto } from './dto/login-status.dto';

@Resolver((of) => User)
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Mutation((returns) => RegisterStatusDto)
	async register(
		@Args('input') input: RegisterInput,
	): Promise<RegisterStatusDto> {
		const result: RegisterStatusDto = await this.authService.register(input);
		if (!result.success) {
			throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
		}
		return result;
	}

	@Mutation((returns) => LoginStatusDto)
	async login(@Args('input') input: LoginInput): Promise<LoginStatusDto> {
		return await this.authService.login(input);
	}
}
