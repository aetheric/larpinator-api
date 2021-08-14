import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { DatumReference } from '../../common';
import { Resource } from '../../resource/resource.entity';
import { Plot } from '../plot.entity';

export const table_name = 'plot_resources'

@ObjectType()
@Entity({ name: table_name })
export class PlotResource extends DatumReference<Plot, Resource> {

	@ManyToOne(() => Plot, (plot) => plot.plotLocations)
	owner!: Plot;

	@ManyToOne(() => Resource, resource => resource.plotResources)
	reference!: Resource;

	@Field()
	@Column()
	qty_min!: number;

	@Field()
	@Column()
	qty_scale!: number;

}
