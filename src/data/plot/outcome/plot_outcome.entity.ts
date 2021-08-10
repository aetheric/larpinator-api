import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { SubDatum } from '../../common';
import { Plot } from '../plot.entity';

@ObjectType()
@Entity({ name: 'plot_outcomes' })
export class PlotOutcome extends SubDatum<Plot> {

	@ManyToOne(() => Plot, parent => parent.outcomes)
	parent!: Plot;

	@Field()
	@Column()
	description!: string;

	@Field()
	@Column()
	result!: number

}
