import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';
import { toUserDto } from './users.mappers';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(private readonly userRepo: UserRepository) {}

	findAll() {
		return `This action returns all users`;
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}

	async findOne(options?: object): Promise<UserDto> {
		const user = await this.userRepo.findOne(options);
		return toUserDto(user);
	}

	async findByLogin({ email, password }: LoginUserDto): Promise<UserDto> {
		const user = await this.userRepo.findOne({ where: { email } });

		if (!user) {
			throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
		}

		// compare passwords
		const areEqual = await user.comparePassword(password);

		if (!areEqual) {
			throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
		}

		return toUserDto(user);
	}

	async findByPayload({ email }: any): Promise<UserDto> {
		return await this.findOne({
			where: { email },
		});
	}

	async create(userDto: CreateUserDto): Promise<UserDto> {
		const { email, password } = userDto;

		// check if the user exists in the db
		const userInDb = await this.userRepo.findOne({
			where: { email },
		});
		if (userInDb) {
			throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
		}

		const user: User = await this.userRepo.create({
			email,
			password,
		});
		await this.userRepo.save(user);
		return toUserDto(user);
	}
}
