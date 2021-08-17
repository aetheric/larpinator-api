import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { DatumReference } from '../../common';
import { Participant } from '../../participant/participant.entity';
import { Plot } from '../plot.entity';

export const table_name = 'plot_participants';

@ObjectType()
@Entity({ name: table_name })
export class PlotParticipant extends DatumReference<Plot, Participant> {

	@ManyToOne(() => Plot, (plot) => plot.plotLocations)
	owner!: Plot;

	@ManyToOne(() => Participant, participant => participant.plotParticipants)
	reference!: Participant;

	@Field()
	@Column()
	required!: boolean;

}
