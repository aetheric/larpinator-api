import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { DatumReference } from '../../common';
import { Participant } from '../../participant/participant.entity';
import { Plot } from '../plot.entity';

@ObjectType()
@Entity({ name: 'plot_participants' })
export class PlotParticipant extends DatumReference<Plot, Participant> {

	@ManyToOne(() => Plot, (plot) => plot.plotLocations)
	owner!: Plot;

	@ManyToOne(() => Participant, participant => participant.plotParticipants)
	reference!: Participant;

	@Field()
	@Column()
	required!: boolean;

}
