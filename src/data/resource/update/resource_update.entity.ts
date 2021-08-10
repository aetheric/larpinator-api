import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { UpdateReference } from '../../common';
import { Resource, ResourceStatus } from '../resource.entity';

@ObjectType()
@Entity({ name: 'resource_updates' })
export class ResourceUpdate extends UpdateReference<ResourceUpdate, Resource, ResourceStatus> {

	@ManyToOne(() => Resource, owner => owner.updates)
	owner!: Resource;

	@Field()
	@Column()
	status!: ResourceStatus;

}
