import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
	@Field()
	readonly email: string;

	@Field()
	readonly password: string;
}
