import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { table_name } from '../data/location/location.entity'

export class AddLocationsTable1629191696854 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: table_name,
			columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',
				},
				{
					name: 'name',
					type: 'varchar',
				},
			]
		}), true);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name, true);
	}

}
