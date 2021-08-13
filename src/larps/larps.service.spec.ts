import { Test, TestingModule } from '@nestjs/testing';
import { LarpsService } from './larps.service';

describe('LarpsService', () => {
  let service: LarpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LarpsService],
    }).compile();

    service = module.get<LarpsService>(LarpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
