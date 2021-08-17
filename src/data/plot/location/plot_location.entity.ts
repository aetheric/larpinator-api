import { ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { DatumReference } from '../../common';
import { Plot } from '../plot.entity';
import { Location } from '../../location/location.entity'

export const table_name = 'plot_locations';

@ObjectType()
@Entity({ name: table_name })
export class PlotLocation extends DatumReference<Plot, Location> {

	@ManyToOne(() => Plot, (plot) => plot.plotLocations)
	owner!: Plot;

	@ManyToOne(() => Location, location => location.plotLocations)
	reference!: Location;

}
