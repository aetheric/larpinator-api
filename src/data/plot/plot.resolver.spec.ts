import { Test, TestingModule } from '@nestjs/testing';
import { PlotResolver } from './plot.resolver';

describe('PlotResolver', () => {
	let resolver: PlotResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ PlotResolver ],
		}).compile();

		resolver = module.get<PlotResolver>(PlotResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
