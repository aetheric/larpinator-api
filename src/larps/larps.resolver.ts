import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LarpsService } from './larps.service';
import { Larp } from './entities/larp.entity';
import { CreateLarpInput } from './dto/create-larp.input';
import { UpdateLarpInput } from './dto/update-larp.input';

@Resolver(() => Larp)
export class LarpsResolver {
  constructor(private readonly larpsService: LarpsService) {}

  @Mutation(() => Larp)
  createLarp(@Args('createLarpInput') createLarpInput: CreateLarpInput) {
    return this.larpsService.create(createLarpInput);
  }

  @Query(() => [Larp], { name: 'larps' })
  findAll() {
    return this.larpsService.findAll();
  }

  @Query(() => Larp, { name: 'larp' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.larpsService.findOne(id);
  }

  @Mutation(() => Larp)
  updateLarp(@Args('updateLarpInput') updateLarpInput: UpdateLarpInput) {
    return this.larpsService.update(updateLarpInput.id, updateLarpInput);
  }

  @Mutation(() => Larp)
  removeLarp(@Args('id', { type: () => Int }) id: number) {
    return this.larpsService.remove(id);
  }
}
