import { Field, ObjectType } from '@nestjs/graphql';
import { UpdateReference } from 'src/data/common';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Location, LocationStatus } from '../location.entity';

@ObjectType()
@Entity({ name: 'location_updates' })
export class LocationUpdate extends UpdateReference<LocationUpdate, Location, LocationStatus> {

	@ManyToOne(() => Location, owner => owner.updates)
	owner!: Location;

	@Field()
	@Column()
	status!: LocationStatus;

}
