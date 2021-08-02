import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolver';

@Module({
	providers: [UsersService, UsersResolver],
	imports: [TypeOrmModule.forFeature([User, UserRepository])],
	exports: [UsersService, UsersResolver],
})
export class UsersModule {}
