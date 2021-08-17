import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { table_name } from '../data/location/update/location_update.entity';
import { table_name as owner_table_name } from '../data/location/location.entity';

export class AddLocationUpdatesTable1629191703990 implements MigrationInterface {

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
					name: 'ownerId',
					type: 'int',
				},
				{
					name: 'status',
					type: 'varchar',
				},
			],
		}), true);

		queryRunner.clearSqlMemory();

		await queryRunner.createForeignKey(table_name, new TableForeignKey({
			columnNames: [ 'ownerId' ],
			referencedTableName: owner_table_name,
			referencedColumnNames: [ 'id' ],
			onDelete: 'CASCADE',
		}));

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name, true);
	}

}
