import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { table_name } from '../data/plot/location/plot_location.entity';
import { table_name as plot_table_name } from '../data/plot/plot.entity';
import { table_name as location_table_name } from '../data/location/location.entity';

export class AddPlotLocationsTable1629191715837 implements MigrationInterface {

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
					name: 'referenceId',
					type: 'int',
				},
			]
		}), true);

		queryRunner.clearSqlMemory();

		await queryRunner.createForeignKey(table_name, new TableForeignKey({
			columnNames: [ 'ownerId' ],
			referencedTableName: plot_table_name,
			referencedColumnNames: [ 'id' ],
			onDelete: 'CASCADE',
		}));

		await queryRunner.createForeignKey(table_name, new TableForeignKey({
			columnNames: [ 'referenceId' ],
			referencedTableName: location_table_name,
			referencedColumnNames: [ 'id' ],
			onDelete: 'CASCADE',
		}));

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name, true);
	}

}
