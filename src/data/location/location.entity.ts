import { Entity, OneToMany } from "typeorm";
import { Datum } from "../common";
import { ObjectType } from "@nestjs/graphql";
import { PlotLocation } from '../plot/location/plot_location.entity';
import { LocationUpdate } from './update/location_update.entity';

@ObjectType()
@Entity({ name: 'locations' })
export class Location extends Datum<Location, LocationUpdate, LocationStatus> {

	@OneToMany(() => PlotLocation, plotLocation => plotLocation.owner)
	plotLocations!: PlotLocation[];

	@OneToMany(() => LocationUpdate, update => update.owner)
	updates!: LocationUpdate[];

}

export enum LocationStatus {
	proposed,
}
