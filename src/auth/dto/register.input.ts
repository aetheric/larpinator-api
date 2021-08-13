import { InputType, Field } from '@nestjs/graphql';
import { UserGender } from '../../users/entities/user.entity';

@InputType()
export class RegisterInput {
	@Field()
	readonly name: string;

	@Field()
	readonly email: string;

	@Field()
	readonly password: string;

	@Field()
	readonly gender: UserGender;
}
