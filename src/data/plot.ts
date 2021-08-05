import { Column, Entity, OneToOne } from 'typeorm';
import { Datum, DatumUpdate } from './_common';
import { Location } from './location';
import { Participant } from './participant';
import { Resource } from './resource';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'plot' })
export class Plot {
	// TODO: rest of fields

	@Field()
	@Column()
	synopsis: string;

	// @Column(() => PlotLocation)
	// locations: PlotLocation[];
	//
	// @Column(() => PlotObjective)
	// objectives: PlotObjective[];
	//
	// @Column(() => PlotOutcome)
	// outcomes: PlotOutcome[];
	//
	// @Column(() => PlotParticipant)
	// participants: PlotParticipant[];
	//
	// @Column(() => PlotResource)
	// resources: PlotResource[];
	//
	// @Column(() => PlotUpdate)
	// updates: PlotUpdate[];
}

// export abstract class PlotDatumReference<E extends Datum<any>> {
// 	abstract reference: E;
//
// 	@Column()
// 	relevance: string;
// }
//
// export class PlotLocation extends PlotDatumReference<Location> {
// 	@Column(() => Location)
// 	reference: Location;
// }
//
// export class PlotObjective {
// 	@Column()
// 	description: string;
//
// 	@Column()
// 	tags: String[];
// }
//
// export class PlotOutcome {
// 	@Column()
// 	description: string;
//
// 	@Column()
// 	result: number;
// }
//
// export class PlotParticipant extends PlotDatumReference<Participant> {
// 	@Column(() => Participant)
// 	reference: Participant;
//
// 	@Column()
// 	required: boolean;
// }
//
// export class PlotResource extends PlotDatumReference<Resource> {
// 	@Column(() => Resource)
// 	reference: Resource;
//
// 	@Column()
// 	qty_min: number;
//
// 	@Column()
// 	qty_scale: number;
// }
//
// export class PlotUpdate extends DatumUpdate<PlotStatus> {}
//
// export enum PlotStatus {
// 	proposed,
// 	writing,
// 	ready,
// 	running,
// 	complete,
// 	cancelled,
// }
