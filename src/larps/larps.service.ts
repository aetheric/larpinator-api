import { Injectable } from '@nestjs/common';
import { CreateLarpInput } from './dto/create-larp.input';
import { UpdateLarpInput } from './dto/update-larp.input';

@Injectable()
export class LarpsService {
  create(createLarpInput: CreateLarpInput) {
    return 'This action adds a new larp';
  }

  findAll() {
    return `This action returns all larps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} larp`;
  }

  update(id: number, updateLarpInput: UpdateLarpInput) {
    return `This action updates a #${id} larp`;
  }

  remove(id: number) {
    return `This action removes a #${id} larp`;
  }
}
