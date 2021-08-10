import {
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
} from "typeorm";
import {
	Field,
	ID,
} from "@nestjs/graphql";

export abstract class Datum<T extends Datum<T, U, S>, U extends UpdateReference<U, T, S>, S> {

	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	abstract updates: U[];

}

export abstract class DatumReference<O extends Datum<O, any, any>, R extends Datum<R, any, any>> {

	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	relevance!: string;

	abstract owner: O;

	abstract reference: R;

}

export abstract class SubDatum<P extends Datum<P, any, any>> {

	@PrimaryGeneratedColumn()
	id!: number;

	abstract parent: P;

}

export abstract class UpdateReference<U extends UpdateReference<U, T, S>, T extends Datum<T, U, S>, S> {

	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@CreateDateColumn({ type: 'timestamp' })
	time: Date;

	abstract status: S;

	@Column()
	notes!: string;

	abstract owner: T;

}

export enum Ranking {
	most = 2,
	more = 1,
	none = 0,
	less= -1,
	least = -2
}
