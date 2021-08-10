import { Column, Entity, OneToMany } from 'typeorm';
import { Datum, Ranking } from "../common";
import { Field, ObjectType } from "@nestjs/graphql";
import { PlotLocation } from './location/plot_location.entity';
import { PlotObjective } from './objective/plot_objective.entity';
import { PlotOutcome } from './outcome/plot_outcome.entity';
import { PlotParticipant } from './participant/plot_participant.entity';
import { PlotResource } from './resource/plot_resource.entity';
import { PlotUpdate } from './update/plot_update.entity';

@ObjectType()
@Entity({ name: 'plots' })
export class Plot extends Datum<Plot, PlotUpdate, PlotStatus> {

	@Field()
	@Column()
	priority!: Ranking;

	@Field()
	@Column()
	size!: Ranking;

	@Field()
	@Column()
	duration!: Ranking;

	@Field()
	@Column()
	timing!: number;

	@Field()
	@Column()
	synopsis!: string;

	@OneToMany(() => PlotObjective, plotObjective => plotObjective.parent)
	objectives!: PlotObjective[];

	@OneToMany(() => PlotOutcome, plotOutcome => plotOutcome.parent)
	outcomes!: PlotOutcome[];

	@OneToMany(() => PlotLocation, plotLocation => plotLocation.reference)
	plotLocations!: PlotLocation[];

	@OneToMany(() => PlotParticipant, plotParticipant => plotParticipant.reference)
	plotParticipants!: PlotParticipant[];

	@OneToMany(() => PlotResource, plotResource => plotResource.reference)
	plotResources!: PlotResource[];

	@OneToMany(() => PlotUpdate, plotUpdate => plotUpdate.owner)
	updates!: PlotUpdate[];

}

export enum PlotStatus {
	proposed,
	writing,
	ready,
	running,
	complete,
	cancelled
}
