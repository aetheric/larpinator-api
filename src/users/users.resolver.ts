import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Resolver((of) => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}
	@Query((returns) => User)
	async getUserById(@Args({ name: 'id', type: () => Int }) id: number) {
		return await this.usersService.findOne({ where: { id } });
	}
}
