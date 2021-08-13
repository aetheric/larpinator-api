import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { table_name } from '../data/plot/plot.entity';

export class AddPlotsTable1628845789065 implements MigrationInterface {

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
					name: 'priority',
					type: 'int',
				},
				{
					name: 'size',
					type: 'int',
				},
				{
					name: 'duration',
					type: 'int',
				},
				{
					name: 'timing',
					type: 'int',
				},
				{
					name: 'synopsis',
					type: 'varchar',
				},
			],
		}), true)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name)
	}

}
