import {
	Entity,
} from "typeorm";
import {
	Datum
} from "./_common";
import {ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'location' })
export class Location extends Datum<LocationStatus> {

}

export enum LocationStatus {
	proposed,
}
