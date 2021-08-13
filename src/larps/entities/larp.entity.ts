import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Larp {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
