import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UpdateReference } from '../../common';
import { Resource, ResourceStatus } from '../resource.entity';

export const table_name = 'resource_updates';

@ObjectType()
@Entity({ name: table_name })
export class ResourceUpdate extends UpdateReference<ResourceUpdate, Resource, ResourceStatus> {

	@ManyToOne(() => Resource, owner => owner.updates)
	owner!: Resource;

	@Field()
	@Column()
	status!: ResourceStatus;

}
