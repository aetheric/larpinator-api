import { Entity, OneToMany } from "typeorm";
import { Datum } from "../common";
import { ObjectType } from "@nestjs/graphql";
import { PlotResource } from '../plot/resource/plot_resource.entity';
import { ResourceUpdate } from './update/resource_update.entity';

@ObjectType()
@Entity({ name: 'resources' })
export class Resource extends Datum<Resource, ResourceUpdate, ResourceStatus> {

	@OneToMany(() => PlotResource, plotResource => plotResource.owner)
	plotResources!: PlotResource[];

	@OneToMany(() => ResourceUpdate, update => update.owner)
	updates!: ResourceUpdate[];

}

export enum ResourceStatus {
	proposed,
}
