import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Plot } from './data/plot';
import { ConnectionManager, getRepository } from 'typeorm';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	async getHello(): Promise<Plot> {
		const repository = getRepository(Plot, 'mongodb');

		const plot = new Plot();
		plot.synopsis = 'aaa';
		await repository.save(plot);

		return plot;
	}
}
