import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'larps' })
export class Larp {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	title?: string;

	@Field()
	@Column()
	description?: string;

	@Field()
	@Column({ name: 'is_published', default: false })
	isPublished!: boolean;

	@Field()
	@CreateDateColumn({
		name: 'start_at',
	})
	startAt?: Date;

	@Field()
	@CreateDateColumn({
		name: 'end_at',
	})
	endAt?: Date;

	@Field()
	@CreateDateColumn({
		name: 'created_at',
	})
	createdAt!: Date;

	@Field()
	@UpdateDateColumn({
		name: 'updated_at',
	})
	updatedAt!: Date;

	@Field()
	@DeleteDateColumn({
		name: 'deleted_at',
	})
	deletedAt?: Date;
}
