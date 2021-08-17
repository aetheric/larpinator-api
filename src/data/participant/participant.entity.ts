import { Entity, OneToMany } from 'typeorm';
import { Datum } from '../common';
import { ObjectType } from '@nestjs/graphql';
import { PlotParticipant } from '../plot/participant/plot_participant.entity';
import { ParticipantUpdate } from './update/participant_update.entity';

export const table_name = 'participants';

@ObjectType()
@Entity({ name: table_name })
export class Participant extends Datum<Participant, ParticipantUpdate, ParticipantStatus> {

	@OneToMany(() => PlotParticipant, plotParticipant => plotParticipant.owner)
	plotParticipants!: PlotParticipant[];

	@OneToMany(() => ParticipantUpdate, update => update.owner)
	updates!: ParticipantUpdate[];

}

export enum ParticipantStatus {
	proposed,
}
