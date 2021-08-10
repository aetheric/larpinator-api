import { ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne } from 'typeorm';
import { DatumReference } from '../../common';
import { Plot } from '../plot.entity';
import { Location } from '../../location/location.entity'

@ObjectType()
@Entity({ name: 'plot_locations' })
export class PlotLocation extends DatumReference<Plot, Location> {

	@ManyToOne(() => Plot, (plot) => plot.plotLocations)
	owner!: Plot;

	@ManyToOne(() => Location, location => location.plotLocations)
	reference!: Location;

}
