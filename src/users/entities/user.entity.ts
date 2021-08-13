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

export enum UserRole {
	ADMIN = 'admin',
	PLAYER = 'player',
}

export enum UserGender {
	MALE = 'male',
	FEMALE = 'female',
}

@ObjectType()
@Entity({ name: 'users' })
export class User {
	@Field((type) => ID)
	@PrimaryGeneratedColumn()
	id!: number;

	@Field()
	@Column()
	name!: string;

	@Field()
	@Column({ unique: true })
	email!: string;

	@Field()
	@Column({
		type: 'enum',
		enum: UserRole,
		default: UserRole.PLAYER,
	})
	role!: UserRole;

	@Field({ nullable: true })
	@Column({
		type: 'enum',
		enum: UserGender,
		nullable: true,
	})
	gender!: UserGender;

	@Field()
	@Column({
		type: 'varchar',
		nullable: false,
	})
	password!: string;

	@BeforeInsert() async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10);
	}

	@Field()
	@Column({ name: 'is_active', default: true })
	isActive!: boolean;

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

	async comparePassword(candidatePassword: string) {
		return await bcrypt.compare(candidatePassword, this.password);
	}
}
