import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';
import { toUserDto } from './users.mappers';
import {UserDto} from "./dto/user.dto";

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<UserDto> {
    const user = await this.userRepo.findOne(id);
    return toUserDto(user);
  }

  findByEmail(email: string) {
    return this.userRepo.findByEmail(email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
