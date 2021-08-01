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

@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'first_name' })
	firstName: string;

	@Column({ name: 'last_name' })
	lastName: string;

	@Column({ unique: true })
	email: string;

	@Column({
		type: 'varchar',
		nullable: false,
	})
	password: string;

	@BeforeInsert() async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10);
	}

	@Column({ name: 'is_active', default: true })
	isActive: boolean;

	@CreateDateColumn({
		name: 'created_at',
	})
	createdAt: Date;

	@UpdateDateColumn({
		name: 'updated_at',
	})
	updatedAt: Date;

	@DeleteDateColumn({
		name: 'deleted_at',
	})
	deletedAt: Date;

	async comparePassword(candidatePassword: string) {
		return await bcrypt.compare(candidatePassword, this.password);
	}
}
