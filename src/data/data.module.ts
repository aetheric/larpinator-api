import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location/location.entity';
import { LocationUpdate } from './location/update/location_update.entity';
import { Participant } from './participant/participant.entity';
import { PlotLocation } from './plot/location/plot_location.entity';
import { PlotParticipant } from './plot/participant/plot_participant.entity';
import { Plot } from './plot/plot.entity';
import { PlotResource } from './plot/resource/plot_resource.entity';
import { PlotUpdate } from './plot/update/plot_update.entity';
import { Resource } from './resource/resource.entity';
import { ResourceResolver } from './resource/resource.resolver';
import { PlotResolver } from './plot/plot.resolver';
import { ParticipantResolver } from './participant/participant.resolver';
import { LocationResolver } from './location/location.resolver';
import { ParticipantUpdate } from './participant/update/participant_update.entity';
import { ResourceUpdate } from './resource/update/resource_update.entity';

@Module({
	providers: [
		ResourceResolver,
		PlotResolver,
		ParticipantResolver,
		LocationResolver,
	],
	imports: [
		TypeOrmModule.forFeature([
			Location,
			LocationUpdate,
			Participant,
			ParticipantUpdate,
			Plot,
			PlotLocation,
			PlotParticipant,
			PlotResource,
			PlotUpdate,
			Resource,
			ResourceUpdate,
		]),
	],
	exports: [
		ResourceResolver,
		PlotResolver,
		ParticipantResolver,
		LocationResolver,
	],
})
export class DataModule {
}
