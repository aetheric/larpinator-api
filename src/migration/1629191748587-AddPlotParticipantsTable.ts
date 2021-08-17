import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';
import { table_name } from '../data/plot/participant/plot_participant.entity';
import { table_name as owner_table_name } from '../data/plot/plot.entity';
import { table_name as reference_table_name } from '../data/participant/participant.entity';

export class AddPlotParticipantsTable1629191748587 implements MigrationInterface {

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
					name: 'required',
					type: 'bool',
				}
			]
		}), true);

		queryRunner.clearSqlMemory();

		await queryRunner.createForeignKey(table_name, new TableForeignKey({
			columnNames: [ 'ownerId' ],
			referencedTableName: owner_table_name,
			referencedColumnNames: [ 'id' ],
			onDelete: 'CASCADE',
		}));

		await queryRunner.createForeignKey(table_name, new TableForeignKey({
			columnNames: [ 'referenceId' ],
			referencedTableName: reference_table_name,
			referencedColumnNames: [ 'id' ],
			onDelete: 'CASCADE',
		}));

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable(table_name, true);
	}

}
