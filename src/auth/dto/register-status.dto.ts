import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RegisterStatusDto {
	@Field()
	readonly success: boolean;

	@Field()
	readonly message: string;
}
