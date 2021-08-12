import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { User } from './entities/user.entity';
import { LoginInput } from '../auth/dto/login.input';
import { RegisterInput } from '../auth/dto/register.input';

@Injectable()
export class UsersService {
	constructor(private readonly userRepo: UserRepository) {}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}

	async findOne(options?: object): Promise<User> {
		return await this.userRepo.findOne(options);
	}

	async findAll(options?: object): Promise<User[]> {
		return await this.userRepo.find(options);
	}

	async findByLogin({ email, password }: LoginInput): Promise<User> {
		const user = await this.userRepo.findOne({ where: { email } });

		if (!user) {
			throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
		}

		// compare passwords
		const areEqual = await user.comparePassword(password);

		if (!areEqual) {
			throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
		}

		return user;
	}

	async findByPayload({ email }: any): Promise<User> {
		return await this.findOne({
			where: { email },
		});
	}

	async create(registerInput: RegisterInput): Promise<User> {
		const { name, email, password } = registerInput;

		// check if the user exists in the db
		const userInDb = await this.userRepo.findOne({
			where: { email },
		});
		if (userInDb) {
			throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
		}

		const user: User = await this.userRepo.create({
			name,
			email,
			password,
		});
		await this.userRepo.save(user);
		return user;
	}
}
