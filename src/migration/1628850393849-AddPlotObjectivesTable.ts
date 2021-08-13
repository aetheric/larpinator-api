import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { table_name } from '../data/plot/objective/plot_objective.entity';
import { table_name as plot_table_name } from '../data/plot/plot.entity';

export class AddPlotObjectivesTable1628850393849 implements MigrationInterface {

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
					name: 'parentId',
					type: 'int',
				},
				{
					name: 'description',
					type: 'varchar',
				},
			],
		}), true)

		queryRunner.clearSqlMemory();

		await queryRunner.createForeignKey(table_name, new TableForeignKey({
			columnNames: [ 'parentId' ],
			referencedTableName: plot_table_name,
			referencedColumnNames: [ 'id' ],
			onDelete: 'CASCADE',
		}))

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name, true)
	}

}
