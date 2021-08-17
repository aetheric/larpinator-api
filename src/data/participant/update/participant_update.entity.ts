import { Field, ObjectType } from '@nestjs/graphql';
import { UpdateReference } from 'src/data/common';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Participant, ParticipantStatus } from '../participant.entity';

export const table_name = 'participant_updates';

@ObjectType()
@Entity({ name: table_name })
export class ParticipantUpdate extends UpdateReference<ParticipantUpdate, Participant, ParticipantStatus> {

	@ManyToOne(() => Participant, owner => owner.updates)
	owner!: Participant;

	@Field()
	@Column()
	status!: ParticipantStatus;

}
