import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLarpInput {
	@Field()
	readonly title: string;

	@Field()
	readonly description: string;

	@Field()
	readonly isPublished: boolean;

	@Field()
	readonly startAt: Date;

	@Field()
	readonly endAt: Date;
}
