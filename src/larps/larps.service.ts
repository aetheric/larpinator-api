import { Injectable } from '@nestjs/common';
import { CreateLarpInput } from './dto/create-larp.input';
import { UpdateLarpInput } from './dto/update-larp.input';
import { Larp } from './entities/larp.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LarpsService {
	constructor(@InjectRepository(Larp) private larpRepo: Repository<Larp>) {}
	async create(createLarpInput: CreateLarpInput): Promise<Larp> {
		const larp: Larp = await this.larpRepo.create(createLarpInput);
		await this.larpRepo.save(larp);
		return larp;
	}

	async findAll(options?: object): Promise<Larp[]> {
		return await this.larpRepo.find(options);
	}

	async findOne(options?: object): Promise<Larp> {
		return await this.larpRepo.findOne(options);
	}

	async update(id: number, updateLarpInput: UpdateLarpInput): Promise<Larp> {
		await this.larpRepo.update(id, updateLarpInput);
		return await this.larpRepo.findOne({ where: { id } });
	}

	async remove(id: number): Promise<Larp> {
		await this.larpRepo.softDelete(id);
		return await this.larpRepo.findOne({ where: { id } });
	}
}
