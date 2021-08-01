import {
	Column,
	CreateDateColumn,
	ObjectID,
	ObjectIdColumn,
} from "typeorm";
import {
	Field,
	ID,
} from "@nestjs/graphql";

export abstract class Datum<U> {

	@Field(type => ID)
	@ObjectIdColumn()
	id: ObjectID;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column(() => DatumUpdate)
	updates: DatumUpdate<U>[];

}

export class DatumUpdate<E> {

	@Field()
	@Column()
	status: E;

	@Field()
	@Column()
	notes: string;

	@Field()
	@CreateDateColumn({ type: 'timestamp' })
	time: Date;

}
