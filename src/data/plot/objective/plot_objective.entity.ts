import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SubDatum } from '../../common';
import { Plot } from '../plot.entity';

export const table_name = 'plot_objectives';

@ObjectType()
@Entity({ name: table_name })
export class PlotObjective extends SubDatum<Plot> {

	@ManyToOne(() => Plot, parent => parent.objectives)
	@JoinColumn({ name: 'parentId' })
	parent!: Plot;

	@Field()
	@Column()
	description!: string;

}
