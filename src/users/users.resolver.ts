import { Query, Resolver, Args, ID } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Resolver((of) => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}
	@Query((returns) => User)
	async getUserById(@Args({ name: 'id', type: () => ID }) id: number) {
		return await this.usersService.findOne({ where: { id } });
	}
}
