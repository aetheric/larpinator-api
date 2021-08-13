import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLarpInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
