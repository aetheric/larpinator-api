import {
	Entity
} from "typeorm";
import {
	Datum
} from "./_common";
import {ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'resource' })
export class Resource extends Datum<ResourceStatus> {

}

export enum ResourceStatus {
	proposed,
}
