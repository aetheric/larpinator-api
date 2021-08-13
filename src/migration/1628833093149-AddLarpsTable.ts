import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddLarpsTable1628833093149 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE TABLE larps (
					id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
					title varchar(255),
					description TEXT,
					is_published TINYINT(1) DEFAULT 0,
					start_at TIMESTAMP NULL DEFAULT NULL,
					end_at TIMESTAMP NULL DEFAULT NULL,
					created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
					updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
					deleted_at TIMESTAMP NULL DEFAULT NULL
				)`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`DROP TABLE IF EXISTS larps`);
	}
}
