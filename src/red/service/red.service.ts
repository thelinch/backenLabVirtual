import { Injectable } from '@nestjs/common';
import { RedRepository } from '../respository/red.repository';
import { Red } from '../../models/red.entity';
@Injectable()
export class RedService {
  constructor(private readonly redRespository: RedRepository) {}

  async all() {
    return await this.redRespository.find({ where: { status: true } });
  }

  async getFindById(id: number) {
    return await this.redRespository.findOne(id, {
      relations: ['dispositives'],
    });
  }
  async save(red: Red) {
    return await this.redRespository.save(red);
  }
  async update(id: number, newDataRed: Red) {
    return await this.redRespository.update(id, newDataRed);
  }
  
}
