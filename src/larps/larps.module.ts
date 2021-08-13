import { Module } from '@nestjs/common';
import { LarpsService } from './larps.service';
import { LarpsResolver } from './larps.resolver';

@Module({
  providers: [LarpsResolver, LarpsService]
})
export class LarpsModule {}
