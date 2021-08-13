import { CreateLarpInput } from './create-larp.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLarpInput extends PartialType(CreateLarpInput) {
  @Field(() => Int)
  id: number;
}
