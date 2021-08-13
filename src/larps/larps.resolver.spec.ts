import { Test, TestingModule } from '@nestjs/testing';
import { LarpsResolver } from './larps.resolver';
import { LarpsService } from './larps.service';

describe('LarpsResolver', () => {
  let resolver: LarpsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LarpsResolver, LarpsService],
    }).compile();

    resolver = module.get<LarpsResolver>(LarpsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
