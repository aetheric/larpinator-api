import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'user' })
export class User {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column({ name: 'first_name' })
	firstName: string;

	@Field()
	@Column({ name: 'last_name' })
	lastName: string;

	@Field()
	@Column({ unique: true })
	email: string;

	@Field()
	@Column({
		type: 'varchar',
		nullable: false,
	})
	password: string;

	@BeforeInsert() async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10);
	}

	@Field()
	@Column({ name: 'is_active', default: true })
	isActive: boolean;

	@Field()
	@CreateDateColumn({
		name: 'created_at',
	})
	createdAt: Date;

	@Field()
	@UpdateDateColumn({
		name: 'updated_at',
	})
	updatedAt: Date;

	@Field()
	@DeleteDateColumn({
		name: 'deleted_at',
	})
	deletedAt: Date;

	async comparePassword(candidatePassword: string) {
		return await bcrypt.compare(candidatePassword, this.password);
	}
}
