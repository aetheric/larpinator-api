import {
	Entity
} from "typeorm";
import {
	Datum
} from "./_common";
import {ObjectType} from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'participant' })
export class Participant extends Datum<ParticipantStatus> {
}

export enum ParticipantStatus {
	proposed,
}
