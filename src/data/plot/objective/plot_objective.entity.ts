import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { SubDatum } from '../../common';
import { Plot } from '../plot.entity';

@ObjectType()
@Entity({ name: 'plot_objectives' })
export class PlotObjective extends SubDatum<Plot> {

	@ManyToOne(() => Plot, parent => parent.objectives)
	parent!: Plot;

	@Field()
	@Column()
	description!: string;

}
