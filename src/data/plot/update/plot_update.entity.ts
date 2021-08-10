import { Field, ObjectType } from '@nestjs/graphql';
import { UpdateReference } from 'src/data/common';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Plot, PlotStatus } from '../plot.entity';

@ObjectType()
@Entity({ name: 'plot_updates' })
export class PlotUpdate extends UpdateReference<PlotUpdate, Plot, PlotStatus> {

	@ManyToOne(() => Plot, owner => owner.updates)
	owner!: Plot;

	@Field()
	@Column()
	status!: PlotStatus;

}
