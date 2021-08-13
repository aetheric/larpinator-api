import { Module } from '@nestjs/common';
import { LarpsService } from './larps.service';
import { LarpsResolver } from './larps.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Larp } from './entities/larp.entity';
import { Repository } from 'typeorm';

@Module({
	providers: [LarpsResolver, LarpsService],
	imports: [TypeOrmModule.forFeature([Larp])],
	exports: [LarpsResolver, LarpsService],
})
export class LarpsModule {}
