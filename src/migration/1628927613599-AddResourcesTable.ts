import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { table_name } from '../data/resource/resource.entity';

export class AddResourcesTable1628927613599 implements MigrationInterface {

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
			]
		}), true)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name, true);
	}

}
