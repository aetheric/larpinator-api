import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { table_name } from '../data/plot/resource/plot_resource.entity';
import { table_name as plot_table_name } from '../data/plot/plot.entity';
import { table_name as resource_table_name } from '../data/resource/resource.entity';

export class AddPlotResourcesTable1628928550994 implements MigrationInterface {

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
				{
					name: 'qty_min',
					type: 'int',
				},
				{
					name: 'qty_scale',
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
		}))

		await queryRunner.createForeignKey(table_name, new TableForeignKey({
			columnNames: [ 'referenceId' ],
			referencedTableName: resource_table_name,
			referencedColumnNames: [ 'id' ],
			onDelete: 'CASCADE',
		}))

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name, true);
	}

}
