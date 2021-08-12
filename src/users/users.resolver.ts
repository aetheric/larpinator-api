import { Query, Resolver, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { GraphqlAuthGuard } from '../auth/graphql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from './users.decorator';

@Resolver((of) => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}
	@UseGuards(GraphqlAuthGuard)
	@Query((returns) => User)
	async getUserById(@Args({ name: 'id', type: () => ID }) id: number) {
		return await this.usersService.findOne({ where: { id } });
	}

	@UseGuards(GraphqlAuthGuard)
	@Query((returns) => User)
	async getCurrentUser(@CurrentUser() user: User) {
		return await this.usersService.findOne({ where: { id: user.id } });
	}

	@UseGuards(GraphqlAuthGuard)
	@Query((returns) => [User])
	async getAllUsers() {
		return await this.usersService.findAll();
	}
}
