import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Ranking, SubDatum } from '../../common';
import { Plot } from '../plot.entity';

export const table_name = 'plot_outcomes';

@ObjectType()
@Entity({ name: table_name })
export class PlotOutcome extends SubDatum<Plot> {

	@ManyToOne(() => Plot, parent => parent.outcomes)
	@JoinColumn({ name: 'parentId' })
	parent!: Plot;

	@Field()
	@Column()
	description!: string;

	@Field()
	@Column()
	result!: Ranking

}
