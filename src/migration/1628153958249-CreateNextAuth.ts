import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateNextAuth1628153958249 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			CREATE TABLE accounts
			(
				id                   INT NOT NULL AUTO_INCREMENT,
				compound_id          VARCHAR(255) NOT NULL,
				user_id              INTEGER NOT NULL,
				provider_type        VARCHAR(255) NOT NULL,
				provider_id          VARCHAR(255) NOT NULL,
				provider_account_id  VARCHAR(255) NOT NULL,
				refresh_token        TEXT,
				access_token         TEXT,
				access_token_expires TIMESTAMP(6),
				created_at           TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				updated_at           TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				PRIMARY KEY (id)
			);
		`);

		await queryRunner.query(`
			CREATE TABLE sessions
			(
				id            INT NOT NULL AUTO_INCREMENT,
				user_id       INTEGER NOT NULL,
				expires       TIMESTAMP(6) NOT NULL,
				session_token VARCHAR(255) NOT NULL,
				access_token  VARCHAR(255) NOT NULL,
				created_at    TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				updated_at    TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				PRIMARY KEY (id)
			);
		`);

		await queryRunner.query(`
			CREATE TABLE users
			(
				id             INT NOT NULL AUTO_INCREMENT,
				name           VARCHAR(255),
				email          VARCHAR(255),
				email_verified TIMESTAMP(6),
				image          VARCHAR(255),
				created_at     TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				updated_at     TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				PRIMARY KEY (id)
			);
		`);

		await queryRunner.query(`
			CREATE TABLE verification_requests
			(
				id         INT NOT NULL AUTO_INCREMENT,
				identifier VARCHAR(255) NOT NULL,
				token      VARCHAR(255) NOT NULL,
				expires    TIMESTAMP(6) NOT NULL,
				created_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				updated_at TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
				PRIMARY KEY (id)
			);
		`);
		await queryRunner.query(
			`CREATE UNIQUE INDEX compound_id ON accounts(compound_id);`,
		);
		await queryRunner.query(
			`CREATE INDEX provider_account_id ON accounts(provider_account_id);`,
		);
		await queryRunner.query(
			`CREATE INDEX provider_id ON accounts(provider_id);`,
		);
		await queryRunner.query(`CREATE INDEX user_id ON accounts(user_id);`);
		await queryRunner.query(
			`CREATE UNIQUE INDEX session_token ON sessions(session_token);`,
		);
		await queryRunner.query(
			`CREATE UNIQUE INDEX access_token ON sessions(access_token);`,
		);
		await queryRunner.query(`CREATE UNIQUE INDEX email ON users(email);`);
		await queryRunner.query(
			`CREATE UNIQUE INDEX token ON verification_requests(token);`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('verification_requests');
		await queryRunner.dropTable('users');
		await queryRunner.dropTable('sessions');
		await queryRunner.dropTable('accounts');
	}
}
