import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddUserRole1628761611815 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE users ADD role VARCHAR(255) DEFAULT 'player' AFTER email`,
		);
		await queryRunner.query(
			`ALTER TABLE users ADD gender VARCHAR(255) NULL AFTER role`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE users DROP COLUMN role`);
		await queryRunner.query(`ALTER TABLE users DROP COLUMN gender`);
	}
}
