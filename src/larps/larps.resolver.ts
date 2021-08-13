import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LarpsService } from './larps.service';
import { Larp } from './entities/larp.entity';
import { CreateLarpInput } from './dto/create-larp.input';
import { UpdateLarpInput } from './dto/update-larp.input';
import { UseGuards } from '@nestjs/common';
import { GraphqlAuthGuard } from '../auth/graphql-auth.guard';

@Resolver(() => Larp)
export class LarpsResolver {
	constructor(private readonly larpsService: LarpsService) {}
	@UseGuards(GraphqlAuthGuard)
	@Mutation(() => Larp)
	async createLarp(@Args('input') createLarpInput: CreateLarpInput) {
		return await this.larpsService.create(createLarpInput);
	}
	@UseGuards(GraphqlAuthGuard)
	@Query(() => [Larp], { name: 'larps' })
	async findAll() {
		return await this.larpsService.findAll();
	}
	@UseGuards(GraphqlAuthGuard)
	@Query(() => Larp, { name: 'larp' })
	async findOne(@Args('id', { type: () => Int }) id: number) {
		return await this.larpsService.findOne({ where: { id } });
	}
	@UseGuards(GraphqlAuthGuard)
	@Mutation(() => Larp)
	async updateLarp(@Args('updateLarpInput') updateLarpInput: UpdateLarpInput) {
		return await this.larpsService.update(updateLarpInput.id, updateLarpInput);
	}
	@UseGuards(GraphqlAuthGuard)
	@Mutation(() => Larp)
	async removeLarp(@Args('id', { type: () => Int }) id: number) {
		return await this.larpsService.remove(id);
	}
}
