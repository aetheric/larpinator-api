import { CreateLarpInput } from './create-larp.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLarpInput extends PartialType(CreateLarpInput) {
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
