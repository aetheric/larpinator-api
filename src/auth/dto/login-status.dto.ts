import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginStatusDto {
	@Field()
	readonly email: string;

	@Field()
	readonly expiresIn: string;

	@Field()
	readonly accessToken: string;
}
