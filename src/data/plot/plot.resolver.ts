import { Query, Resolver } from '@nestjs/graphql';
import { Plot } from "./plot.entity";
import { Connection } from "typeorm";

@Resolver(() => Plot)
export class PlotResolver {

	constructor(private readonly conn: Connection) {}

	@Query(() => Plot)
	async listPlots() {
		return await this.conn.getMongoRepository(Plot).find()
	}

}
